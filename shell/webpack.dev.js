const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: 'source-map',
	entry: {
		shell: './src/index.js',
		vendor: ['react', 'react-dom', 'react-router-dom']
	},
	output: {
		path: __dirname + './dev/',
		filename: '[name].js'
	},
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, "dev"),
		port: 8888
	},
	externals: {
		ProjectA: 'ProjectA',
		ProjectB: 'ProjectB',
		ProjectC: 'ProjectC'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
}