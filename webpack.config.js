const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const VERSION = require('./package.json').version;
const COMPILE_DATE = new Date().toISOString();

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  const config = {
    mode: isProduction ? 'production' : 'development',
    entry: {
      main: './src/web/index.js',
    },
    output: {
      path: path.resolve(__dirname, isProduction ? 'build/prod' : 'build/dev'),
      filename: isProduction ? 'assets/[name].[contenthash].js' : 'assets/[name].js',
      chunkFilename: isProduction ? 'assets/[name].[contenthash].chunk.js' : 'assets/[name].chunk.js',
      publicPath: '/',
      globalObject: 'this',
      clean: true
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
            compress: {
              drop_console: isProduction,
            },
          },
          extractComments: false,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    performance: {
      maxEntrypointSize: 2048000,
      maxAssetSize: 2048000,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[name].[hash][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name].[hash][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.mjs', '.json', '.wasm'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src/core'),
        '@web': path.resolve(__dirname, 'src/web'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        COMPILE_TIME: JSON.stringify(COMPILE_DATE),
        PKG_VERSION: JSON.stringify(VERSION),
      }),
      new HtmlWebpackPlugin({
        title: 'Saleh eChef',
        template: './src/web/html/index.html',
        filename: 'index.html',
        favicon: './src/web/static/favicon.ico',
        meta: {
          'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
          'description': 'The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis',
        },
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, isProduction ? 'build/prod' : 'build/dev'),
      },
      compress: true,
      port: 8080,
      hot: true,
      open: true,
      client: {
        overlay: true,
        progress: true,
      },
      historyApiFallback: true,
    },
  };
  
  if (isProduction) {
    // Production-only plugins
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'assets/[name].[contenthash].css',
        chunkFilename: 'assets/[id].[contenthash].css',
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/web/static', to: 'static' },
        ],
      }),
      new webpack.BannerPlugin({
        banner: 
`Saleh eChef v${VERSION}
https://github.com/gchq/Saleh eChef
Licensed under the Apache License, Version 2.0 (the "License");
Build date: ${COMPILE_DATE}`,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'report.html',
        generateStatsFile: true,
      })
    );
  } else {
    // Development-only plugins
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }
  
  return config;
};
