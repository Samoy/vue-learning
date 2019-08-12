const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
  //入口，表示要使用webpack打包哪个文件
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  //以下配置可以使用webpack-dev-server --open --port 3000 --contentBase src --hot命令，效果一样
  devServer: {
    open: true,//自动打开浏览器
    port: 3000, //设置启动时候的运行端口
    // contentBase: 'src',
    hot: true//启用热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //当使用了html-webpack-plugin，不再需要手动处理bundle.js的引用路径
    new htmlPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|less|scss)$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        //url-loader?limit=4000&name=[name].[ext]保持原名会覆盖同名图片，因此在前面放入hash值
        use: 'url-loader?limit=4000&name=[hash:8]-[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      },
      {
        test: /\.js/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
