const GH = "https://github.com/pckienuit";

// Every figure below comes from a repo README, test count, report, or resume; keep it that way when editing.
const roles = {
  ai: {
    label: "AI Development",
    short: "AI",
    persona: "The AI engineer",
    tagline: "Models that run where the data is — a laptop GPU or a RISC-V camera.",
    availability: "Open to AI development internships",
    title: "I build AI systems that hold up outside the notebook.",
    intro: "Computer Engineering student focused on deep learning, edge inference, dataset pipelines, and reliable offline systems.",
    proof: "15.86 ms",
    proofLabel: "edge inference latency",
    workTitle: "Systems with a measurable edge.",
    workIntro: "Projects that move from data and models to usable, testable systems — on a laptop GPU, a RISC-V camera, or a trading terminal.",
    approachTitle: "Make complexity legible.",
    approachIntro: "I prefer clear constraints, observable behavior, and a working slice before abstraction.",
    resume: "assets/resumes/Phan-Chi-Kien-AI-Resume.pdf",
    steps: [
      ["01", "Start with the data", "Validate inputs, define failure cases, and make the training set explainable before tuning a model."],
      ["02", "Measure the real path", "Compare startup, memory, latency, and accuracy on the environment where inference will run."],
      ["03", "Keep fallback visible", "Health checks, retries, offline paths, and documented trade-offs turn a demo into a system."]
    ],
    toolkit: [
      ["AI / GenAI", ["Python", "PyTorch", "Hugging Face", "PhoWhisper / Whisper", "Gemini API", "Ollama", "Prompt engineering"]],
      ["Models & data", ["ONNX INT8", "ArcFace", "MobileNetV2", "Qdrant", "scikit-learn", "XGBoost", "Pandas"]],
      ["Serving", ["FastAPI", "REST", "OpenAI-compatible proxies", "Docker", "SQLite / MySQL", "Linux"]],
      ["Validation", ["pytest", "Walk-forward validation", "AI output checks", "Stress tests"]]
    ],
    projects: [
      { id: "aiot", type: "Edge AI / Security", title: "AIoT Flight Face Lookup", description: "A secure offline kiosk linking a web client, FastAPI, and a MaixCAM RISC-V edge node. Trained MobileNetV2 landmark and ArcFace recognition models, quantized them to INT8 ONNX, and shipped encrypted sync for 200 passenger profiles.", facts: [["15.86 ms", "edge inference"], ["0.22%", "false accept rate"], ["< 500 ms", "sync for 200 profiles"]], tags: ["PyTorch", "ONNX INT8", "FastAPI", "Qdrant", "Linux"], metric: "15.86 ms edge inference", link: `${GH}/AIoT_DoAn` },
      { id: "phowhisper", type: "AI Reliability", title: "PhoWhisper Tool", description: "A Vietnamese transcription assistant that runs PhoWhisper on CUDA locally, then refines and summarizes with Gemini or a local Ollama model — with health checks, 3-attempt retries, and in-memory chunking for long files.", tags: ["Whisper", "CUDA", "Gemini API", "Ollama", "FFmpeg"], metric: "Local + cloud fallback", link: `${GH}/phowhisper-tool` },
      { id: "kronos", type: "Hybrid Inference", title: "XAUUSD Fuzzy Logic System", description: "Combines Kronos trend forecasts with technical signals through custom membership functions and 19 Mamdani rules, validated walk-forward and ported to an ESP32 in MicroPython.", tags: ["Kronos", "PyTorch", "Pandas", "Mamdani FIS"], metric: "19 rules · 110 tests", link: `${GH}/Fuzzy_DoAn` },
      { id: "goldtrader", art: "regime", type: "ML / Trading Systems", title: "GoldTrader Series", description: "A regime-adaptive XAUUSD grid-trading engine for MetaTrader 5: RandomForest/XGBoost volatility prediction, five ADX/Hurst market regimes, one codebase for backtest and live, and a React + Supabase realtime dashboard.", tags: ["scikit-learn", "XGBoost", "MetaTrader 5", "Supabase", "React"], metric: "1,029 live-demo trades", link: "https://goldtrader-showcase.vercel.app", linkLabel: "View showcase" }
    ],
    more: [
      { title: "AInterview", what: "Desktop mock-interview coach that writes questions from a CV and the candidate's own local projects, with realtime voice and encrypted bring-your-own keys.", stack: "Electron · Node 22 · OpenAI Realtime", evidence: "Local-first · VI / EN" },
      { title: "Manga Recap Studio", what: "Local-first finalizer for Vietnamese manga-recap videos: TTS narration, FFmpeg render, technical checks, and a listening review before sign-off.", stack: "Python · Edge TTS · FFmpeg", evidence: "43 tests · GitHub Actions CI" },
      { title: "UIT Portal AI assistant", what: "Assistant inside the UIT Portal app, served from an embedded Node runtime bound to 127.0.0.1 with a fresh bearer token per start.", stack: "Flutter · Kotlin · JNI · Node", evidence: "13 AI providers", link: `${GH}/UIT_Portal_App` },
      { title: "RainWindow", what: "Rain-avoidance motorbike routing for Ho Chi Minh City, with per-segment rain risk and a fail-safe shelter mode.", stack: "GeoAI · Routing", evidence: "MLAI / Tasco Map Challenge 2026 · team of 4" }
    ]
  },
  embedded: {
    label: "Embedded Software",
    short: "Embedded",
    persona: "The firmware developer",
    tagline: "C on bare metal, Linux on the edge, and a logic analyzer when it lies.",
    availability: "Open to embedded software internships",
    title: "I turn timing, memory, and hardware limits into working software.",
    intro: "Computer Engineering student building C/C++ firmware, Linux edge systems, drivers, and low-level verification paths.",
    proof: "60 LEDs",
    proofLabel: "driven by STM32 PWM + DMA",
    workTitle: "Software close to the metal.",
    workIntro: "Projects where protocols, state machines, timing, and failure behavior are part of the design, not afterthoughts.",
    approachTitle: "Respect the boundary.",
    approachIntro: "I debug from signal and state, then document the interface so the next layer can trust it.",
    resume: "assets/resumes/Phan-Chi-Kien-Embedded-Resume.pdf",
    steps: [
      ["01", "Trace the signal", "Understand clocks, buffers, interrupts, protocols, and the exact boundary where behavior changes."],
      ["02", "Make state explicit", "Use small modules and visible state transitions so timing bugs and recovery paths can be tested."],
      ["03", "Verify the interface", "Use known vectors, logic analysis, and repeatable tests before calling hardware behavior done."]
    ],
    toolkit: [
      ["Languages", ["C/C++", "Python", "Bash", "Verilog HDL"]],
      ["MCU / OS", ["STM32F103", "ESP32", "MaixCAM (RISC-V)", "Linux", "Bare-metal", "FreeRTOS basics"]],
      ["Peripherals", ["GPIO", "ADC", "DMA", "Timer / PWM", "Interrupts", "UART", "SPI", "I2C"]],
      ["Debug / build", ["GCC / GDB", "CMake", "OpenOCD / JTAG", "Logic analyzer", "ModelSim", "Quartus"]]
    ],
    projects: [
      { id: "embedded", type: "Embedded C / DSP", title: "FFT Audio Spectrum Analyzer", description: "Bare-metal STM32F103 analyzer turning 10 kHz ADC samples into 10 bands from 200–4,000 Hz with a 128-point Q15 fixed-point FFT. DMA, timer/PWM, a custom LCD driver, and 60 WS2812B LEDs; power, keypad, and timing faults were run down with a logic analyzer.", facts: [["128-pt", "Q15 fixed-point FFT"], ["10 kHz", "ADC sampling"], ["800 kHz", "WS2812B data rate"]], tags: ["C", "STM32F103", "ADC", "DMA", "Timer / PWM"], metric: "10 frequency bands", link: `${GH}/led` },
      { id: "aiot", type: "Linux Edge", title: "AIoT Flight Face Lookup", description: "Three-tier offline kiosk linking web client, FastAPI server, and a MaixCAM RISC-V edge node. Built cache persistence, sync, fallback, and encrypted data flows.", tags: ["Linux", "RISC-V", "FastAPI", "ONNX"], metric: "200 profiles < 500 ms", link: `${GH}/AIoT_DoAn` },
      { id: "sha", type: "Digital Logic · Team", title: "Hardware SHA-256 Core", description: "Team course project: an SHA-256 core with a 64-round FSM, 16-word message schedule, and carry-save adders on the T1 path, constrained to 50 MHz and verified against NIST vectors in ModelSim.", tags: ["Verilog HDL", "ModelSim", "FSM", "Quartus"], metric: "50 MHz constraint", link: `${GH}/SHA-256` },
      { id: "bench", art: "bench", type: "Edge Benchmark", title: "Face Model Benchmark", description: "Measured V9 landmark and ArcFace-P3 ONNX models on Python CPU and in browser WASM to choose a replacement for SFace in the encrypted face pipeline.", tags: ["ONNX Runtime", "WASM", "MediaPipe", "Python"], metric: "6.39 ms ArcFace on CPU", link: `${GH}/AIoT_DoAn`, linkLabel: "View repository" }
    ],
    more: [
      { title: "Fuzzy controller on ESP32", what: "The 19-rule Mamdani inference engine from the XAUUSD system, ported to MicroPython on an ESP32-WROOM-32.", stack: "MicroPython · ESP32", evidence: "19 rules on-device", link: `${GH}/Fuzzy_DoAn` },
      { title: "auto-connect-inet service", what: "Kotlin foreground service that binds requests to the right Android Network and keeps a captive-portal session alive behind VPNs.", stack: "Kotlin · Android 8+", evidence: "18 Kotlin unit tests", link: `${GH}/auto-connect-inet` },
      { title: "USB gear-shifter controller", what: "Serial/HID daemon and web UI that read a sim-racing H-shifter and hot-swap the model behind a local LLM gateway.", stack: "Python · HID · Serial", evidence: "8 gear slots", link: `${GH}/codex-shifter` },
      { title: "GPS-denied indoor drone", what: "Capstone: position hold from IMU, downward optical flow, and a rangefinder on PX4 EKF2, simulated in Gazebo.", stack: "PX4 · EKF2 · Gazebo", evidence: "In progress · target ±0.5 m hover", status: "In progress" }
    ]
  },
  software: {
    label: "Software & Web",
    short: "Software",
    persona: "The software builder",
    tagline: "Apps with releases, realtime backends, and the boring parts done.",
    availability: "Open to software and web development internships",
    title: "I ship software people can install, open, and rely on.",
    intro: "Computer Engineering student building full-stack web, mobile, and desktop apps — from API design and realtime sync to releases and tests.",
    proof: "30",
    proofLabel: "feature modules in one Flutter app",
    workTitle: "Products, not prototypes.",
    workIntro: "Apps with releases, realtime backends, and the unglamorous parts — auth, offline states, and CI — done properly.",
    approachTitle: "Ship the boring parts too.",
    approachIntro: "Auth, error states, release builds, and docs decide whether software survives its first real user.",
    resume: "assets/resumes/Phan-Chi-Kien-Software-Resume.pdf",
    steps: [
      ["01", "Model the data first", "Agree on entities, API contracts, and sync rules before screens, so client and server share one truth."],
      ["02", "Design for bad networks", "Token expiry, retries, offline caches, and realtime fallbacks are part of the feature, not polish."],
      ["03", "Release like it matters", "Versioned builds, checksums, CI, and a README someone else can follow without asking."]
    ],
    toolkit: [
      ["Languages", ["TypeScript", "JavaScript", "Dart", "Java", "Kotlin", "Python", "C/C++"]],
      ["Web / mobile", ["Node.js", "Express", "Socket.IO", "Next.js", "React", "Flutter", "Android (MVVM)"]],
      ["Data", ["Firebase Firestore", "Supabase / Postgres", "SQLite", "MySQL", "Redis"]],
      ["Delivery", ["Git / GitHub", "GitHub Actions", "Docker", "Vercel", "PM2", "Linux"]]
    ],
    projects: [
      { id: "uitportal", type: "Mobile / Android", title: "UIT Portal App", description: "An unofficial Android client for the UIT student portal: native screens for schedules, grades, exams, and tuition over the student's own session, plus an AI assistant served from an embedded Node runtime on 127.0.0.1.", facts: [["30", "feature modules"], ["352", "test cases"], ["v1.1.0", "APK release + SHA-256"]], tags: ["Flutter", "Riverpod", "Kotlin", "JNI", "Node.js"], metric: "v1.1.0 released", link: `${GH}/UIT_Portal_App` },
      { id: "zola", type: "Full-stack / Realtime", title: "Zola Chat", description: "A Zalo-style messaging app: Java Android client (MVVM) over a Node.js/Express backend with eight authenticated REST API groups, Socket.IO presence and typing, WebRTC calls, and an admin web — deployed on Linux with PM2.", tags: ["Java", "Node.js", "Socket.IO", "Firebase", "WebRTC"], metric: "8 REST API groups", link: `${GH}/Nhom14_ZolaChat`, demo: "https://youtu.be/M8V_0-b_fXk" },
      { id: "autoconnect", type: "Cross-platform Utility", title: "auto-connect-inet", description: "Keeps a captive-portal Wi-Fi session alive: a stdlib-only Windows daemon bound to the Wi-Fi NIC so VPNs don't interfere, and a Flutter app over a Kotlin foreground service with Keystore credentials.", tags: ["Python", "Flutter", "Kotlin", "GitHub Actions"], metric: "Windows + Android", link: `${GH}/auto-connect-inet` },
      { id: "gamedev", type: "Game Engine / C++", title: "Mario on a Custom Engine", description: "A platformer on a 2D engine written from scratch in C++ and DirectX 11: fixed-timestep loop, swept-AABB collision on a spatial grid, atlas sprite batching, and XAudio2 — plus a MobileSAM sprite-cutter tool.", tags: ["C++", "DirectX 11", "XAudio2", "Python"], metric: "50 Hz fixed timestep", link: `${GH}/GameDev1` }
    ],
    more: [
      { title: "Duck Race", what: "Zero-dependency Canvas 2D race picker for 2 to 100+ racers, with a tracking camera, saved lists in IndexedDB, and a spoken winner.", stack: "HTML · Canvas 2D · IndexedDB", evidence: "Live on Vercel", link: "https://duck-race-nextgen.vercel.app", linkLabel: "Live demo" },
      { title: "JobSplit", what: "Dormitory duty roster and voting app with Zalo OA notifications and scheduled reminders.", stack: "Next.js 15 · Supabase · Turborepo", evidence: "Web app + Zalo bot monorepo", status: "Private repo" },
      { title: "When2Meet clone", what: "Group scheduling with drag-to-paint availability, heatmaps, and SSE realtime with a polling fallback.", stack: "Bun · Express · SQLite (WAL)", evidence: "API, e2e and security tests" },
      { title: "AutoCashier", what: "Desktop pricing tool for a photocopy shop: counts pages across PDF, Office, and image files and prices per sheet.", stack: "Python · PyQt5", evidence: "v0.1 Windows release", link: `${GH}/AutoCashier` },
      { title: "CE103 / IT007 Quiz", what: "Quiz and flashcard site for two UIT courses, with timed exams and per-topic stats.", stack: "JavaScript · PHP", evidence: "410 questions · 60 flashcards", link: `${GH}/ce103_quiz` }
    ]
  },
  ux: {
    label: "UX / Product Design",
    short: "UX",
    persona: "The product designer",
    tagline: "Flows, systems, and prototypes that survive handoff.",
    availability: "Open to UX and product design internships",
    title: "I make complex product behavior easier to understand and use.",
    intro: "Computer Engineering student working across user flows, interface systems, prototypes, accessibility, and front-end constraints.",
    proof: "50+",
    proofLabel: "reusable Figma components",
    workTitle: "Design that survives handoff.",
    workIntro: "Product design from dense IoT telemetry to guided mobile learning and client web work — mapped, systemised, and handed off.",
    approachTitle: "Design the behavior, not decoration.",
    approachIntro: "I map the task first, then build the smallest visual system that helps people complete it with confidence.",
    resume: "assets/resumes/Phan-Chi-Kien-UX-Resume.pdf",
    steps: [
      ["01", "Map the task", "Turn ambiguous needs into user flows, page hierarchy, and states that can be discussed with a team."],
      ["02", "Build a system", "Use reusable components, typography, color tokens, and accessibility-aware patterns instead of one-off screens."],
      ["03", "Handoff with context", "Document responsive behavior, edge states, and implementation constraints so intent survives delivery."]
    ],
    toolkit: [
      ["Design tools", ["Figma", "FigJam", "Photoshop", "Illustrator"]],
      ["Principles", ["Layout", "Typography", "Color theory", "Visual hierarchy", "Responsive design"]],
      ["UX method", ["User flows", "Wireframes", "Prototypes", "Design systems", "Auto layout", "Handoff", "Accessibility"]],
      ["Technical", ["HTML / CSS", "JavaScript", "Java (Android)", "Flutter", "SQL"]]
    ],
    projects: [
      { id: "ssor", type: "Enterprise UX / IoT", title: "SSor AI Admin Dashboard", description: "A monitoring dashboard that turns device telemetry into fast system-health diagnosis, with role-based navigation and reusable states for three admin roles.", facts: [["50+", "reusable components"], ["3", "admin roles"]], tags: ["Figma", "Design System", "IoT", "Handoff"], metric: "50+ reusable components", link: "https://www.behance.net/gallery/251701789/UXUI-SSor-AI-Admin-Dashboard", linkLabel: "Behance case study" },
      { id: "learn2aid", type: "Mobile UX / Hackathon", title: "Learn2Aid", description: "10+ mobile screens for first-aid learning, quiz, checklist, and result flows. The team placed Top 36 nationwide in Google Hackathon Vietnam 2025.", tags: ["Figma", "User Flow", "Prototype", "Accessibility"], metric: "Top 36 / 100 nationwide", link: "https://www.behance.net/gallery/251703697/UXUI-Learn2Aid-Google-Hackathon-VietNam-2025", linkLabel: "Behance case study" },
      { id: "zola", type: "Developer-aware UX", title: "Zola Chat Interface", description: "Designed and implemented 20+ Material Design components and navigation flows across authentication, messaging, profiles, media, and voice/video calls — then tested the experience against the real Android build.", tags: ["Android", "Material Design", "Java", "User Testing"], metric: "20+ Android components", link: `${GH}/Nhom14_ZolaChat`, demo: "https://youtu.be/M8V_0-b_fXk" },
      { id: "webdesign", type: "Freelance / Web", title: "Client Portfolio Website", description: "A responsive portfolio designed for a client in two weeks: goals turned into information architecture, visual hierarchy, and mobile-first layouts, with breakpoints, transitions, and hover states documented for implementation.", tags: ["Figma", "Responsive", "Client Work", "Handoff"], metric: "Delivered in 2 weeks", link: "https://www.behance.net/gallery/251702571/UXUI-Personal-Portfolio-Website", linkLabel: "Behance case study" }
    ],
    more: [
      { title: "Duck Race", what: "Character sheet and mockups designed before code for a canvas race game, then built and shipped.", stack: "HTML · Canvas 2D", evidence: "Live on Vercel", link: "https://duck-race-nextgen.vercel.app", linkLabel: "Live demo" },
      { title: "Visual design portfolio", what: "Retouching, layout, and typography work for club and personal projects.", stack: "Photoshop · Illustrator · Figma", evidence: "Ongoing", link: "https://www.behance.net/kienphan13", linkLabel: "Behance" },
      { title: "RainWindow", what: "Rider-facing flow for rain-avoidance routing in Ho Chi Minh City, including a fail-safe shelter mode for when the forecast is wrong.", stack: "GeoAI · Mobile UX", evidence: "MLAI / Tasco Map Challenge 2026 · team of 4" }
    ]
  },
  qa: {
    label: "Automation Testing",
    short: "QA",
    persona: "The test engineer",
    tagline: "Suites, pipelines, and evidence that turns a failure into a fix.",
    availability: "Open to QA automation internships",
    title: "I find the edge case before users have to.",
    intro: "Computer Engineering student focused on API validation, automated regression coverage, integration testing, and defect lifecycles.",
    proof: "50+",
    proofLabel: "defects tracked through lifecycle",
    workTitle: "Quality is an executable habit.",
    workIntro: "Test suites, pipelines, and integration checks that connect APIs, devices, logs, and releases into one quality loop.",
    approachTitle: "Make failure reproducible.",
    approachIntro: "A good test names the risk, isolates the behavior, and leaves enough evidence for someone else to fix it.",
    resume: "assets/resumes/Phan-Chi-Kien-QA-Resume.pdf",
    steps: [
      ["01", "Name the risk", "Start with user-critical paths, integration boundaries, and the conditions most likely to break silently."],
      ["02", "Automate the repeatable", "Use API and regression suites for stable checks, while reserving exploratory effort for new behavior."],
      ["03", "Leave evidence", "Track defects, logs, expected behavior, and environment details so a failure can move to a fix."]
    ],
    toolkit: [
      ["Automation", ["Selenium WebDriver", "Page Object Model", "pytest", "Flutter test", "JUnit", "Postman"]],
      ["Programming", ["Python", "Java", "JavaScript / Node.js", "Dart", "Shell"]],
      ["CI / tools", ["GitHub Actions", "Git", "Docker", "Jira / GitHub Issues", "Android Studio"]],
      ["Concepts", ["Test case design", "Regression", "Defect lifecycle", "Fault injection", "Load / stress"]]
    ],
    projects: [
      { id: "uitportal-tests", art: "tests", type: "Test Engineering", title: "UIT Portal Test Suite", description: "A Flutter suite covering feature logic, widgets, accessibility, and the design system, with an integration smoke test and JavaScript tests for the embedded AI router adapters.", facts: [["352", "test cases"], ["70", "Dart test files"], ["12", "JS adapter tests"]], tags: ["Flutter test", "integration_test", "Accessibility", "Node test"], metric: "352 test cases", link: `${GH}/UIT_Portal_App` },
      { id: "zola", type: "API / Regression", title: "Zola Chat Quality Loop", description: "Validated 18 modules across Android, REST, WebSocket, and Firebase flows. Tracked 50+ defects through full lifecycle and maintained release documentation.", tags: ["PyTest", "Postman", "Java", "Firebase"], metric: "18 modules covered", link: `${GH}/Nhom14_ZolaChat` },
      { id: "aiot", type: "Integration / Edge", title: "AIoT Flight Face Lookup", description: "Tested REST endpoints, vector-search accuracy, crypto pipeline, sync behavior, cache persistence, and hardware stress paths on MaixCAM.", tags: ["PyTest", "FastAPI", "Docker", "SSH"], metric: "15.86 ms / 0.22% FAR", link: `${GH}/AIoT_DoAn` },
      { id: "autoconnect", type: "CI / Release", title: "auto-connect-inet Pipeline", description: "Tag-triggered GitHub Actions release: analyze, run 13 Flutter and 18 Kotlin tests covering backoff, portal parsing, and network selection, then build split-ABI APKs and publish.", tags: ["GitHub Actions", "Flutter test", "JUnit", "Kotlin"], metric: "31 tests → release", link: `${GH}/auto-connect-inet` }
    ],
    more: [
      { title: "LLM router test harness", what: "Routing layer for a local LLM gateway, with golden-replay, fault-injection, shadow-mode, circuit-breaker, and SSE-contract tests.", stack: "Python · pytest", evidence: "45 test modules" },
      { title: "GoldTrader5", what: "Fuzzy-logic trading bot with a cluster engine, veto filter, and state machine, hardened through five review rounds.", stack: "Python · pytest", evidence: "328 tests · 35 fixes", link: `${GH}/GoldTrader5` },
      { title: "SpriteCutter", what: "Sprite-sheet extractor for the game engine, with MobileSAM click-to-segment and OpenCV auto-detect.", stack: "Python · pytest", evidence: "118 tests", link: `${GH}/GameDev1` },
      { title: "XAUUSD Fuzzy Logic System", what: "Membership functions, rule base, and backtests covered by unit tests.", stack: "Python · pytest", evidence: "110 tests", link: `${GH}/Fuzzy_DoAn` },
      { title: "Solana Pragmatic Hackathon", what: "Led QA and feature integration tests for a Web3 game prototype under a 48-hour deadline.", stack: "Test design · Regression", evidence: "3rd place" }
    ]
  }
};

