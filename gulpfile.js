var gulp = require('gulp'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');

function
    error_handler(error) {
    console.log(error.toString());
    this.emit('end');
}

var CONFIG = {
    src: {
        sass: 'dev/sass/',
        css: 'dev/css/',
        img: 'dev/img/',
        js: 'dev/js/'
    },
    dest: {
        css: {
            concat_file: 'common.css',
            dir: 'css/'
        },
        img: 'img/',
        js: {
            concat_file: 'common.js',
            dir: 'js/'
        }
    }
};

gulp.task('css', ['sass'], function () {
    return gulp.src(CONFIG.src.css + '*.css')
        .pipe(concat(CONFIG.dest.css.concat_file))
        .on('error', error_handler)
        .pipe(autoprefixer())
        .on('error', error_handler)
        .pipe(minifyCSS())
        .on('error', error_handler)
        .pipe(gulp.dest(CONFIG.dest.css.dir));
});

gulp.task('sass', function () {
    return gulp.src(CONFIG.src.sass + '*.scss')
        .pipe(compass({
            css: CONFIG.src.css,
            sass: CONFIG.src.sass,
            image: CONFIG.src.img,
            relative: true,
            bundle_exec: true,
            sourcemap: true
        }))
        .on('error', error_handler);
});

gulp.task('images', function () {
    gulp.src(CONFIG.src.img + '**/*.*')
        .pipe(gulp.dest(CONFIG.dest.img));
});

gulp.task('libs', function () {
    return gulp.src(CONFIG.src.js + 'lib/*.*')
        .pipe(gulp.dest(CONFIG.dest.js.dir + 'lib'));
});

gulp.task('copyJS', ['js'], function () {
    gulp.src([
        CONFIG.src.js + '*.js'
    ])
});

gulp.task('js', function () {
    return gulp.src([
        CONFIG.src.js + '*.js'
    ])
        .pipe(jshint())
        .on('error', error_handler)
        .pipe(jshint.reporter(stylish))
        .on('error', error_handler)
        //.pipe(uglify())
        .pipe(concat(CONFIG.dest.js.concat_file))
        .pipe(gulp.dest(CONFIG.dest.js.dir));
});

gulp.task('default', function () {
    gulp.watch(CONFIG.src.sass + '**/*.scss', function () {
        gulp.run('css');
    });

    gulp.watch(CONFIG.src.img + '**/*.*', function () {
        gulp.run('images');
    });

    gulp.watch(CONFIG.src.js + '**/*.js', function () {
        gulp.run('copyJS');
    });

    gulp.watch(CONFIG.src.js + 'lib/*.js', function () {
        gulp.run('libs');
    });
});
