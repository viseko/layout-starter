// Инициализация компонентов и возврат массива их инстансов

// * через класс или функцию-конструктор
export default function initBySelector(selector, constructor, options) {
  const elems = document.querySelectorAll(selector);
  const initializatedObjs = [];

  if (elems.length > 0) {
    elems.forEach(elem => {
      initializatedObjs.push(new constructor(elem, options));
    });
  }

  return initializatedObjs;
}

// * через функцию
export function initFunctionBySelector(selector, func, options) {
  const elems = document.querySelectorAll(selector);
  const initializatedObjs = [];

  if (elems.length > 0) {
    elems.forEach(elem => {
      initializatedObjs.push(func(elem, options));
    });
  }

  return initializatedObjs;
}