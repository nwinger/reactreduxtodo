var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname),
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devTool: '#source-map',
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      include: path.join(__dirname, '/src'),
      exclude: /node_modules/|/index\.js$/
    }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
