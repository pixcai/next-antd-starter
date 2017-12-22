const path = require('path')
const glob = require('glob')
const analyzer = require('webpack-bundle-analyzer')

const styleLoaders = ['babel-loader', 'raw-loader', 'postcss-loader']

module.exports = {
  distDir: 'build',
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(css|less|scss)$/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]'
      }
    }, {
      test: /\.css$/,
      use: styleLoaders
    }, {
      test: /\.less$/,
      use: styleLoaders.concat({
        loader: 'less-loader',
        options: {
          paths: [
            path.resolve(__dirname, './assets/css'),
            path.resolve(__dirname, './node_modules')
          ]
          .map(dir => glob.sync(dir))
          .reduce((includePaths, dir) => includePaths.concat(dir))
        }
      })
    }, {
      test: /\.scss$/,
      use: styleLoaders.concat({
        loader: 'sass-loader',
        options: {
          includePaths: [
            path.resolve(__dirname, './assets/css'),
            path.resolve(__dirname, './node_modules')
          ]
          .map(dir => glob.sync(dir))
          .reduce((includePaths, dir) => includePaths.concat(dir))
        }
      })
    })
    if (dev) {
			// See https://github.com/webpack-contrib/webpack-bundle-analyzer
      config.plugins.push(new analyzer.BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        logLevel: 'info',
        openAnalyzer: false
      }))
    }

    return config
  }
}

