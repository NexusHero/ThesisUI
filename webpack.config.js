var debug = process.argv.indexOf('-p') == -1
console.warn(debug)
var webpack = require('webpack')
var path = require('path')

// https://dev.to/alflennik/the-fine-art-of-the-webpack-2-config

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-assign']
        }
      },
      {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    },
    {
      test: /\.jpg$/,
      loader: "file-loader"
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }
    ]
  },
  output: {
    path: __dirname + "/dist/scripts/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                booleans: true,
                cascade: true,
                conditionals: true,
                dead_code: true,
                drop_console: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                sequences: true,
                screw_ie8: true,
                unused: true
            },
            output: {
              comments: false
            }
        })
  ]
}
