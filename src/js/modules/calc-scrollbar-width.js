import calcScrollbarWidth from "../functions/calc-scrollbar-width.js";

const scrollbarWidth = calcScrollbarWidth();
document.body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);