import truncate from "../functions/truncate.js";
import { initFunctionBySelector } from "../functions/init-by-selector.js";

initFunctionBySelector(".js-truncate", initTruncateArea, {
  limit: 240,
  showText: "Показать целиком",
  hideText: "Скрыть",
  spoilerClass: "spoiler",
  showClass: "_show"
});

function createSpoinerButton(text, hide = false) {
  const btn = document.createElement("button");
  btn.className = "spoiler__btn";
  if (hide) {
    btn.classList.add("spoiler__btn--hide");
  }
  btn.innerHTML = text;
  return btn;
}

function createTextWrapper(className, html) {
  const wrapper = document.createElement("div");
  wrapper.className = className;
  wrapper.innerHTML = html;

  return wrapper;
}

function initTruncateArea(elem, options) {
  const { limit, showText, hideText, spoilerClass, showClass } = options;

  if (elem.innerText.length <= limit) return;

  // Короткий и длинный текст
  const fullHTML = elem.innerHTML;
  const shortHTML = truncate(fullHTML, limit);

  if (fullHTML === shortHTML) return;

  // Кнопки показать/скрыть
  const btnShow = createSpoinerButton(showText);
  const btnHide = createSpoinerButton(hideText, true);

  // Обёртки для текста
  const shortWrapper = createTextWrapper("spoiler__short", shortHTML);
  const fullWrapper = createTextWrapper("spoiler__full", fullHTML);

  // Вставка обёрток
  elem.innerHTML = "";
  elem.append(shortWrapper);
  elem.append(fullWrapper);

  // Вставка кнопки раскрытия внутрь текста
  const lastElem = shortWrapper.querySelector("*:last-child");
  if (lastElem) {
    lastElem.append(btnShow);
  } else {
    shortWrapper.append(btnShow);
  }

  // Вставка кнопки скрытия
  elem.append(btnHide);

  // Функции скрытия/отображение
  const show = () => {
    elem.classList.add(showClass);
  };

  const hide = () => {
    elem.classList.remove(showClass);
  };

  // Обработчики
  btnShow.addEventListener("click", show);
  btnHide.addEventListener("click", hide);

  // Вешаем класс на родительский блок
  elem.classList.add(spoilerClass);
}
