import { initFunctionBySelector } from "../functions/init-by-selector.js";

initFunctionBySelector(".js-toggle-menu", function(elem) {
  elem.addEventListener("click", function() {
    document.body.classList.toggle("_menu-open")
  })
})