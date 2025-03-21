import webpack from 'webpack';
import { BuildOptions } from './types/options';

export const buildOptimization = (options: BuildOptions): webpack.Configuration['optimization'] => {
  return {
    minimize: options.isDev,
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
    usedExports: true
  };
};