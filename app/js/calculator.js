/* calculator.js — basic four-function calculator with √ and memory, ETS-style
   (left-to-right evaluation, no operator precedence — matches the real on-screen calc). */
(function () {
  const GRE = window.GRE;
  let display = "0";
  let acc = null;          // accumulated value
  let pendingOp = null;    // '+','-','*','/'
  let waiting = false;     // next digit starts a fresh entry
  let memory = 0;
  let errored = false;

  const $disp = () => document.getElementById("calcDisplay");
  const $mem = () => document.getElementById("calcMem");

  function fmt(n) {
    if (!isFinite(n)) return "Error";
    if (Number.isInteger(n) && Math.abs(n) < 1e15) return String(n);
    let s = n.toPrecision(12);
    s = parseFloat(s).toString();
    if (s.length > 15) s = n.toExponential(6);
    return s;
  }

  function render() {
    const d = $disp(); if (d) d.textContent = errored ? "Error" : display;
    const m = $mem(); if (m) m.textContent = memory !== 0 ? "M  " + fmt(memory) : "";
  }

  function clearAll() { display = "0"; acc = null; pendingOp = null; waiting = false; errored = false; }
  function curVal() { return parseFloat(display) || 0; }

  function inputDigit(d) {
    if (errored) clearAll();
    if (waiting) { display = d; waiting = false; }
    else display = (display === "0") ? d : (display.length < 16 ? display + d : display);
  }
  function inputDot() {
    if (errored) clearAll();
    if (waiting) { display = "0."; waiting = false; return; }
    if (!display.includes(".")) display += ".";
  }
  function apply(a, op, b) {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b === 0 ? NaN : a / b;
    }
    return b;
  }
  function setOp(op) {
    if (errored) return;
    const v = curVal();
    if (pendingOp !== null && !waiting) {
      const r = apply(acc, pendingOp, v);
      if (!isFinite(r)) { errored = true; render(); return; }
      acc = r; display = fmt(r);
    } else {
      acc = v;
    }
    pendingOp = op; waiting = true;
  }
  function equals() {
    if (errored || pendingOp === null) return;
    const r = apply(acc, pendingOp, curVal());
    if (!isFinite(r)) { errored = true; render(); return; }
    display = fmt(r); acc = r; pendingOp = null; waiting = true;
  }

  function handle(k) {
    if (/^[0-9]$/.test(k)) inputDigit(k);
    else if (k === ".") inputDot();
    else if (k === "+" || k === "-" || k === "*" || k === "/") setOp(k);
    else if (k === "=") equals();
    else if (k === "C") clearAll();
    else if (k === "CE") { display = "0"; errored = false; }
    else if (k === "back") { display = display.length > 1 ? display.slice(0, -1) : "0"; }
    else if (k === "pm") { if (display !== "0") display = display.startsWith("-") ? display.slice(1) : "-" + display; }
    else if (k === "pct") {
      const v = curVal();
      let operand;
      if (pendingOp === "+" || pendingOp === "-") operand = (acc || 0) * (v / 100);
      else operand = v / 100;
      display = fmt(operand); waiting = false;
    }
    else if (k === "sqrt") {
      const v = curVal();
      if (v < 0) { errored = true; } else { display = fmt(Math.sqrt(v)); waiting = false; }
    }
    else if (k === "MC") memory = 0;
    else if (k === "MR") { display = fmt(memory); waiting = false; errored = false; }
    else if (k === "M+") memory += curVal();
    else if (k === "M-") memory -= curVal();
    render();
  }

  function onKey(e) {
    const modal = document.getElementById("calcModal");
    if (!modal || modal.hidden) return;
    const k = e.key;
    if (/^[0-9]$/.test(k)) { handle(k); e.preventDefault(); }
    else if (k === ".") handle(".");
    else if (k === "+" || k === "-" || k === "*" || k === "/") handle(k);
    else if (k === "Enter" || k === "=") { handle("="); e.preventDefault(); }
    else if (k === "Backspace") { handle("back"); e.preventDefault(); }
    else if (k === "Escape") close();
    else if (k.toLowerCase() === "c") handle("C");
  }

  function init() {
    document.querySelectorAll("#calcModal .ck").forEach(btn => {
      btn.addEventListener("click", () => handle(btn.getAttribute("data-k")));
    });
    document.addEventListener("keydown", onKey);
    render();
  }
  function open() {
    const m = document.getElementById("calcModal");
    if (m) { m.hidden = false; render(); }
  }
  function close() {
    const m = document.getElementById("calcModal");
    if (m) m.hidden = true;
  }

  GRE.calc = { init, open, close, handle };
})();
