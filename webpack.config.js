var path = require("path");

module.exports = {
  entry: './app/src/js/main.js.es6.jsx',
  context: __dirname + '/', // defaults to __dirname
  resolve: {
    root: path.join(__dirname),
    alias: {
      assets: 'app/src/assets'
    }
  },
  output: {
    path: './public/build/',
    publicPath: './build/', // correlates with public path in server.js
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js.es6/, loader: 'traceur' },
      { test: /\.js.es6.jsx$/, loader: 'jsx-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      // stolen from https://github.com/petehunt/webpack-howto
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=8192' }
    ]
  }
};
