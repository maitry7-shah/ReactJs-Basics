var webpack = require("webpack");
var path = require('path');
var HTMLWebpackPlugin=require('html-webpack-plugin');
var HTMLWebpackPluginConfig=new HTMLWebpackPlugin({
	template:'index.html',
	filename:'index.html',
	inject:'body'
});
module.exports = {
	entry: {
		app: './src/App.js'
	},
	output: {
		filename:"build/bundle.js",
        sourceMapFilename: "build/bundle.map"
	},
	plugins: [HTMLWebpackPluginConfig],
    devtool: '#source-map',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	},
	plugins:[HTMLWebpackPluginConfig]

}
