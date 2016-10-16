const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './app/app.js'
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/dist",
		publicPath: "/dist/"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel",
			query: {
        presets: ['es2015', 'react']
      }
		}, {
			test: /\.html$/,
			loader: "file?name=[name].[ext]",
		} ],
	},

	plugins:[
		new HtmlWebpackPlugin({
			template:'./app/app.ejs'
		})
	]
}
