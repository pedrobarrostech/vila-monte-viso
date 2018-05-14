const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: './app.js'
  },
  devServer: {
    port: 3000,
    contentBase: './public',
    compress: true,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '/node_modules'),
      jquery: 'modules/jquery/dist/jquery.min.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('app.css'),
    new CopyWebpackPlugin([
      // {output}/file.txt
      { from: './src/template/images/icons/favicon.ico', to: './public/icons/favicon.ico' }
    ])
  ],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg|ico|json|xml)$/,
      loader: 'url-loader?limit=100000'
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
      exclude: ['node_modules']
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?importLoaders=1'],
      exclude: ['node_modules']
    }
    ]
  }
}
