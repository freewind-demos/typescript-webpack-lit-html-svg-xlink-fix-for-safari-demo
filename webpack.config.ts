import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import express from 'express'

const config: Configuration & { devServer: any } = {
  mode: "development",
  entry: './src/entry.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }) as any
  ],
  devServer: {
    contentBase: './staticFiles/', // TODO: 没搞清楚具体作用
    watchContentBase: true,
    before: (app: any) => {
      app.use('/static', express.static('./staticFiles/'));
    }
  },
}

export default config;
