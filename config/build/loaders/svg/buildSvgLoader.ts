import webpack from 'webpack';

export function buildSvgLoader(): webpack.RuleSetRule {
  return {
    test: /\.svg$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      }
    ]
  };
}