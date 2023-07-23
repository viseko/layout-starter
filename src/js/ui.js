const uiNav = document.querySelector(".js-ui-nav");
const uiTabs = document.querySelector(".js-ui-tabs");

// Переключение вкладок
uiNav.addEventListener("click", function(e) {
  // e.preventDefault();
  const link = e.target.closest("a[href^='#']");

  if (!link) return;

  const section = uiTabs.querySelector(link.getAttribute("href"));
  if (!section) return;

  const activeLink = document.querySelector(".ui-nav ._active");
  if (activeLink) {
    activeLink.classList.remove("_active");
  }

  link.classList.add("_active");

  document.querySelector(".ui-tabs ._active").classList.remove("_active");
  section.classList.add("_active");
});

// Расчёт высоты хедера
function calcHeaderHeight() {
  const header = document.querySelector(".ui-header");
  const headerHeight = header.offsetHeight;

  document.body.style.setProperty("--header-height", `${headerHeight}px`);
}

calcHeaderHeight();

window.addEventListener("resize", calcHeaderHeight);

// Открытие нужной вкладки при загрузке
const hash = location.hash;
if (hash.length) {
  const link = uiNav.querySelector(`[href='${hash}']`);
  if (link) {
    link.click();
  }
}