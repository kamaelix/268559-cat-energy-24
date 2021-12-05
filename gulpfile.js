<<<<<<< HEAD
import gulp from "gulp";
import plumber from "gulp-plumber";
import less from "gulp-less";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import browser from "browser-sync";
=======
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
>>>>>>> e3fe5655a0908b787db2e90bc1bea77132b44b15

// Styles

export const styles = () => {
<<<<<<< HEAD
  return gulp
    .src("source/less/style.less", { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("source/css", { sourcemaps: "." }))
=======
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
>>>>>>> e3fe5655a0908b787db2e90bc1bea77132b44b15
    .pipe(browser.stream());
};

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: "source",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher

const watcher = () => {
<<<<<<< HEAD
  gulp.watch("source/less/**/*.less", gulp.series(styles));
  gulp.watch("source/*.html").on("change", browser.reload);
};
=======
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}
>>>>>>> e3fe5655a0908b787db2e90bc1bea77132b44b15

export default gulp.series(styles, server, watcher);
