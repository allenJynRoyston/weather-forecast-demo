const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const Uglify = require("uglifyjs-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    helloworld: './src/components/helloworld/helloworld',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo'
    }),
    new FaviconsWebpackPlugin({
      logo: './favicon/favicon.png',
      prefix: 'icons/',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new LiveReloadPlugin(),
    new Uglify({
      sourceMap: true
    }),
    new webpack.SourceMapDevToolPlugin()
  ],
  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist/source')
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
    ],
    rules: [
      {
        test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
    ]
  }
};
