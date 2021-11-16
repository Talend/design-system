module.exports = {
	entry: {
		themes: './src/themes/themes.scss',
	},
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
