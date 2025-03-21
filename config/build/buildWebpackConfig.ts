import { BuildOptions } from './types/options';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { buildOptimization } from './buildOptimization';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    optimization: buildOptimization(options),
    output: {
      filename: 'js/[name].[contenthash].js',
      path: options.paths.build,
      clean: true,
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined
  };
};
