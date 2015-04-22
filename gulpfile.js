var gulp = require("gulp");
var sourceMaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");

gulp.task("build", function () {
	return gulp.src("app.js") //get all js files under the src
		.pipe(sourceMaps.init()) //initialize source mapping
		.pipe(babel()) //transpile
		.pipe(sourceMaps.write(".")) //write source maps
		.pipe(gulp.dest("dist")); //pipe to the destination folder
});

gulp.task('default', ['build']);