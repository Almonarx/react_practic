const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const textPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new HtmlPlugin({
    template: 'index.html'
  }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
  new webpack.HotModuleReplacementPlugin(),
  new textPlugin({
    filename: 'main.css',
    allChunks: true
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    PropTypes: 'prop-types'
  })
];

module.exports = {
  entry: {
    main: './app.js',
    vendor: ['react', 'react-dom']
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },

      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      },

      {
        test: /\.s?css$/,
        use: textPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })

      }
    ],
  },

  plugins,

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9000
  }
};
