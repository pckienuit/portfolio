// Blueprint-style project drawings. Strokes are classed (s = ink, a = accent, f = construction line)
// and coloured from CSS custom properties, so each role lens recolours them without new assets.
(() => {
  const line = (x1, y1, x2, y2, c = "s") => `<line class="${c}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  const box = (x, y, w, h, c = "s", r = 0) => `<rect class="${c}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
  const circle = (cx, cy, r, c = "s") => `<circle class="${c}" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const poly = (points, c = "s") => `<polyline class="${c}" points="${points}"/>`;
  const path = (d, c = "s") => `<path class="${c}" d="${d}"/>`;
  const text = (x, y, s, c = "t", anchor = "start") => `<text class="${c}" x="${x}" y="${y}" text-anchor="${anchor}">${s}</text>`;

  const head = (x1, y1, x2, y2, c) => {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const wing = (d) => `${(x2 - 6 * Math.cos(angle + d)).toFixed(1)},${(y2 - 6 * Math.sin(angle + d)).toFixed(1)}`;
    return poly(`${wing(0.45)} ${x2},${y2} ${wing(-0.45)}`, c);
  };
  const arrow = (x1, y1, x2, y2, c = "a") => line(x1, y1, x2, y2, c) + head(x1, y1, x2, y2, c);
  const both = (x1, y1, x2, y2, c = "a") => arrow(x1, y1, x2, y2, c) + head(x2, y2, x1, y1, c);

  // Dimension line with end ticks and a masked label, as on an engineering drawing.
  const dim = (x1, x2, y, label) => {
    const mid = (x1 + x2) / 2;
    const w = label.length * 6.2 + 12;
    return line(x1, y, x2, y, "a") + line(x1, y - 5, x1, y + 5, "a") + line(x2, y - 5, x2, y + 5, "a")
      + `<rect class="mask" x="${mid - w / 2}" y="${y - 7}" width="${w}" height="14"/>` + text(mid, y + 3.5, label, "ta", "middle");
  };
  const chip = (x, y, w, h, label) => {
    let pins = "";
    for (let px = x + 8; px < x + w - 4; px += 10) pins += line(px, y - 6, px, y) + line(px, y + h, px, y + h + 6);
    return box(x, y, w, h, "s", 2) + pins + text(x + w / 2, y + h / 2 + 3.5, label, "t", "middle");
  };
  const svg = (body) => (label) => `<svg viewBox="0 0 400 240" role="img" aria-label="${label}">${body}</svg>`;

  const art = {};

  art.aiot = svg([
    box(24, 76, 84, 64, "s", 3), line(24, 90, 108, 90), line(34, 104, 90, 104, "f"), line(34, 116, 76, 116, "f"), text(66, 160, "WEB CLIENT", "t", "middle"),
    box(158, 62, 88, 92, "s", 3), text(202, 82, "FASTAPI", "t", "middle"),
    box(172, 94, 60, 12), box(172, 110, 60, 12), box(172, 126, 60, 12, "a"), text(202, 174, "L1·L2·L3 CACHE", "t", "middle"),
    chip(296, 82, 80, 52, "MAIXCAM"), text(336, 160, "RISC-V EDGE", "t", "middle"),
    both(112, 108, 154, 108), both(250, 108, 290, 108),
    box(263, 86, 12, 10, "a", 1), path("M265 86 v-4 a4 4 0 0 1 8 0 v4", "a"),
    dim(158, 376, 198, "SYNC 200 PROFILES < 500 MS"),
    text(336, 222, "15.86 MS INFERENCE", "ta", "middle")
  ].join(""));

  art.phowhisper = svg((() => {
    let bars = "";
    for (let i = 0; i < 62; i += 1) {
      const a = 4 + 34 * Math.abs(Math.sin(i * 0.37) * Math.cos(i * 0.11));
      bars += line(22 + i * 2, (112 - a).toFixed(1), 22 + i * 2, (112 + a).toFixed(1));
    }
    return [
      bars, line(64, 64, 64, 160, "f"), line(106, 64, 106, 160, "f"),
      text(43, 58, "C1", "t", "middle"), text(85, 58, "C2", "t", "middle"), text(127, 58, "C3", "t", "middle"),
      line(152, 112, 168, 112, "a"), line(168, 72, 168, 152, "a"), arrow(168, 72, 186, 72), arrow(168, 152, 186, 152),
      box(188, 54, 104, 36, "s", 3), text(240, 76, "LOCAL · CUDA", "t", "middle"),
      box(188, 134, 104, 36, "s", 3), text(240, 156, "CLOUD · LLM", "t", "middle"),
      box(180, 126, 120, 52, "f", 6), text(296, 192, "HEALTH CHECK · RETRY ×3", "t", "end"),
      arrow(292, 72, 318, 100), arrow(292, 152, 318, 124),
      box(322, 82, 58, 60, "s", 2), line(330, 96, 372, 96, "a"), line(330, 108, 366, 108), line(330, 120, 372, 120), line(330, 132, 356, 132),
      dim(22, 146, 214, "IN-MEMORY CHUNKS")
    ].join("");
  })());

  art.kronos = svg([
    arrow(36, 190, 376, 190, "s"), arrow(36, 190, 36, 36, "s"), text(26, 52, "μ", "t", "end"), text(26, 64, "1", "t", "end"), line(32, 60, 40, 60),
    poly("36,60 96,60 166,190"), poly("106,190 206,60 306,190", "a"), poly("246,190 316,60 370,60"),
    text(66, 50, "BEAR", "t", "middle"), text(206, 50, "NEUTRAL", "ta", "middle"), text(343, 50, "BULL", "t", "middle"),
    line(262, 36, 262, 190, "f"), circle(262, 132.8, 4, "fill"), circle(262, 160.3, 4, "fill"),
    text(292, 136, "0.44", "t"), text(292, 164, "0.23", "t"),
    text(376, 206, "SIGNAL", "t", "end"),
    text(36, 222, "KRONOS TREND + TECHNICALS → 19 MAMDANI RULES", "t")
  ].join(""));

  art.embedded = svg((() => {
    const lit = [3, 6, 8, 10, 7, 5, 8, 4, 3, 2];
    let leds = "";
    lit.forEach((count, col) => {
      for (let row = 0; row < 10; row += 1) leds += circle(36 + col * 28, 176 - row * 13, 4.2, row < count ? "fill" : "o");
    });
    return [
      leds, line(26, 194, 306, 194), text(36, 210, "200 Hz", "t", "middle"), text(288, 210, "4 kHz", "t", "middle"),
      chip(334, 74, 48, 60, "STM32"), arrow(330, 104, 314, 104),
      text(358, 156, "Q15 FFT", "t", "middle"), text(358, 168, "N = 128", "t", "middle"),
      dim(26, 306, 226, "10 BANDS · 60 × WS2812B")
    ].join("");
  })());

  art.sha = svg([
    circle(52, 80, 24), text(52, 84, "IDLE", "t", "middle"),
    circle(148, 80, 24), text(148, 84, "LOAD", "t", "middle"),
    circle(244, 80, 24, "a"), text(244, 84, "ROUND", "ta", "middle"),
    circle(340, 80, 24), text(340, 84, "DONE", "t", "middle"),
    arrow(76, 80, 124, 80), arrow(172, 80, 220, 80), arrow(268, 80, 316, 80),
    path("M232 59 C 222 24, 266 24, 256 59", "a"), head(262, 30, 256, 59, "a"), text(244, 26, "×64", "ta", "middle"),
    path("M340 104 C 340 124, 60 124, 54 106", "f"),
    text(30, 146, "W[0..15] MESSAGE SCHEDULE", "t"),
    ...Array.from({ length: 16 }, (_, i) => box(30 + i * 21, 154, 17, 18, i === 0 ? "a" : "s", 1)),
    arrow(244, 150, 244, 108, "s"),
    poly(Array.from({ length: 11 }, (_, i) => `${30 + i * 20},${i % 2 ? 196 : 212} ${50 + i * 20},${i % 2 ? 196 : 212}`).join(" "), "a"),
    text(262, 208, "CLK 50 MHz", "ta")
  ].join(""));

  art.ssor = svg([
    box(20, 20, 360, 200, "s", 4), line(84, 20, 84, 220), line(84, 44, 380, 44), text(96, 36, "SYSTEM HEALTH", "t"),
    line(32, 56, 72, 56, "a"), line(32, 72, 66, 72), line(32, 88, 70, 88), line(32, 104, 62, 104), line(32, 120, 68, 120),
    box(96, 56, 84, 38, "s", 2), text(104, 82, "98%", "tl"),
    box(192, 56, 84, 38, "s", 2), text(200, 82, "124", "tl"),
    box(288, 56, 84, 38, "a", 2), text(296, 82, "3", "tla"),
    box(96, 106, 180, 102, "s", 2), poly("104,186 126,170 148,176 170,150 192,158 214,132 236,140 258,118 268,124", "a"), line(104, 196, 268, 196, "f"),
    box(288, 106, 84, 102, "s", 2),
    ...Array.from({ length: 16 }, (_, i) => box(298 + (i % 4) * 17, 118 + Math.floor(i / 4) * 21, 11, 11, i === 6 ? "fill" : "s", 1)),
    text(296, 232, "50+ COMPONENTS", "ta")
  ].join(""));

  const phone = (x) => box(x, 26, 84, 168, "s", 12) + line(x + 32, 36, x + 52, 36);
  art.learn2aid = svg([
    phone(28), box(62, 74, 16, 44, "a", 2), box(48, 88, 44, 16, "a", 2), line(44, 140, 96, 140), line(50, 152, 90, 152, "f"), box(44, 168, 52, 14, "s", 7),
    phone(158), line(172, 58, 228, 58), line(172, 68, 212, 68, "f"),
    box(172, 86, 56, 18, "s", 3), box(172, 112, 56, 18, "a", 3), box(172, 138, 56, 18, "s", 3), box(172, 168, 56, 14, "s", 7),
    phone(288), ...[64, 90, 116, 142].map((y, i) => box(302, y, 12, 12, i < 3 ? "a" : "s", 2) + (i < 3 ? poly(`304,${y + 6} 307,${y + 9} 312,${y + 3}`, "a") : "") + line(320, y + 6, 358, y + 6)),
    arrow(116, 110, 154, 110), arrow(246, 110, 284, 110),
    text(70, 214, "LEARN", "t", "middle"), text(200, 214, "QUIZ", "t", "middle"), text(330, 214, "CHECKLIST", "t", "middle")
  ].join(""));

  art.zola = svg([
    box(36, 18, 120, 204, "s", 14), line(36, 42, 156, 42), text(48, 34, "ZOLA", "t"),
    box(48, 54, 70, 18, "s", 9), box(76, 80, 68, 18, "a", 9), box(48, 106, 56, 18, "s", 9), box(64, 132, 80, 18, "a", 9), box(48, 158, 64, 18, "s", 9),
    line(36, 190, 156, 190), box(46, 198, 82, 14, "f", 7), circle(140, 205, 7, "a"),
    both(162, 96, 238, 96), text(200, 88, "WEBSOCKET", "t", "middle"),
    both(162, 144, 238, 144), text(200, 136, "REST", "t", "middle"),
    box(242, 76, 112, 88, "s", 3), text(298, 98, "SERVER", "t", "middle"), line(254, 110, 342, 110, "f"),
    text(298, 128, "AUTH · CHAT", "t", "middle"), text(298, 144, "FIREBASE", "t", "middle"),
    dim(242, 354, 196, "18 MODULES")
  ].join(""));

  art.regime = svg((() => {
    const bands = [["TREND ↑", 24], ["RANGE", 94], ["VOLATILE", 164], ["TREND ↓", 234], ["QUIET", 304]];
    return [
      ...bands.map(([label, x], i) => (i ? line(x, 30, x, 196, "f") : "") + text(x + 35, 40, label, i === 1 ? "ta" : "t", "middle")),
      ...[88, 108, 128, 148].map((y) => line(98, y, 160, y, "f")),
      poly("24,170 40,158 56,150 72,132 88,120 100,104 112,128 124,100 136,140 148,96 160,124 172,70 184,160 196,64 210,150 226,110 240,96 256,118 272,132 288,148 304,156 320,150 336,154 352,148 376,152", "a"),
      line(24, 196, 376, 196),
      dim(24, 376, 218, "5 REGIMES · ADX + HURST · RF/XGBOOST VOLATILITY")
    ].join("");
  })());

  art.bench = svg((() => {
    const x0 = 132, k = 2.75;
    const rows = [["V9 LANDMARKS", 2.7, 59.05], ["ARCFACE P3", 6.39, 80.03], ["SFACE FP32", 13.06, 54.33]];
    return [
      line(x0, 34, x0, 186),
      ...rows.map(([label, cpu, wasm], i) => {
        const y = 46 + i * 50;
        return text(x0 - 10, y + 14, label, "t", "end")
          + `<rect class="fill" x="${x0}" y="${y}" width="${(cpu * k).toFixed(1)}" height="11"/>` + text(x0 + cpu * k + 6, y + 9, `${cpu} ms`, "ta")
          + box(x0, y + 15, +(wasm * k).toFixed(1), 11) + text(x0 + wasm * k + 6, y + 24, `${wasm}`, "t");
      }),
      `<rect class="fill" x="132" y="206" width="14" height="8"/>`, text(152, 214, "PYTHON CPU", "t"),
      box(246, 206, 14, 8), text(266, 214, "BROWSER WASM", "t")
    ].join("");
  })());

  art.uitportal = svg([
    box(34, 18, 112, 204, "s", 14), line(34, 42, 146, 42), text(46, 34, "SCHEDULE", "t"),
    ...Array.from({ length: 20 }, (_, i) => box(46 + (i % 5) * 19, 54 + Math.floor(i / 5) * 30, 14, 24, [1, 7, 8, 13, 16].includes(i) ? "a" : "f", 2)),
    box(46, 182, 88, 26, "s", 13), text(90, 199, "ASK AI", "ta", "middle"),
    ...[["FLUTTER · RIVERPOD", 28], ["KOTLIN CHANNEL", 76], ["JNI · C++ BRIDGE", 124], ["NODE · 127.0.0.1", 172]].map(([label, y], i) =>
      box(206, y, 158, 30, i === 3 ? "a" : "s", 3) + text(285, y + 19, label, i === 3 ? "ta" : "t", "middle") + (i < 3 ? arrow(285, y + 30, 285, y + 46, "s") : "")),
    arrow(150, 112, 200, 112, "a"),
    box(370, 182, 12, 10, "a", 1), path("M372 182 v-4 a4 4 0 0 1 8 0 v4", "a"),
    text(364, 222, "13 AI PROVIDERS · PER-START TOKEN", "t", "end")
  ].join(""));

  art.autoconnect = svg([
    box(30, 40, 92, 60, "s", 3), poly("20,108 132,108", "s"), line(30, 100, 20, 108), line(122, 100, 132, 108), text(76, 124, "WINDOWS DAEMON", "t", "middle"),
    box(56, 140, 40, 72, "s", 7), line(68, 148, 84, 148), text(76, 230, "ANDROID SERVICE", "t", "middle"),
    path("M276 62 a26 26 0 0 1 40 0", "a"), path("M284 70 a14 14 0 0 1 24 0", "a"), circle(296, 78, 2.5, "fill"),
    box(236, 88, 120, 62, "s", 3), text(296, 112, "CAPTIVE PORTAL", "t", "middle"), text(296, 130, "/status · /login", "ta", "middle"),
    both(128, 72, 230, 104), both(102, 176, 230, 136),
    text(296, 172, "BOUND TO WI-FI NIC", "t", "middle"),
    dim(236, 356, 204, "BACKOFF · KEYSTORE")
  ].join(""));

  art.gamedev = svg([
    circle(100, 120, 72, "f"),
    ...[["INPUT", 100, 48], ["UPDATE", 170, 120], ["COLLIDE", 100, 192], ["RENDER", 30, 120]].map(([label, x, y], i) =>
      box(x - 27, y - 11, 54, 22, i === 2 ? "a" : "s", 11) + text(x, y + 3.5, label, i === 2 ? "ta" : "t", "middle")),
    text(100, 118, "FIXED", "t", "middle"), text(100, 132, "50 Hz", "tla", "middle"),
    ...Array.from({ length: 6 }, (_, i) => line(206 + i * 32, 40, 206 + i * 32, 200, "f")),
    ...Array.from({ length: 6 }, (_, i) => line(206, 40 + i * 32, 366, 40 + i * 32, "f")),
    box(334, 72, 32, 128, "s"), line(334, 72, 366, 104, "f"), line(334, 104, 366, 136, "f"), line(334, 136, 366, 168, "f"),
    box(222, 140, 22, 30, "a", 2), box(306, 112, 22, 30, "f", 2), arrow(244, 150, 304, 128, "a"),
    text(286, 224, "SWEPT AABB · 32 PX GRID", "t", "middle")
  ].join(""));

  art.tests = svg([
    poly("200,28 290,188 110,188 200,28"),
    line(176, 70, 224, 70), line(152, 112, 248, 112), line(128, 152, 272, 152),
    text(200, 62, "SMOKE", "t", "middle"), text(200, 98, "INTEGRATION", "t", "middle"), text(200, 138, "WIDGET", "ta", "middle"), text(200, 176, "UNIT", "t", "middle"),
    text(30, 92, "352", "tla"), text(30, 108, "TEST CASES", "t"),
    text(30, 148, "70", "tl"), text(30, 164, "DART TEST FILES", "t"),
    text(306, 92, "A11Y", "ta"), text(306, 108, "SUITE", "t"),
    text(306, 148, "DESIGN", "ta"), text(306, 164, "SYSTEM", "t"),
    dim(110, 290, 214, "FLUTTER TEST · INTEGRATION_TEST")
  ].join(""));

  art.webdesign = svg([
    box(24, 30, 232, 160, "s", 4), line(24, 52, 256, 52), circle(36, 41, 3, "o"), circle(48, 41, 3, "o"), circle(60, 41, 3, "o"),
    box(40, 68, 96, 12, "a"), line(40, 92, 180, 92, "f"), line(40, 104, 150, 104, "f"),
    box(40, 122, 64, 52, "s", 2), box(116, 122, 64, 52, "s", 2), box(192, 122, 48, 52, "f", 2),
    box(290, 48, 86, 142, "s", 10), line(322, 58, 344, 58), box(302, 76, 62, 10, "a"), line(302, 98, 356, 98, "f"), line(302, 110, 340, 110, "f"),
    box(302, 126, 62, 40, "s", 2),
    both(258, 118, 288, 118),
    dim(24, 256, 212, "DOCUMENTED BREAKPOINTS"),
    text(333, 212, "2 WEEKS", "ta", "middle")
  ].join(""));

  window.projectArt = art;
})();
