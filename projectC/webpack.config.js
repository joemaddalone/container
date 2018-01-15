var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: './dist/projectc.min.js',
		libraryTarget: 'umd',
		library: 'ProjectC',
		umdNamedDefine: true
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
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false
			}
		})
	]
}