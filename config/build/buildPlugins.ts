import { BuildOptions } from './types/options';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { buildCommonPlugins } from './plugins/buildCommonPlugins';
import { buildDevPlugins } from './plugins/buildDevPlugins';
import { buildProdPlugins } from './plugins/buildProdPlugins';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = buildCommonPlugins(options);

  if (options.isDev) {
    plugins.push(...buildDevPlugins());
  } else {
    plugins.push(...buildProdPlugins());
  }

  if (options.bundleSize) plugins.push(new BundleAnalyzerPlugin());

  return plugins;
};
