import InputText from "./input-text.js";

const STATES = {
  show: "_show",
};

export default class InputPassword extends InputText {
  constructor(elem, options) {
    super(elem, options);
    
    this.hidden = true;

    const btn = this._elem.querySelector("button");
    btn.addEventListener("click", this.showHide.bind(this));
  }

  showHide() {
    if (this.hidden) {
      this.hidden = false;
      this._elem.classList.add(STATES.show);
      this._inputElem.type = "text";
    } else {
      this.hidden = true;
      this._elem.classList.remove(STATES.show);
      this._inputElem.type = "password";
    }
  }
}