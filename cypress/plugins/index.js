const path = require('path');

module.exports = (on, config) => {
	if (config.testingType === 'component') {
		const { startDevServer } = require('@cypress/webpack-dev-server');

		const webpackConfig = {
			entry: './src/index.js',
			module: {
				rules: [
					{
						test: /\.css$/i,
						use: ['style-loader', 'css-loader'],
					},
					{
						test: /\.js|\.jsx|\.ts|\.tsx$/,
						use: {
							loader: 'ts-loader',
						},
						exclude: /node_modules/,
					},
				],
			},
			resolve: {
				extensions: ['.tsx', '.ts', '.js'],
			},
			output: {
				filename: 'bundle.js',
				path: path.resolve(__dirname, 'dist'),
			},
		};

		on('dev-server:start', options => startDevServer({ options, webpackConfig }));
	}

	return config;
};
