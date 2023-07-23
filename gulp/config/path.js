// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const srcFolder = `./src`;

export const path = {
	build: {
		fonts: `${buildFolder}/assets/fonts/`,
		images: `${buildFolder}/assets/img/`,
		js: `${buildFolder}/assets/js/`,
		css: `${buildFolder}/assets/css/`,
		pug: `${buildFolder}/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/assets/`,
	},
	src: {
		img: `${srcFolder}/assets/img/`,
		js: `${srcFolder}/js/main.js`,
		jsUI: `${srcFolder}/js/ui.js`,
		sass: [`${srcFolder}/sass/main.scss`, `${srcFolder}/sass/ui.scss`],
		pug: `${srcFolder}/pug/pages/*.pug`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/assets/**/*.*`,
	},
	raw: {
		fonts: `${srcFolder}/raw/fonts/`,
		img: `${srcFolder}/raw/img/**/*.{jpg,jpeg,png}`,
		svgIcons: `${srcFolder}/raw/svg-icons/*.svg`
	},
	watch: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		js: `${srcFolder}/js/**/*.js`,
		sass: `${srcFolder}/sass/**/*.scss`,
		pug: `${srcFolder}/pug/**/*.pug`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/data/**/*.*`,
	}, 
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}

export const resolves = {
	html: [
		["@img", "assets/img"]
	],
	css: [
		["@img", "../img"],
		["@fonts", "../fonts"],
	]
}