/* app.js — controller: routing, settings, modals, shortcuts. */
(function () {
  const GRE = window.GRE;
  let currentView = "dashboard";
  let currentArg = null;

  function go(view, arg) {
    if (!GRE.views[view]) view = "dashboard";
    if (GRE.quiz && GRE.quiz._active) { try { GRE.quiz._active.destroy(); } catch (e) {} GRE.quiz._active = null; }
    if (GRE._activeGen) { try { GRE._activeGen.abort(); } catch (e) {} GRE._activeGen = null; }
    currentView = view; currentArg = arg;
    document.querySelectorAll(".nav-item").forEach(b =>
      b.classList.toggle("active", b.getAttribute("data-view") === view));
    document.getElementById("main").scrollTop = 0;
    try { GRE.views[view](arg); }
    catch (e) { console.error(e); document.getElementById("view").innerHTML =
      "<div class='banner err'>Something went wrong rendering this screen: " + GRE.r.esc(e.message) + "</div>"; }
  }

  function refresh() { go(currentView, currentArg); }

  // download the full state as JSON (for backups + the daily coach to read)
  function downloadState(filename) {
    const blob = new Blob([GRE.store.exportJSON()], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(a.href);
  }
  // Save a snapshot the local daily-coach job reads from your Downloads folder.
  // force=true always saves; otherwise only once per day after you've studied.
  function saveSnapshot(force) {
    if (!force && !GRE.store.shouldAutoExport()) return false;
    try {
      downloadState("gre-coach-state.json");
      GRE.store.markAutoExport();
      GRE.r.toast(force ? "Progress saved for your coach." : "Saved today's progress for your daily coach.", "good");
      return true;
    } catch (e) { return false; }
  }

  function updateKeyStatus() {
    const pill = document.getElementById("keyStatus");
    if (!pill) return;
    if (GRE.store.hasKey()) { pill.textContent = "● Coach connected"; pill.className = "key-status ok"; }
    else { pill.textContent = "○ No API key"; pill.className = "key-status"; }
  }

  // ---------- settings ----------
  function openSettings() {
    const s = GRE.store.settings();
    document.getElementById("apiKeyInput").value = s.apiKey || "";
    document.getElementById("modelSelect").value = s.model || "claude-opus-4-8";
    document.getElementById("trackSelect").value = s.track || "chase-170";
    document.getElementById("targetDate").value = s.targetDate || "";
    document.getElementById("settingsModal").hidden = false;
  }
  function closeModal(id) { const m = document.getElementById(id); if (m) m.hidden = true; }

  function saveSettings() {
    GRE.store.setSettings({
      apiKey: document.getElementById("apiKeyInput").value.trim(),
      model: document.getElementById("modelSelect").value,
      track: document.getElementById("trackSelect").value,
      targetDate: document.getElementById("targetDate").value
    });
    updateKeyStatus();
    closeModal("settingsModal");
    GRE.r.toast("Settings saved.", "good");
    refresh();
  }

  function wire() {
    // nav
    document.querySelectorAll(".nav-item").forEach(b =>
      b.addEventListener("click", () => go(b.getAttribute("data-view"))));
    // open buttons
    document.getElementById("openCalc").addEventListener("click", () => GRE.calc.open());
    document.getElementById("openSettings").addEventListener("click", openSettings);
    document.getElementById("keyStatus").addEventListener("click", openSettings);
    // close buttons + backdrop click
    document.querySelectorAll("[data-close]").forEach(b =>
      b.addEventListener("click", () => closeModal(b.getAttribute("data-close"))));
    document.querySelectorAll(".modal-backdrop").forEach(bd =>
      bd.addEventListener("click", e => { if (e.target === bd) bd.hidden = true; }));
    // settings actions
    document.getElementById("saveSettings").addEventListener("click", saveSettings);
    document.getElementById("toggleKey").addEventListener("click", () => {
      const i = document.getElementById("apiKeyInput");
      const t = document.getElementById("toggleKey");
      if (i.type === "password") { i.type = "text"; t.textContent = "Hide"; }
      else { i.type = "password"; t.textContent = "Show"; }
    });
    document.getElementById("exportData").addEventListener("click", () => {
      downloadState("gre-coach-backup-" + new Date().toISOString().slice(0, 10) + ".json");
      GRE.r.toast("Backup downloaded.", "good");
    });
    document.getElementById("importData").addEventListener("click", () => document.getElementById("importFile").click());
    document.getElementById("importFile").addEventListener("change", e => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try { GRE.store.importJSON(rd.result); updateKeyStatus(); refresh(); openSettings(); GRE.r.toast("Progress restored.", "good"); }
        catch (err) { GRE.r.toast("Import failed: " + err.message, "bad"); }
      };
      rd.readAsText(f);
    });
    document.getElementById("resetData").addEventListener("click", () => {
      if (confirm("Reset ALL progress and settings? This can't be undone (export a backup first).")) {
        GRE.store.reset(); updateKeyStatus(); closeModal("settingsModal"); go("dashboard");
        GRE.r.toast("Everything reset.", "");
      }
    });
    // shortcuts
    document.addEventListener("keydown", e => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement && document.activeElement.tagName);
      const calcOpen = !document.getElementById("calcModal").hidden;
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop").forEach(m => m.hidden = true);
      } else if (!typing && !calcOpen && (e.key === "e" || e.key === "E")) {
        GRE.calc.open();
      }
    });
  }

  function boot() {
    GRE.calc.init();
    wire();
    updateKeyStatus();
    go("dashboard");
    // first-run nudge
    if (!GRE.store.hasKey()) setTimeout(() => openSettings(), 400);
  }

  GRE.app = { go, openSettings, refresh, saveSnapshot };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
