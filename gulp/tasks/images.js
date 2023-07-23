import tinyPNG from "gulp-tinypng-compress";

export const tiny = () => {
	return app.gulp.src(app.path.raw.img)
		.pipe(tinyPNG({
			key: 'df6HLdzR2ldKTqSyBX8L2GnBFnCkL45t',
			sigFile: 'images/.tinypng-sigs',
			log: true
		}))
		.pipe(app.gulp.dest(`${app.path.src.img}`));
}