import gulp from 'gulp';
import project from '../aurelia.json';

import merge from 'merge-stream';
import path from 'path';

export default function prepareMaterialize() {
    let source = project.paths.materialize;
    let sourceStyle = path.join(source, 'css');
    let sourceFonts = path.join(source, 'fonts/roboto');

    let taskCss = gulp.src(path.join(sourceStyle, 'materialize.min.css'), { base: sourceStyle })
        .pipe(gulp.dest('styles'));

    let taskFonts = gulp.src(path.join(sourceFonts, '*'), { base: sourceFonts })
        .pipe(gulp.dest('fonts/roboto'));

    return merge(taskCss, taskFonts);
}

