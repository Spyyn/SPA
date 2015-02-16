module.exports = {
  entry: './main.js',
  output: {
    path: './build',
    publicPath: './build', // urls for images?
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.es6.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' } // stolen from https://github.com/petehunt/webpack-howto
    ]
  }
};
