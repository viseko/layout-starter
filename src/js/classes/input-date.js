import AirDatepicker from "air-datepicker";

const options = {
  visible: false,
  range: true,
  multipleDatesSeparator: " — "
};

function formatDate(date) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];

  if (!date) return null;

  let [d, m, y] = date.split(".").map(val => val.replace(/^0/, ""));
  
  return [d, months[m - 1], y];
}

export default class InputDate {
  constructor(elem) {
    const input = elem.querySelector("[data-role='input']");
    const output = elem.querySelector("[data-role='output']");

    const field = this;

    this.input = input;
    this.output = output;
    this.picker = new AirDatepicker(input, {
      ...options,
      onSelect({formattedDate}) {
        const [from, to] = formattedDate;
        field.render(from, to);
      }
    });

    // Проверка значения, если дата не установлена, устанавливаем диапазон этого месяца
    let value = input.value;
    let dates = value.split(options.multipleDatesSeparator);
    if (dates.length < 2) {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 1);

      this.picker.selectDate([startDate, endDate])
    }
  }

  render(from, to) {
    const dateFrom = formatDate(from);
    const dateTo = formatDate(to);

    if (dateFrom && dateTo && dateFrom[2] === dateTo[2]) {
      dateFrom.pop();
    }

    const strFrom = dateFrom ? dateFrom.join(" ") : "...";
    const strTo = dateTo ? dateTo.join(" ") : "...";

    const formattedString = `${strFrom}${options.multipleDatesSeparator}${strTo}`
    this.output.innerHTML = formattedString;
    this.input.value = formattedString;
  }
}