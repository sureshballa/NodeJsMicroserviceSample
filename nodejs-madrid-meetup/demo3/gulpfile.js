const { src, dest, watch, series } = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

function build(cb) {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  tsResult.js.pipe(dest('dist'));
  cb();
}

function watchFiles(cb) {
  watch('src/**/*.ts');
  cb();
}

function assets(cb) {
  src(JSON_FILES).pipe(dest('dist'));
  cb();
}


exports.build = build;
exports.assets = assets;
exports.watchFiles = series(build, watchFiles);
exports.default = series(build, watchFiles, assets);