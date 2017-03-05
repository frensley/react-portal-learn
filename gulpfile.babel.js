'use strict';

//gulp.babel.js - the .babel is necessary to engage node's hooks for running preprocessors

import gulp from 'gulp';
import wp from 'webpack'; //we use wp here to pass in the version of wp we want - not relying on webpack-stream to resolve it for us
import webpack from 'webpack-stream';
import seq  from 'run-sequence'
import gulp_plugin_loader from 'gulp-load-plugins';
import named from 'vinyl-named';
import wp_config from './webpack.config'

let plugins = gulp_plugin_loader({
   rename: {
       'gulp-rimraf' : 'rm'
   }
});

let src_paths = {
    static: ['src/*.html'],
    entry: 'src/js/app.js'
};

let build_output = "build_output";

gulp.task('clean', function() {
    return gulp.src(build_output + '/*').pipe(plugins.rm());
});

gulp.task('bundle', () => {
    return gulp.src( src_paths.entry )
        .pipe( named() )
        .pipe( webpack( wp_config, wp ) )
        .pipe( gulp.dest( build_output ) );
});

gulp.task('copy src', () => {
    return gulp.src( src_paths.static )
        .pipe( gulp.dest( build_output ) );
});

gulp.task('build', (cb) => {
   seq('copy src','bundle',cb);
});

gulp.task('watch', () => {
   return gulp.src( src_paths.entry )
       .pipe( named() )
       .pipe( webpack( Object.assign(wp_config, {watch: true}), wp ) )
       .on('error', function handleError() {
           this.emit('end'); // Recover from errors
       })
       .pipe(gulp.dest(build_output));
});

gulp.task('default', ['build']);

