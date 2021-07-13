// CSSコードの圧縮
var cleanCSS = require('gulp-clean-css');
var rename   = require("gulp-rename");

gulp.task('mincss', function() {
	return gulp.src("css/*.css")
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css/'));
});

// 画像の圧縮
var imagemin = require("gulp-imagemin");
var imageminPngquant = require("imagemin-pngquant");
var imageminMozjpeg = require("imagemin-mozjpeg");

var imageminOption = [
	imageminPngquant({ quality: [0.65, 0.8] }),
	imageminMozjpeg({ quality: 85 }),
	imagemin.gifsicle({
		interlaced: false,
		optimizationLevel: 1,
		colors: 256
	}),
	imagemin.mozjpeg(),
	imagemin.optipng(),
	imagemin.svgo()
];

gulp.task( 'imagemin', function() {
	return gulp
		.src( './img/base/*.{png,jpg,gif,svg}' )
		.pipe( imagemin( imageminOption ) )
		.pipe( gulp.dest( './img' ) );
});
