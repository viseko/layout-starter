export default class RadioButtons {
  constructor(selector, options) {
    const elem = (typeof selector === "string") ? document.querySelector(selector) : elem;

    if (!(elem instanceof HTMLElement)) return;

    const inputs = elem.querySelectorAll("[type=radio]");
    
    if (inputs.length === 0) return;

    const callback = options.callback;

    inputs.forEach(input => {
      input.addEventListener("change", function() {
        if (typeof callback ===  "function") {
          callback(this.value);
        }
      });
    })
  }
}
