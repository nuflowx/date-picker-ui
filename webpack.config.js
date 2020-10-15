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
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
