/* api.js — direct browser calls to the Anthropic Messages API.
   Uses anthropic-dangerous-direct-browser-access so no server is needed. */
(function () {
  const GRE = window.GRE;
  const ENDPOINT = "https://api.anthropic.com/v1/messages";
  const VERSION = "2023-06-01";

  function headers() {
    return {
      "content-type": "application/json",
      "x-api-key": GRE.store.settings().apiKey.trim(),
      "anthropic-version": VERSION,
      "anthropic-dangerous-direct-browser-access": "true"
    };
  }

  function friendlyError(status, body) {
    let msg = (body && body.error && body.error.message) || "";
    if (status === 401) return "Invalid or missing API key. Open Settings and paste a valid Anthropic API key.";
    if (status === 403) return "This API key lacks permission for the chosen model. Try Opus 4.8 in Settings, or check your Anthropic plan.";
    if (status === 429) return "Rate limited by Anthropic. Wait a few seconds and try again.";
    if (status === 400 && /credit|billing|balance/i.test(msg)) return "Your Anthropic account needs credit/billing set up. Add credits at console.anthropic.com.";
    if (status >= 500) return "Anthropic had a server error. Try again in a moment.";
    return msg || ("Request failed (HTTP " + status + ").");
  }

  // Core streaming call. Returns the accumulated assistant text.
  // opts: { system, messages, schema, effort, thinking, maxTokens, onDelta, signal }
  async function call(opts) {
    if (!GRE.store.hasKey()) throw new Error("No API key set. Open Settings to add your Anthropic API key.");

    const body = {
      model: GRE.store.settings().model,
      max_tokens: opts.maxTokens || (opts.schema ? 12000 : 4000),
      stream: true,
      system: [{ type: "text", text: opts.system || GRE.prompts.SYSTEM, cache_control: { type: "ephemeral" } }],
      messages: opts.messages
    };

    const output_config = {};
    if (opts.effort) output_config.effort = opts.effort;
    if (opts.schema) output_config.format = { type: "json_schema", schema: opts.schema };
    if (Object.keys(output_config).length) body.output_config = output_config;
    if (opts.thinking) body.thinking = opts.thinking;

    let res;
    try {
      res = await fetch(ENDPOINT, {
        method: "POST", headers: headers(), body: JSON.stringify(body), signal: opts.signal
      });
    } catch (e) {
      if (e.name === "AbortError") throw e;
      throw new Error("Network error — check your internet connection.");
    }

    if (!res.ok) {
      let parsed = null;
      try { parsed = await res.json(); } catch (e) {}
      throw new Error(friendlyError(res.status, parsed));
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buf = "", text = "", stopReason = null;

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      const events = buf.split("\n\n");
      buf = events.pop();
      for (const evt of events) {
        const line = evt.split("\n").find(l => l.startsWith("data:"));
        if (!line) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        let data;
        try { data = JSON.parse(payload); } catch (e) { continue; }
        if (data.type === "content_block_delta" && data.delta) {
          if (data.delta.type === "text_delta") {
            text += data.delta.text;
            if (opts.onDelta) opts.onDelta(data.delta.text, text);
          }
          // thinking_delta intentionally ignored
        } else if (data.type === "message_delta" && data.delta) {
          if (data.delta.stop_reason) stopReason = data.delta.stop_reason;
        } else if (data.type === "error") {
          throw new Error((data.error && data.error.message) || "Streaming error from Anthropic.");
        }
      }
    }

    if (stopReason === "refusal") {
      throw new Error("The model declined this request. Try rephrasing, or switch the model in Settings.");
    }
    return text;
  }

  // one retry for transient failures
  async function withRetry(fn) {
    try { return await fn(); }
    catch (e) {
      if (e.name === "AbortError") throw e;
      if (/rate limited|server error|Network error/i.test(e.message)) {
        await new Promise(r => setTimeout(r, 1500));
        return await fn();
      }
      throw e;
    }
  }

  // Generate verified problems via structured output. Returns array of problems.
  async function problems(userText, opts) {
    opts = opts || {};
    const text = await withRetry(() => call({
      messages: [{ role: "user", content: userText }],
      schema: GRE.prompts.SET_SCHEMA,
      thinking: { type: "adaptive" },
      effort: opts.effort || "high",
      maxTokens: opts.maxTokens || 14000,
      signal: opts.signal,
      onDelta: opts.onDelta
    }));
    let obj;
    try { obj = JSON.parse(text); }
    catch (e) {
      const m = text.match(/\{[\s\S]*\}/);
      if (!m) throw new Error("The coach returned an unreadable problem set. Try again.");
      obj = JSON.parse(m[0]);
    }
    const list = (obj && obj.problems) || [];
    list.forEach((p, i) => { p.uid = (p.id || "p") + "-" + Date.now() + "-" + i; });
    return list;
  }

  // Streamed teaching / chat. Returns full text.
  async function chat(messages, onDelta, signal, system) {
    return withRetry(() => call({
      messages, onDelta, signal, system,
      effort: "medium",
      maxTokens: 4000
    }));
  }

  GRE.api = { call, problems, chat };
})();
