import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BuildOptions } from '../types/options';
import { EsbuildPlugin } from 'esbuild-loader';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function buildCommonPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new ForkTsCheckerWebpackPlugin(),
    new EsbuildPlugin({
      target: 'es2015'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
      __API__: JSON.stringify(options.apiUrl),
      __PROJECT__: JSON.stringify(options.project),
    }),
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: options.paths.favicon
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: options.paths.locales, to: options.paths.buildLocales },
      ]
    })
  ];
}