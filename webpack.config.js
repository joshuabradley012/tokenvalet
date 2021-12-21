const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // Ensures files load correctly on all subpaths
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        include: path.resolve(__dirname, 'client'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.scss$/i,
        include: path.resolve(__dirname, 'client'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ],
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'client/assets/'),
      components: path.resolve(__dirname, 'client/components/'),
      hooks: path.resolve(__dirname, 'client/hooks/'),
      lib: path.resolve(__dirname, 'client/lib/'),
      pages: path.resolve(__dirname, 'client/pages/'),
      routes: path.resolve(__dirname, 'client/routes/'),
      scss: path.resolve(__dirname, 'client/scss/'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'tokenvalet',
      template: path.resolve(__dirname, 'client/index.html'),
    }),
  ],
};
