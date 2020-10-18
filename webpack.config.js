import path from 'path';
import BabelPresetEnv from '@babel/preset-env';
import BabelPresetReact from '@babel/preset-react';

const __dirname = path.resolve();
const targets = { browsers: ['> 1%', 'last 2 versions'] };

export default {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './dist/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [BabelPresetEnv, { targets }],
            [BabelPresetReact],
          ],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    }, {
      test: /\.(sc|c|sa)ss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2,
        },
      },
      // "scoped" needs to be _after_ `css-loader` and _before_ any `pre-processing loader`
      { loader: 'scoped-css-loader' },
      { loader: 'sass-loader' },
  ],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
