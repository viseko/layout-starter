import { initFunctionBySelector } from "../functions/init-by-selector.js";
import setSatellitePosition from "../functions/set-satellite-position.js";

initFunctionBySelector(".js-dropdown", initDropdown);

function initDropdown(dropdown) {
  const parent = dropdown.parentElement;
  const offset = dropdown.dataset.offset || 16

  setSatellitePosition(parent, dropdown, offset);

  window.addEventListener("resize", function() {
    setSatellitePosition(parent, dropdown, offset);
  });

  parent.addEventListener("mouseenter", function() {
    setSatellitePosition(parent, dropdown, offset);
  })
}