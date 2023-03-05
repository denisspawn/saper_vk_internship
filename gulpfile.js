'use strict';

import gulp             from 'gulp';
import browserSync      from 'browser-sync';

function browsersync() {
  browserSync.init({
    server: {baseDir: './'},
    notify: false,
    port: 3000,
  })
}

function startwatch() {
  gulp.watch(['scripts/**/*.js']).on('change', browserSync.reload);
  gulp.watch(['./**/*.css']).on('change', browserSync.reload);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
}

const dev = gulp.series(gulp.parallel(browsersync, startwatch));
gulp.task('default', dev);
