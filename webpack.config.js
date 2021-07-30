const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav|mpe?g)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
