export default class SearchField {
  constructor(searchPanel) {
    const input = searchPanel.querySelector("input");
    const reset = searchPanel.querySelector("[type=reset]");
    const minSymbols = searchPanel.dataset.minQ || 2;

    const stateClasses = {
      hasValue: "_has-value",
      notFound: "_not-found",
      focus: "_focus",
      result: "_result"
    };

    function inputHander() {
      if (this.value.length < minSymbols) {
        searchPanel.classList.remove(stateClasses.hasValue);
      } else {
        searchPanel.classList.add(stateClasses.hasValue);
      }
    }

    function resetHandler() {
      searchPanel.classList.remove(stateClasses.hasValue);
      searchPanel.classList.add(stateClasses.focus);
      document.body.classList.remove("_search-focus");
    };

    function focusHandler() {
      searchPanel.classList.add(stateClasses.focus);
      document.body.classList.add("_search-focus");
    }

    function blurHandler(e) {
      const isList = e.target.closest(".js-search-panel") === searchPanel;

      if (!isList) {
        searchPanel.classList.remove(stateClasses.focus);
        document.body.classList.remove("_search-focus");
      }
    }

    input.addEventListener("input", inputHander);
    input.addEventListener("change", inputHander);
    input.addEventListener("focus", focusHandler);
    reset && reset.addEventListener("click", resetHandler);
    document.addEventListener("mousedown", blurHandler);
  }
}