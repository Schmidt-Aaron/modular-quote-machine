/* gulpfile.js */
var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    babel        = require('gulp-babel');

// ordered array of javascript source files
var sourceJS = [
    'src/js/background.js',
    'src/js/greeting.js',
    'src/js/quote.js',
    'src/js/main.js'        // must come last!
];

// process stylesheets
gulp.task('styles', function () {
  gulp.src('src/css/**/*.scss')
    .pipe(concat('quote-app.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']  // config object
    }))
    .pipe(gulp.dest('dist/css'));
});

// process scripts
gulp.task('scripts', function () {
  gulp.src(sourceJS)       // <-- note new array
    .pipe(sourcemaps.init())
    .pipe(concat('quote-app.min.js'))
    .pipe(babel({
      presets: ['es2015']  // babel config object
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

// default task contains our watcher
gulp.task('default', ['styles'], function() {
  
    // watch sass source files and convert on changes
    gulp.watch('src/css/**/*.scss', ['styles']);
});