import webpack from 'webpack';
import { BuildOptions } from './types/options';
import { buildCssLoader } from './loaders/css/buildCssLoader';
import { buildSvgLoader } from './loaders/svg/buildSvgLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader: webpack.RuleSetRule = buildSvgLoader();
  const cssLoader = buildCssLoader(options.isDev);

  const imgLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'img/[name][ext]'
    }
  };

  const fontsLoader = {
    test: /\.(woff|woff2)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name][ext]'
    }
  };

  const esbuildLoader = {
    test: /\.(js|tsx?)$/,
    exclude: /node_modules/,
    loader: 'esbuild-loader',
    options: {
      target: 'es2015'
    }
  };

  return [
    imgLoader,
    fontsLoader,
    svgLoader,
    esbuildLoader,
    cssLoader
  ];
};
