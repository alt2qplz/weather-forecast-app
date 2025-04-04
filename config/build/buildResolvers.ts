import { BuildOptions } from './types/options';
import webpack from 'webpack';

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {}
  };
};
