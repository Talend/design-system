const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
	plugins: [
		new VanillaExtractPlugin({
			identifiers: 'debug',
		}),
	],
	module: {
		rules: [
			{
				test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
				options: {
					mimetype: 'application/font-woff',
				},
			},
		],
	},
};
