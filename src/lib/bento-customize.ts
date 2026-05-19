/**
 * Per-card resize for the homepage bento.
 *
 * Each direct child of .bento-grid gets a SE-corner drag handle (subtle, fades
 * in on card hover). Drag to change grid-column / grid-row span (1..4).
 * Layout persists in localStorage keyed by card index. Press `R` to reset.
 */

const STORAGE_KEY = "bento:layout";
const MIN_W = 1;
const MAX_W = 4;
const MIN_H = 1;
const MAX_H = 4;
const SVG_NS = "http://www.w3.org/2000/svg";

type SavedLayout = Record<string, { w: number; h: number }>;

function loadLayout(): SavedLayout {
  if (typeof localStorage === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as SavedLayout;
  } catch {
    return {};
  }
}

function saveLayout(layout: SavedLayout) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
}

function applyLayout(grid: HTMLElement) {
  const layout = loadLayout();
  Array.from(grid.children).forEach((node, i) => {
    if (!(node instanceof HTMLElement)) return;
    const saved = layout[String(i)];
    if (saved) {
      node.style.gridColumn = `span ${saved.w}`;
      node.style.gridRow = `span ${saved.h}`;
    }
  });
}

function currentSpans(el: HTMLElement): { w: number; h: number } {
  const cs = window.getComputedStyle(el);
  const parseSpan = (val: string) => {
    const m = val.match(/span\s+(\d+)/);
    return m ? Number(m[1]) : 1;
  };
  return { w: parseSpan(cs.gridColumn), h: parseSpan(cs.gridRow) };
}

function makeHandleIcon(): SVGSVGElement {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 16 16");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("d", "M14 6L6 14M14 11L11 14");
  svg.appendChild(path);
  return svg;
}

function attachHandle(item: HTMLElement, index: number) {
  if (item.querySelector(".bento-handle")) return;
  const handle = document.createElement("button");
  handle.type = "button";
  handle.className = "bento-handle";
  handle.setAttribute("aria-label", "Resize card (drag)");
  handle.appendChild(makeHandleIcon());
  item.appendChild(handle);

  let startX = 0;
  let startY = 0;
  let baseW = 1;
  let baseH = 1;
  let unitW = 0;
  let unitH = 0;

  const onMove = (e: PointerEvent) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const dw = Math.round(dx / unitW);
    const dh = Math.round(dy / unitH);
    const w = Math.min(MAX_W, Math.max(MIN_W, baseW + dw));
    const h = Math.min(MAX_H, Math.max(MIN_H, baseH + dh));
    item.style.gridColumn = `span ${w}`;
    item.style.gridRow = `span ${h}`;
  };

  const onUp = (e: PointerEvent) => {
    handle.releasePointerCapture(e.pointerId);
    handle.removeEventListener("pointermove", onMove);
    handle.removeEventListener("pointerup", onUp);
    handle.removeEventListener("pointercancel", onUp);
    item.classList.remove("bento-resizing");
    const final = currentSpans(item);
    const layout = loadLayout();
    layout[String(index)] = { w: final.w, h: final.h };
    saveLayout(layout);
  };

  handle.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    e.stopPropagation();
    startX = e.clientX;
    startY = e.clientY;
    const { w, h } = currentSpans(item);
    baseW = w;
    baseH = h;
    const rect = item.getBoundingClientRect();
    unitW = rect.width / Math.max(1, baseW);
    unitH = rect.height / Math.max(1, baseH);
    item.classList.add("bento-resizing");
    handle.setPointerCapture(e.pointerId);
    handle.addEventListener("pointermove", onMove);
    handle.addEventListener("pointerup", onUp);
    handle.addEventListener("pointercancel", onUp);
  });
}

function resetLayout(grid: HTMLElement) {
  saveLayout({});
  Array.from(grid.children).forEach((node) => {
    if (node instanceof HTMLElement) {
      node.style.gridColumn = "";
      node.style.gridRow = "";
    }
  });
}

let resetBound = false;
function bindResetKey(grid: HTMLElement) {
  if (resetBound) return;
  resetBound = true;
  window.addEventListener("keydown", (e) => {
    if (e.key !== "r" && e.key !== "R") return;
    const active = document.activeElement;
    if (
      active instanceof HTMLInputElement ||
      active instanceof HTMLTextAreaElement ||
      (active instanceof HTMLElement && active.isContentEditable)
    ) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    resetLayout(grid);
  });
}

function boot() {
  const grid = document.querySelector<HTMLElement>(".bento-grid");
  if (!grid) return;

  applyLayout(grid);
  Array.from(grid.children).forEach((node, i) => {
    if (node instanceof HTMLElement) attachHandle(node, i);
  });
  bindResetKey(grid);
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", boot, { once: false });
  document.addEventListener("astro:page-load", boot);
}
