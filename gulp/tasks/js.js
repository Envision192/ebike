import webpack from "webpack-stream"; // webpack plugin (require webpack npm package)

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(
      webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: "app.min.js",
        },
        module: {
          rules: [{ test: /\.(sass|css|scss)$/, use: ["style-loader", "css-loader", 'sass-loader'], }],
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
