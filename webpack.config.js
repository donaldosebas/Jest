const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    stats: 'minimal',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: () => `
        <html>
          <head>
            <title>React app</title>
          </head>
          <body>
            <div id="root"></div>
            <script src="./bundle.js"></script>
          </body>
        </html>
      `,
    }),
  ],
}
