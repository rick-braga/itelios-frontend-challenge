// gulp
var gulp = require('gulp');

// plugins
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


/*
  -- FUNÇÕES --
  gulp.task - Define a task
  gullp.src - Aponta para arquivos fontes
  gulp.dest - Aponta para a pasta de saída
  gulp.watch - Observa mudanças feitas em pastas e arquivos
*/

// *** tasks *** //

//Compilar Sass
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

//Observa as mudanças no Sass
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.scss', ['sass']);
});

//Limpa conteúdo da pasta dist
gulp.task('clean', function() {
    gulp.src('dist/*')
      .pipe(clean({force: true}));
});

//Minificando CSS
gulp.task('minify-css', () => {
  return gulp.src(['./src/css/*.css', '!./src/bower_components/**'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

//Minificando JS
gulp.task('compress', function () {
  return gulp.src(['./src/js/*.js', '!./src/bower_components/**'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//Fazer cópia dos arquivos HTML da past src para dist
gulp.task('copy-html-files', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('dist'));
});

//Alterar arquivos e ao salvar o navegador dá reload automaticamente
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });
  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'src'}, reload);
});

//Verifica se suas dependências Bower estão desatualizadas.
gulp.task('copy-bower-components', function () {
  gulp.src('./src/bower_components/**')
    .pipe(gulp.dest('dist/bower_components/'));
});

// *** default task *** //
gulp.task('default', function() {
  runSequence(
    ['sass','sass:watch', 'browser-sync']
  );
});

// *** build task *** //
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['sass', 'minify-css', 'compress', 'copy-html-files', 'copy-bower-components']
  );
});
