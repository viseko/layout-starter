import webpack from "webpack-stream"
import uglify from "gulp-uglify"
import rename from "gulp-rename";

export const js = () => {

app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "JS",
			message: "Error: <%= error.message %>"
		}))
	)
	.pipe(webpack({
		mode: app.isDev ? "development" : "production",
	}))
	.pipe(uglify())
	.pipe(rename({
		extname: ".min.js"
	}))
	.pipe(app.gulp.dest(app.path.build.js))
	.pipe(app.plugins.browsersync.stream());

	return app.gulp.src(app.path.src.jsUI, { sourcemaps: false })
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "JS",
			message: "Error: <%= error.message %>"
		}))
	)
	.pipe(webpack({
		mode: app.isDev ? "development" : "production",
	}))
	.pipe(uglify())
	.pipe(rename({
		extname: ".ui.js"
	}))
	.pipe(app.gulp.dest(app.path.build.js))
	.pipe(app.plugins.browsersync.stream());
}
