import Lenis from "lenis";

let lenis: Lenis | null = null;
let parallaxTargets: Array<{ el: HTMLElement; speed: number }> = [];

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function refreshTargets() {
  parallaxTargets = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax]"),
  ).map((el) => ({
    el,
    speed: Number(el.dataset.parallaxSpeed ?? "0.2"),
  }));
}

function applyParallax(scroll: number) {
  for (const { el, speed } of parallaxTargets) {
    el.style.transform = `translate3d(0, ${(-scroll * speed).toFixed(2)}px, 0)`;
  }
}

function init() {
  if (prefersReducedMotion) return;

  if (lenis) {
    lenis.destroy();
    lenis = null;
  }

  lenis = new Lenis({
    // `lerp` per-frame interpolation feels snappier than duration-based easing.
    // 0.12 ≈ ~8 frames to settle — quick but not jarring.
    lerp: 0.12,
    smoothWheel: true,
    // Skip smoothing on touch devices so mobile flicks stay native.
    smoothTouch: false,
  });

  refreshTargets();
  applyParallax(window.scrollY);

  lenis.on("scroll", ({ scroll }: { scroll: number }) => {
    applyParallax(scroll);
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", init, { once: false });
  document.addEventListener("astro:page-load", () => {
    refreshTargets();
    applyParallax(window.scrollY);
  });
}
