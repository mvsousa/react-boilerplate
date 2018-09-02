const path = require('path');
const UglifyJS = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV || 'local';
const plugins = [];
const webpack = require('webpack');

if (env != "local") {
	plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: true }));
	plugins.push(new webpack.EnvironmentPlugin(["API_ROOT_URL"]));
}

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/index'
	],
	devtool: 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'public/build'),
		filename: 'bundle.min.js',
		publicPath: '/public/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			include: path.join(__dirname, 'src')
		}]
	},
	plugins,
	watch: false,
	node: {
		fs: 'empty'
	}
};
