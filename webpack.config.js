const path = require('path')
const { CopyWebpackPlugin } = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './node_modules/jest-worker/build'),
    filename: 'bundle.js',
    clean: true
  },
  devtool: 'source-map',
  plugins: [new CopyWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
}