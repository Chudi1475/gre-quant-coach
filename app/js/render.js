/* render.js — shared rendering helpers. */
(function () {
  const GRE = window.GRE;
  const SUP = { "0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻","n":"ⁿ" };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // light math touch-ups on already-escaped text: x^2 -> x², sqrt(...) -> √(...)
  function math(escaped) {
    return escaped
      .replace(/\bsqrt\(/gi, "√(")
      .replace(/\^(-?\d)/g, (m, d) => d.split("").map(c => SUP[c] || ("^" + c)).join(""))
      .replace(/\*/g, "×");
  }

  function mathText(s) { return math(esc(s)).replace(/\n/g, "<br>"); }

  // very small markdown for streamed coach prose
  function mdLite(s) {
    let h = esc(s);
    h = h.replace(/`([^`]+)`/g, "<code>$1</code>");
    h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    // bullet lists
    const lines = h.split("\n");
    let out = [], inUl = false;
    for (let line of lines) {
      if (/^\s*[-•]\s+/.test(line)) {
        if (!inUl) { out.push("<ul>"); inUl = true; }
        out.push("<li>" + line.replace(/^\s*[-•]\s+/, "") + "</li>");
      } else if (/^\s*\d+[.)]\s+/.test(line)) {
        if (!inUl) { out.push("<ul>"); inUl = true; }
        out.push("<li>" + line.replace(/^\s*\d+[.)]\s+/, "") + "</li>");
      } else {
        if (inUl) { out.push("</ul>"); inUl = false; }
        out.push(line);
      }
    }
    if (inUl) out.push("</ul>");
    return math(out.join("\n")).replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>");
  }

  function toast(msg, kind) {
    const t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.className = "toast show" + (kind ? " " + kind : "");
    t.hidden = false;
    clearTimeout(t._timer);
    t._timer = setTimeout(() => { t.className = "toast"; t.hidden = true; }, 3200);
  }

  function mmss(sec) {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  GRE.r = { esc, math, mathText, mdLite, toast, mmss, el };
})();
