// Принимает пути к вендорным скриптам и подгружает их на страницу
// * path - путь к js-файлу
// * onload - callback успешной загрузки
// * onerror - обработчик ошибки

export default function importVendor(options) {
  const { path, onload, onerror } = options;

  const format = path.slice(path.lastIndexOf("."));
  if (format !== ".js") {
    throw new Error(`${path} - The selected file should have the .js extension`)
  }

  const script = document.createElement("script");
  script.src = path;

  script.addEventListener("load", onload);
  script.addEventListener("error", onerror);

  document.body.append(script);
}