const timeline = [
  { date: "2023", title: "Started Computer Engineering at UIT", detail: "University of Information Technology, VNU-HCM. Graduating 2027.", roles: ["ai", "embedded", "software", "ux", "qa"] },
  { date: "2024", title: "Lead of Design and Media, WebDev Studios", detail: "Coordinating plans and public communication for a UIT developer club.", roles: ["ux", "software"] },
  { date: "Mar 2024", title: "Freelance portfolio website", detail: "Responsive design delivered to a client in two weeks.", roles: ["ux", "software"] },
  { date: "May 2025", title: "Top 36 / 100, Google Hackathon Vietnam", detail: "Learn2Aid, an AI-supported first-aid learning app.", roles: ["ux", "ai"] },
  { date: "2025", title: "3rd place, Solana Pragmatic IT Hackathon", detail: "A Web3 game prototype shipped in a 48-hour sprint.", roles: ["software", "qa", "ux"] },
  { date: "Jun 2025", title: "FFT spectrum analyzer on STM32", detail: "Bare-metal DSP, DMA, and LED driving.", roles: ["embedded"] },
  { date: "2025", title: "Zola Chat", detail: "Full-stack messaging app with a realtime backend and 18 tested modules.", roles: ["software", "qa", "ux"] },
  { date: "Jan 2026", title: "GoldTrader series", detail: "ML trading engine iterations, from grid bot to fuzzy logic.", roles: ["ai", "qa"] },
  { date: "2026", title: "AIoT kiosk and SHA-256 core", detail: "Edge AI on RISC-V and a hardware hash core.", roles: ["ai", "embedded", "qa"] },
  { date: "Jun 2026", title: "SSor AI admin dashboard", detail: "Design system for IoT monitoring.", roles: ["ux"] },
  { date: "Jul 2026", title: "auto-connect-inet v1.0.0", detail: "Windows daemon and Android app, released through CI.", roles: ["software", "qa", "embedded"] },
  { date: "Aug 2026", title: "UIT Portal App v1.1.0", detail: "Flutter app with an on-device AI router.", roles: ["software", "qa", "ai"] },
  { date: "2026–27", title: "Capstone: GPS-denied indoor drone", detail: "In progress.", roles: ["embedded"] }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const pad = (n) => String(n).padStart(2, "0");

const roleKeys = Object.keys(roles);
document.documentElement.classList.add("js");

function projectMedia(project) {
  return window.projectArt?.[project.art ?? project.id]?.(`${project.title} schematic`) ?? "";
}

function projectLinks(project) {
  const links = [];
  if (project.link) links.push(`<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel ?? "View project"} <span aria-hidden="true">↗</span></a>`);
  if (project.demo) links.push(`<a class="project-link" href="${project.demo}" target="_blank" rel="noreferrer">Video demo <span aria-hidden="true">↗</span></a>`);
  if (!links.length) links.push('<span class="project-link is-local">Local project · not public</span>');
  return `<div class="project-links">${links.join("")}</div>`;
}

function renderProjects(role) {
  $("#project-grid").innerHTML = role.projects.map((project, index) => `
    <article class="project-card${index === 0 ? " is-featured" : ""}" data-project="${project.id}" style="--i:${index}">
      <div class="project-media drawing"><span class="media-tag">FIG. ${pad(index + 1)}</span>${projectMedia(project)}</div>
      <div class="project-body">
        <div class="project-kicker"><span>${pad(index + 1)} / ${project.type}</span><span>${project.metric}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.facts ? `<dl class="project-facts">${project.facts.map(([value, label]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>` : ""}
        <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        ${projectLinks(project)}
      </div>
    </article>
  `).join("");
}

function renderIndex(role) {
  const start = role.projects.length;
  $("#project-index").innerHTML = role.more.map((item, index) => `
    <li class="index-row">
      <span class="index-ref">${pad(start + index + 1)}</span>
      <div class="index-main"><h4>${item.title}</h4><p>${item.what}</p></div>
      <span class="index-stack">${item.stack}</span>
      <span class="index-evidence">${item.evidence}</span>
      ${item.link
        ? `<a class="index-link" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel ?? "GitHub"} <span aria-hidden="true">↗</span></a>`
        : `<span class="index-link is-local">${item.status ?? "Local only"}</span>`}
    </li>
  `).join("");
}

function renderToolkit(role) {
  $("#toolkit-grid").innerHTML = role.toolkit.map(([group, items], index) => `
    <div class="toolkit-group">
      <span class="toolkit-ref">${String.fromCharCode(65 + index)}</span>
      <h3>${group}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderApproach(role) {
  $("#approach-list").innerHTML = role.steps.map(([number, title, text]) => `
    <article class="approach-item">
      <span class="approach-number">${number}</span>
      <div><h3>${title}</h3><p>${text}</p></div>
    </article>
  `).join("");
}

function renderTimeline(name) {
  $("#timeline-list").innerHTML = timeline.map((entry) => `
    <li class="timeline-item${entry.roles.includes(name) ? " is-relevant" : ""}">
      <span class="timeline-date">${entry.date}</span>
      <div><h3>${entry.title}</h3><p>${entry.detail}</p></div>
    </li>
  `).join("");
}

function buildLever() {
  $("#lever").style.setProperty("--steps", roleKeys.length - 1);
  $("#role-lever").max = String(roleKeys.length - 1);
  $("#lever-track").insertAdjacentHTML("afterbegin", roleKeys.map((_, i) => `<span class="lever-detent" style="--i:${i}" aria-hidden="true"></span>`).join(""));
  $("#lever-labels").innerHTML = roleKeys.map((key, i) => `
    <button class="role-option" type="button" tabindex="-1" data-role-option="${key}" style="--i:${i}">
      <span class="role-number">${pad(i + 1)}</span><strong>${roles[key].short}</strong>
    </button>
  `).join("");
}

function setRole(name, updateUrl = true) {
  if (!roles[name]) name = "ai";
  const role = roles[name];
  if (document.body.dataset.role === name && $("#project-grid").childElementCount) return;
  const position = roleKeys.indexOf(name);
  document.body.dataset.role = name;
  document.querySelector('meta[name="theme-color"]').content = getComputedStyle(document.body).getPropertyValue("--paper").trim();
  $("#role-code").textContent = `${pad(position + 1)} / ${pad(roleKeys.length)}`;
  $("#availability").textContent = role.availability;
  $("#hero-title").textContent = role.title;
  $("#hero-intro").textContent = role.intro;
  $("#signal-role").textContent = role.label;
  $("#signal-proof").textContent = role.proof;
  $("#signal-proof-label").textContent = role.proofLabel;
  $("#work-title").textContent = role.workTitle;
  $("#work-intro").textContent = role.workIntro;
  $("#approach-title").textContent = role.approachTitle;
  $("#approach-intro").textContent = role.approachIntro;
  $("#view-resume").href = role.resume;
  $("#download-resume").href = role.resume;
  $("#role-lever").value = String(position);
  $("#role-lever").setAttribute("aria-valuetext", role.label);
  $("#lever").style.setProperty("--pos", position);
  $("#lever-readout").textContent = role.label;
  $$(".role-lens-name").forEach((element) => { element.textContent = role.label; });
  $$("[data-role-option]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.roleOption === name);
  });
  renderProjects(role);
  renderIndex(role);
  renderToolkit(role);
  renderApproach(role);
  renderTimeline(name);
  if (updateUrl) history.replaceState(null, "", `#role=${name}`);
}

buildLever();

// The range input is the accessible control; the visible labels are mouse/touch shortcuts to its detents.
$("#role-lever").addEventListener("input", (event) => setRole(roleKeys[Number(event.target.value)]));
$$("[data-role-option]").forEach((button) => button.addEventListener("click", () => setRole(button.dataset.roleOption)));

const roleFromHash = () => new URLSearchParams(location.hash.replace(/^#/, "")).get("role");
setRole(roleFromHash(), false);
addEventListener("hashchange", () => { if (roles[roleFromHash()]) setRole(roleFromHash(), false); });

const reveal = (element) => element.classList.add("is-visible");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        reveal(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  $$(".reveal").forEach((element) => {
    if (element.getBoundingClientRect().top < innerHeight) reveal(element);
    else observer.observe(element);
  });
} else {
  $$(".reveal").forEach(reveal);
}

window.portfolio = { roles, roleKeys, setRole };
// Self-check: each role needs a resume, a featured project plus three more, an index, and a toolkit.
console.assert(roleKeys.every((key) => roles[key].resume && roles[key].projects.length === 4 && roles[key].more.length && roles[key].toolkit.length), "Portfolio role data incomplete");
