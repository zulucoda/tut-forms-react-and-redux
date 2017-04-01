var path = require('path');
var webpack = require('webpack');

module.exports = {

	context: __dirname, //current folder for ref to other parts
	entry: {
		demo: './demo.js' //entry point for build script
	},
	
	output: {
		path: path.resolve('./dist'),
		filename: 'demo.js'
	},
	
	module: {
		loaders: [
		{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}
		]
	}

};
