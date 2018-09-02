const mmq          = require("gulp-merge-media-queries");
const gulp         = require("gulp");
const clean        = require("gulp-clean-css");
const rename       = require("gulp-rename");
const stylus       = require("gulp-stylus");
const postcss      = require("gulp-postcss");
const plumber      = require("gulp-plumber");
const sourcemaps   = require("gulp-sourcemaps");
const autoprefixer = require('autoprefixer');

const env = process.env.NODE_ENV || 'local';

gulp.task("default", ["style"], () => {
	// if(env == "local") gulp.watch("stylesheets/**/*", ["style"]);
});

gulp.task("style", () => {
	return gulp.src("stylesheets/index.styl")
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(stylus({compress: true, "include css": true}))
	.pipe(postcss([ autoprefixer() ]))
	.pipe(mmq())
	.pipe(clean())
	.pipe(rename("bundle.min.css"))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("public/build"));
});
