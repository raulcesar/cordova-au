import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';

// import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {
  return gulp.src(project.cssProcessor.source)
//   .pipe(changedInPlace({firstPass: true}))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(build.bundle());
}
