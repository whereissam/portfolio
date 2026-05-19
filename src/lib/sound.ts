const STORAGE_KEY = "sound:enabled";

let audioCtx: AudioContext | null = null;
let enabled = false;

function loadPref() {
  if (typeof localStorage === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "1";
}

function savePref(value: boolean) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
}

function getCtx() {
  if (!audioCtx) {
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AC();
  }
  return audioCtx;
}

function playTick(frequency = 1500, durationMs = 35) {
  if (!enabled) return;
  try {
    const ctx = getCtx();
    if (ctx.state === "suspended") void ctx.resume();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.05, t + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + durationMs / 1000);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + durationMs / 1000 + 0.02);
  } catch {
    // AudioContext can throw if not unlocked yet; ignore.
  }
}

function syncToggleUi() {
  document.querySelectorAll<HTMLElement>("[data-sound-toggle]").forEach((btn) => {
    btn.dataset.soundEnabled = enabled ? "1" : "0";
    btn.setAttribute("aria-pressed", String(enabled));
    btn.setAttribute("aria-label", enabled ? "Mute sound effects" : "Enable sound effects");
  });
}

function attachListeners() {
  // Hover ticks for cards.
  document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
    if (card.dataset.soundBound) return;
    card.dataset.soundBound = "1";
    card.addEventListener("pointerenter", () => playTick(1400, 30));
  });

  // Click ticks for the toggle itself.
  document.querySelectorAll<HTMLElement>("[data-sound-toggle]").forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", () => {
      enabled = !enabled;
      savePref(enabled);
      syncToggleUi();
      if (enabled) playTick(1800, 50);
    });
  });

  syncToggleUi();
}

if (typeof window !== "undefined") {
  enabled = loadPref();
  const boot = () => {
    syncToggleUi();
    attachListeners();
  };
  document.addEventListener("DOMContentLoaded", boot, { once: false });
  document.addEventListener("astro:page-load", boot);
}
