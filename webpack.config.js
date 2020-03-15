const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = env => {
  const basePluginList = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin([{ from: 'public/*', flatten: true }]),
    new VueLoaderPlugin(),
  ]

  const prodPluginList = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ]

  return {
    mode: env.prod ? 'production' : 'development',
    entry: './src/main.js',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: env.prod ? false : 'cheap-module-eval-source-map',
    devServer: {
      historyApiFallback: true,
    },
    stats: env.prod
      ? {
          children: false,
          modules: false,
        }
      : 'errors-warnings',
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      minimizer: [new UglifyJsPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: env.prod ? basePluginList : basePluginList.concat(prodPluginList),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.scss$/,
          use: [
            process.env.NODE_ENV !== 'production'
              ? 'vue-style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                prependData: `@import "src/styles/variables.scss";`,
              },
            },
          ],
        },
      ],
    },
  }
}
