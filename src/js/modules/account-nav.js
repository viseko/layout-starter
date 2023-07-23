import { initFunctionBySelector } from "../functions/init-by-selector.js";

initFunctionBySelector(".js-account-nav-btn", initButton);

function initButton(btn) {
  let isOpen = false;
  const showClass = "_show";

  const open = () => {
    isOpen = true;
    btn.classList.add(showClass);
  };

  const close = () => {
    isOpen = false;
    btn.classList.remove(showClass);
  };

  btn.addEventListener("click", function() {
    isOpen ? close() : open();
  })
}