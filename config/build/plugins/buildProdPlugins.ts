import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';

export function buildProdPlugins():  webpack.WebpackPluginInstance[] {
  return [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 8192,
      minRatio: 0.8
    })
  ];
}