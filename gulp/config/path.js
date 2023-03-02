import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
        html: `${buildFolder}`,
        assets: `${buildFolder}/assets/`,
        images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`
    },
    src: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/**/*.*`, 
    },
    watch: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}