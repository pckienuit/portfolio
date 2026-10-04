// Title-card intro: boot sequence, role pick, then a sheet-lift transition into the portfolio.
// Skipped for deep links (#role=…) and for repeat visits within the same tab.
(() => {
  const { roles, roleKeys, setRole } = window.portfolio;
  const intro = document.getElementById("intro");
  const boot = document.getElementById("intro-boot");
  const select = document.getElementById("intro-select");
  const cards = document.getElementById("intro-cards");
  const typeTarget = document.getElementById("intro-type");
  const outside = [document.querySelector(".site-header"), document.getElementById("main"), document.querySelector(".site-footer")];
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const session = {
    get: () => { try { return sessionStorage.getItem("introSeen"); } catch { return null; } },
    set: () => { try { sessionStorage.setItem("introSeen", "1"); } catch { /* private mode: replay on next load */ } }
  };

  let timers = [];
  const after = (ms, fn) => timers.push(setTimeout(fn, ms));
  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

  cards.innerHTML = roleKeys.map((key, i) => {
    const role = roles[key];
    return `
      <button class="intro-card" type="button" data-role="${key}" data-pick="${key}" style="--i:${i}">
        <span class="intro-card-top"><span>${String(i + 1).padStart(2, "0")}</span><span>${role.short}</span></span>
        <span class="drawing intro-glyph">${window.roleGlyphs?.[key] ?? ""}</span>
        <strong>${role.persona}</strong>
        <span class="intro-card-line">${role.tagline}</span>
        <span class="intro-card-proof"><b>${role.proof}</b> ${role.proofLabel}</span>
      </button>`;
  }).join("");
  const cardButtons = [...cards.querySelectorAll("[data-pick]")];

  // Hovering or focusing a card previews that role's paper and accent on the whole sheet.
  const preview = (key) => { intro.dataset.role = key; };
  cardButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => preview(button.dataset.pick));
    button.addEventListener("focus", () => preview(button.dataset.pick));
    button.addEventListener("click", () => choose(button.dataset.pick));
  });

  function typeLines(lines, done) {
    typeTarget.textContent = "";
    let line = 0, char = 0;
    const tick = () => {
      if (line === lines.length) return done();
      if (char < lines[line].length) {
        typeTarget.textContent += lines[line][char++];
        after(18 + Math.random() * 22, tick);
      } else {
        line += 1; char = 0;
        if (line < lines.length) typeTarget.textContent += "\n";
        after(line < lines.length ? 220 : 400, tick);
      }
    };
    tick();
  }

  const skipBoot = () => showSelect();
  const stopBootSkips = () => {
    removeEventListener("keydown", skipBoot, true);
    intro.removeEventListener("click", skipBoot);
  };

  function showSelect() {
    if (intro.classList.contains("is-leaving")) return;
    clearTimers();
    stopBootSkips();
    boot.hidden = true;
    select.hidden = false;
    intro.classList.add("is-selecting");
    cardButtons[0].focus({ preventScroll: true });
  }

  function open() {
    clearTimers();
    intro.hidden = false;
    intro.classList.remove("is-leaving", "is-selecting");
    intro.dataset.role = document.body.dataset.role;
    document.documentElement.classList.add("intro-open");
    outside.forEach((element) => { element.inert = true; });
    select.hidden = true;
    boot.hidden = false;
    if (reducedMotion) return showSelect();
    intro.classList.add("is-booting");
    after(50, () => intro.classList.add("is-drawn"));
    after(700, () => typeLines(["PHAN CHI KIEN", "COMPUTER ENGINEERING · UIT", "DRAWING SET · 5 SHEETS"], () => after(350, showSelect)));
    addEventListener("keydown", skipBoot, true);
    intro.addEventListener("click", skipBoot);
  }

  function choose(key) {
    if (intro.classList.contains("is-leaving")) return;
    stopBootSkips();
    session.set();
    intro.dataset.role = key;
    cardButtons.forEach((button) => button.classList.toggle("is-chosen", button.dataset.pick === key));
    intro.classList.add("is-leaving");
    // Let the chosen card settle, then redraw the page underneath and lift the sheet.
    after(reducedMotion ? 0 : 450, () => {
      setRole(key);
      document.querySelectorAll(".hero .reveal, .signal-item").forEach((element) => element.classList.remove("is-visible"));
      requestAnimationFrame(() => requestAnimationFrame(() => {
        document.querySelectorAll(".hero .reveal, .signal-item").forEach((element) => element.classList.add("is-visible"));
      }));
      intro.classList.add("is-lifting");
    });
    after(reducedMotion ? 0 : 1300, close);
  }

  function close() {
    clearTimers();
    intro.hidden = true;
    intro.classList.remove("is-booting", "is-drawn", "is-selecting", "is-leaving", "is-lifting");
    cardButtons.forEach((button) => button.classList.remove("is-chosen"));
    document.documentElement.classList.remove("intro-open");
    outside.forEach((element) => { element.inert = false; });
    document.getElementById("hero-title").focus({ preventScroll: true });
  }

  document.getElementById("intro-skip").addEventListener("click", () => choose("ai"));
  document.getElementById("replay-intro").addEventListener("click", () => { scrollTo({ top: 0, behavior: "auto" }); open(); });

  intro.addEventListener("keydown", (event) => {
    if (select.hidden) return;
    const index = cardButtons.indexOf(document.activeElement);
    if (/^[1-5]$/.test(event.key) && roleKeys[event.key - 1]) { event.preventDefault(); choose(roleKeys[event.key - 1]); }
    else if (event.key === "ArrowRight" || event.key === "ArrowDown") { event.preventDefault(); cardButtons[(index + 1) % cardButtons.length].focus(); }
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") { event.preventDefault(); cardButtons[(index - 1 + cardButtons.length) % cardButtons.length].focus(); }
    else if (event.key === "Escape") { event.preventDefault(); choose(document.body.dataset.role); }
  });

  const deepLinked = /(^|&)role=/.test(location.hash.replace(/^#/, ""));
  if (!deepLinked && !session.get()) open();
})();
