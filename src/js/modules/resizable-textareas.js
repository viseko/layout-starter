const selector = ".js-input";
const elems = document.querySelectorAll(selector);

if (elems.length > 0) {
  elems.forEach(initTextarea);
}

function initTextarea(elem) {
  const textarea = elem.querySelector("textarea");

  if (!textarea) return;

  textarea.setAttribute("rows", "1");
  textarea.addEventListener("keydown", resizeTextarea);
}

function resizeTextarea() {
  const el = this;
  setTimeout(function() {
    el.style.cssText = 'height:auto;';
    el.style.cssText = 'height:' + (el.scrollHeight + 2) + 'px';
  }, 1);
}
