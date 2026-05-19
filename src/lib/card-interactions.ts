import { inView, animate } from "motion";

const TILT_DEG = 4;

const TILT_SELECTOR = ".card";
const REVEAL_SELECTOR =
  ".card, .hackathon-card, .service-card, .tool-card, .blog-card, .page-header, [data-reveal]";

// Flag the document early so reveal-targets get hidden via CSS only when JS is
// actually running. If JS fails, cards remain visible (graceful degradation).
if (typeof document !== "undefined") {
  document.documentElement.classList.add("js-ready");
}

function attachInteractions() {
  const cards = document.querySelectorAll<HTMLElement>(TILT_SELECTOR);

  cards.forEach((card) => {
    if (card.dataset.interactive === "1") return;
    card.dataset.interactive = "1";

    let rafId = 0;
    let pendingX = 0;
    let pendingY = 0;

    const handleMove = (e: PointerEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const rect = card.getBoundingClientRect();
        const x = pendingX - rect.left;
        const y = pendingY - rect.top;
        const px = x / rect.width;
        const py = y / rect.height;
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
        card.style.setProperty("--tilt-x", `${-(py - 0.5) * TILT_DEG}deg`);
        card.style.setProperty("--tilt-y", `${(px - 0.5) * TILT_DEG}deg`);
      });
    };

    const handleLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };

    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerleave", handleLeave);
  });

  // Scroll-in reveal. Cards above the fold trigger immediately; the rest as
  // they enter the viewport. We mark elements to avoid double-animating across
  // navigations.
  inView(REVEAL_SELECTOR, (element) => {
    const el = element as HTMLElement;
    if (el.dataset.revealed) return;
    el.dataset.revealed = "1";
    animate(
      el,
      { opacity: [0, 1], y: [40, 0] },
      { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    );
  });
}

if (typeof window !== "undefined") {
  // Initial page load.
  document.addEventListener("DOMContentLoaded", attachInteractions, { once: false });
  // Re-attach after every Astro view-transition navigation.
  document.addEventListener("astro:page-load", attachInteractions);
}
