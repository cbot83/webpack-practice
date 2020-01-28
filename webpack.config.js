const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
    
module.exports = {
    mode: 'development',
    entry: ['./src/react_1.jsx', './src/react_2.jsx'],
    resolve: {
      extensions: ['.jsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
    
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        })
    ],
    devtool: 'source-map'
};