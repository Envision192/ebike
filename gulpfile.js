import gulp from "gulp";
import { path } from "./gulp/config/path.js"; 
import { plugins } from "./gulp/config/plugins.js";

global.app = {
	isBuild: process.argv.includes('--build'), 
	isDev: !process.argv.includes('--build'), 
    path: path,
    gulp: gulp,
	plugins: plugins, 
};

// Задачи
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff2, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSpriter } from "./gulp/tasks/svgSpriter.js";
import { zip } from "./gulp/tasks/zip.js";



function watcher() {
    gulp.watch(path.watch.assets, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSpriter }

//Обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff2, fontsStyle);

//Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images)); 

//Дев и билд сценарии
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, svgSpriter);
const deployZip = gulp.series(reset, mainTasks, svgSpriter, zip);

//Экспорт сценариев
export { dev }
export { build }
export { deployZip }


gulp.task('default', dev);