const path = require('path');
const analyzer = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	webpack: (config, { dev }) => {
		config.module.rules.push({
			test: /\.(png|jpg|git|eot|ttf|svg|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 8192
				}
			}
		}, {
			test: /\.(css|less)$/,
			use: [{
				loader: 'css-loader',
				options: {
					modules: true,
					importLoaders: 1,
					localIdentName: '[name]-[local]_[hash:base64:5]',
					// If you are having trouble with urls not resolving
					// add this setting
					// See https://github.com/webpack-contrib/css-loader#url
					// url: false,
					minimize: true,
					sourceMap: true
				}
			}, {
				loader: 'less-loader',
				options: {
					sourceMap: true
				}
			}]
		});
		// See https://github.com/webpack-contrib/extract-text-webpack-plugin
		config.plugins.push(new ExtractTextPlugin({
			filename: path.join(__dirname, 'static/css/style.css'),
			disable: false,
			allChunks: true
		}));
		if (process.env.ANALYZE) {
			// See https://github.com/webpack-contrib/webpack-bundle-analyzer
			config.plugins.push(new analyzer.BundleAnalyzerPlugin({
				analyzerMode: 'server',
				analyzerPort: 8888,
				logLevel: 'info',
				openAnalyzer: false
			}));
		}

		return config;
	}
}
