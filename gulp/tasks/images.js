import webp from "gulp-webp"; // webP plugin
import imagemin from "gulp-imagemin"; // optimized images
import newer from "gulp-newer"; // looking for new file to copy


export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error <%= error.message %>",
        })
      )
    )
	.pipe(app.plugins.newer(app.path.build.images))
	.pipe(
		app.plugins.if(
			app.isBuild,
			webp()
		)
	)
	.pipe(
		app.plugins.if(
			app.isBuild,
			app.gulp.dest(app.path.build.images)
		)
	)
	.pipe(
		app.plugins.if(
			app.isBuild,
			app.gulp.src(app.path.src.images)
		)
	)
	.pipe(
		app.plugins.if(
			app.isBuild,
			app.plugins.newer(app.path.build.images)
		)
	)
	.pipe(
		app.plugins.if(
			app.isBuild,
			imagemin({
				progressive: true,
				svgPluggins: [{ removeViewBox: false}],
				interlaced: true,
				optimizationLevel: 3 //0 to 7
			})
		)
	)
    .pipe(app.gulp.dest(app.path.build.images))
	.pipe(app.gulp.src(app.path.src.svg))
	.pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
