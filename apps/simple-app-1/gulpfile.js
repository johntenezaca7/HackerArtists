// Init Modules
const { series, parallel, src, dest, watch, done } = require("gulp");
// const replace = require("gulp-replace");
// const concat = require("gulp-concat");
// const uglify = require("gulp-uglify");
// const sass = require("gulp-sass");
// const webpackStream = require("webpack-stream");
// const webpackConfig = require("./webpack.config");
var browserSync = require('browser-sync').create();

// File Path Variables
// const files = {
//   source: {
//     scssPath: "./src/scss/styles.scss",
//     jsPath: "./src/js/**/*.js",
//     tsPath: "./src/ts/**/*.(ts + tsx)",
//     htmlPath: "./public/index.html"
//   },
//   public: {
//     cssPath: "./public/css/",
//     jsPath: "./public/js/",
//     htmlPath: "./public/"
//   },
//   watch: {
//     scss: "./src/scss/**/*.scss",
//     ts: "./src/ts/**/*.tsx"
//   }
// }

// Simple App
// Reload site when making changes in public. Good for starting out simple.

const simpleApp = {
  css:"./public/css/styles.css",
  js:"./public/js/main.js",
  html:"./public/index.html"
}

// BrowserSync Dev Server

function browsersync() {
  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: "public"
    }
  });
}

function simpleAppTask(cb) {
  cb()
}

// Sass Task
// function scssTask() {
//   return src( files.source.scssPath )
//     .pipe( sass() )
//     .pipe( dest( files.public.cssPath ));
// }

// JS Task
// function jsTask() {
//   return src( files.source.jsPath )
//     .pipe( concat("main.js") )
//     .pipe( uglify() )
//     .pipe( dest( files.public.jsPath ));
// }

// TS Task 
// function tsTask() {
//   return src( files.source.tsPath)
//     .pipe( webpackStream( webpackConfig ))
//     .pipe( uglify() )
//     .pipe( dest( files.public.jsPath ));
// }


// Watch Task
function watchTask() {
  // Init browser-sync
  browsersync();

  // Watch files
  watch( [ simpleApp.css, simpleApp.js, simpleApp.html ] ,
    parallel( simpleAppTask )).on('change', browserSync.reload);
}

// Default Task
// You can compile JS or TS 
exports.default = series(
  parallel( simpleAppTask ),
  watchTask
);