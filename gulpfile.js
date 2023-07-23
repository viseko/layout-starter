import gulp from "gulp";
import pugLinter from "gulp-pug-linter";
import stylelint from "gulp-stylelint";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

function isBuild() {
	return process.argv.includes("--build") || process.argv.includes("build");
}

// Передаем значения в глобальную переменную
global.app = {
	isBuild: isBuild(),
	isDev: !isBuild(),
	path: path,
	gulp: gulp,
	plugins: plugins
};

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
// import { html } from "./gulp/tasks/html.js";
import { pughtml } from "./gulp/tasks/pug.js";
import { scss } from "./gulp/tasks/sass.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js";
import { tiny } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, clearFonts } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";


// Наблюдатель
function watcher () {
	gulp.watch(path.watch.files, copy)
	// gulp.watch(path.watch.html, html) // для работы с HTML
	gulp.watch(path.watch.pug, pughtml) // для работы с Pug
	gulp.watch(path.watch.sass, scss)
	gulp.watch(path.watch.js, js)
}

const mainTasks = gulp.series(reset, gulp.parallel(copy, pughtml, scss, js)); // для работы с Pug
// const mainTasks = gulp.series(reset, gulp.parallel(copy, fonts, html, scss, js)); // для работы с HTML

const dev = gulp.series(mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(mainTasks);
const pkzip = gulp.series(mainTasks, zip);
const deploy = gulp.series(ftp);
const fonts = gulp.series(otfToTtf, ttfToWoff, clearFonts);
const prepare = gulp.parallel(fonts, tiny);

export { dev }
export { build }
export { pkzip }
export { deploy }
export { prepare }
export { fonts }
export { tiny }

gulp.task("default", dev);

// Линтинг
gulp.task("lint:template", () => (
  gulp
    .src(app.path.watch.pug)
    .pipe(pugLinter({ reporter: "default" }))
));

gulp.task("lint:scss", () => {
	return gulp.src(app.path.watch.sass).
    pipe(stylelint({
			fix: true,
      reporters: [
        {
          failAfterError: true,
          formatter: 'string',
          console: true,
        },
      ],
    })).
		pipe(gulp.dest(`src/sass`));
});