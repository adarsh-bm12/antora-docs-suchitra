const gulp = require('gulp');
const connect = require('gulp-connect');

// Task to serve files and enable live reload
gulp.task('serve', function () {
    connect.server({
        root: 'dist', // Make sure this folder exists and contains an index.html
        livereload: true,
        port: 8080
    });
});

// Task to reload on changes
gulp.task('reload', function () {
    return gulp.src('dist/**/*')
        .pipe(connect.reload());
});

// Watch for changes and reload
gulp.task('watch', function () {
    gulp.watch('src/**/*', gulp.series('reload')); // Change 'src' based on your folder structure
});

// Default task
gulp.task('default', gulp.parallel('serve', 'watch'));
