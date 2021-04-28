const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: devMode ? 'eval-source-map' : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: devMode ? `development title` : `production title`,
      template: `./src/index.html`,
      superValue: 'super value is here!',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? `style.css` : 'style.[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
