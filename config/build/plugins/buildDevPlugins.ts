import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildDevPlugins(): webpack.WebpackPluginInstance[] {
  return [
    new ReactRefreshWebpackPlugin({
      overlay: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ];
}