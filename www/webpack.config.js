const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const telecall = require('telecall/lib/webpack-rule')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack/index.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      telecall(),
    ],
  },
  plugins: [new HtmlWebpackPlugin({ filename: 'webpack/index.html' })],
}
