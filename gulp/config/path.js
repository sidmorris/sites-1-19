module.exports = {
	postPlugins: [
		// require('precss'),
		require('postcss-cssnext'),
		require('postcss-short'),
		require('postcss-easing-gradients'),
		require("css-mqpacker")({
			sort: true
		})
	],
	SASS: [
		'node_modules/bootstrap/scss',
		'node_modules/uikit/src/scss'
	],
	JS: [
		//	JQUERY
		// 'node_modules/jquery/dist/jquery.js'
		'node_modules/uikit/dist/js/uikit.js',
		'node_modules/uikit/dist/js/uikit-icons.js'
		// 'node_modules/svgxuse/svgxuse.js' //иконки для загрузки из внешнего источника
	],

	TASKS: [
		'./gulp/tasks/commonJs.js',
		'./gulp/tasks/appJs.js',
		'./gulp/tasks/copy.js',
		'./gulp/tasks/clear.js',
		'./gulp/tasks/styles.js',
		'./gulp/tasks/pug.js',
		'./gulp/tasks/serve.js',
		'./gulp/tasks/watch.js'
	],
	ROOT: 'build'
};
