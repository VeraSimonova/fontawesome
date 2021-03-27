const { src, dest, gulp, parallel, series} = require('gulp');

function fontawesomeFontsIco(){
    return src('./node_modules/@fortawesome/fontawesome-free/webfonts/*.*')
        .pipe(dest("./dest/webfonts"));
}

function fontawesomeIco(){
    return src('./node_modules/@fortawesome/fontawesome-free/css/all.min.css')
        .pipe(dest("./dest/css"));
}

exports.font = fontawesomeFontsIco;
exports.ico = fontawesomeIco;
