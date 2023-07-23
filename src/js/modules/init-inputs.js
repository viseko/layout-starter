import InputCode from "../classes/input-code.js";
import ImageField from "../classes/input-image.js";
import InputPassword from "../classes/input-password.js";
import InputRate from "../classes/input-rate.js";
import InputSelect from "../classes/input-select.js";
import InputText from "../classes/input-text.js";
import InputDate from "../classes/input-date.js";
import InputDateSingle from "../classes/input-date-single.js";
import SearchField from "../classes/search-field.js";

import initBySelector from "../functions/init-by-selector.js";

// Обычные поля ввода
initBySelector(".js-input", InputText, {
  blurValidate: true,
});

// Поля ввода тел. номера
initBySelector(".js-input-phone", InputText, {
  mask: "+7 ___ ___-__-__",
  blurValidate: true,
  minLength: 16,
  errors: {
    "minlength": "Введите номер полностью"
  }
});

// Поля ввода почты
initBySelector(".js-input-email", InputText, {
  pattern: /.+@.+\..+/,
  blurValidate: true,
  errors: {
    "pattern": "Некорректный формат эл. почты"
  }
});

// Поля ввода пароля
initBySelector(".js-input-password", InputPassword, {
  required: true,
  blurValidate: true,
  minLength: 6
});

// Селекты
initBySelector(".js-input-select", InputSelect);

// Звёздочки рейтинга
initBySelector(".js-input-rate", InputRate);

// Ввод кода подтверждения
initBySelector(".js-input-code", InputCode);

// Поле загрузки фото
initBySelector(".js-image-field", ImageField);

// Выбор диапазона дат
initBySelector(".js-date-field", InputDate);

// Выбор диапазона дат
initBySelector(".js-date-field-single", InputDateSingle);

// Панели поиска
initBySelector(".js-search", SearchField);