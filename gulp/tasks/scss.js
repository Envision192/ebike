import dartSass from "sass"; //sass compiler
import gulpSass from "gulp-sass"; // gulp scss plugin
import rename from "gulp-rename"; // rename files
import cleanCss from "gulp-clean-css"; //optimize css
import webpcss from "gulp-webpcss"; // supports webP in css
import autoprefixer from "gulp-autoprefixer"; // support old browser
import groupCssMediaQueries from "gulp-group-css-media-queries"; // group media queries

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
	.pipe(
		app.plugins.if(
			app.isBuild,
			groupCssMediaQueries()
		)
	)
	.pipe(
		app.plugins.if(
			app.isBuild,
			webpcss({ webpClass: ".webp", noWebpClass: ".no-webp", }) 
		)
	) 
	.pipe(
		app.plugins.if(
			app.isBuild,
			 autoprefixer({
				grid: true,
				overrideBrowserslist: ["last 3 versions"],
				cascade: true
			})
		)
	)
	// Раскомментировать если нужен не сжатый дублирующий файл стилей
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(
		app.plugins.if(
			app.isBuild,
			cleanCss()
		)
	)
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
