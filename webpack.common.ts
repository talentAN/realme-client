import path from 'path';
import webpack, {HashedModuleIdsPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
const config: webpack.Configuration = {
  entry: {
    main: path.resolve(__dirname, 'src/index.tsx'),
    LoginPage: path.resolve(__dirname, 'src/pages/Login.tsx'),
    RegisterPage: path.resolve(__dirname, 'src/pages/Register.tsx'),
    LandingPage: path.resolve(__dirname, 'src/pages/containers/Landing.tsx'),
    DraftsPage: path.resolve(__dirname, 'src/pages/Drafts.tsx'),
    DraftEditorPage: path.resolve(__dirname, 'src/pages/DraftEditor.tsx'),
    AboutPage: path.resolve(__dirname, 'src/pages/About.tsx'),
  },
  module: {
    rules: [
      // tsx
      {
        test: /\.tsx?$/,
        loader: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      // jsx
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // scss
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      //svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  externals: {
    // 这里externals告诉webpack那些资源从哪里寻找。
    // 该对象的键表示 require 或者 import 时候的字符串
    // 值表示的当前环境下的变量，比如引入React之后，React被作为全局对象，webpack就回去寻找React对象。
    // 如果其中有一个找不到，打包就会失败。
    // MMP 不work啊
    // react: "React",
    // "react-router-dom": "ReactDOM",
    // "react-dom": "ReactDOM",
    // "@ckeditor": "ClassicEditor",
  },
  // compiler_vendors 怎么配置？
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'liflib',
      template: 'public/index.html',
    }),
    new BundleAnalyzerPlugin(),
    new HashedModuleIdsPlugin(),
  ],
};

export default config;
