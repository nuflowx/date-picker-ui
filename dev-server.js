import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.js';

new WebpackDevServer(webpack(config), {
  hot: true,
  stats: { colors: true },
  open: true,
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
