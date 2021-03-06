const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//此作用是为了每次打包的时候清空之前打包过的文件 npm i -D clean-webpack-plugin
//1,const CleanWebpackPlugin = require("clean-webpack-plugin");这样会报错,原因是对象,const { CleanWebpackPlugin } = require('clean-webpack-plugin'),或许是版本的原因吧
//2,网上new CleanWebpackPlugin(['dist'])是这种写法,结果报错,改成new CleanWebpackPlugin(),就ok了
const HtmlWebpackPlugin = require("html-webpack-plugin");
//此作用是为了自动生成打包后的入口html
//1,引用这个报错,原因webpack全局安装的,必须要在项目中重新安装跟全局版本一致的,
//2,webpack版本跟html-webpack-plugin的一致官网有介绍
const { VueLoaderPlugin } = require("vue-loader");
//解析vue的
//这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
module.exports = {
  mode: "development", //"production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash:8].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./dist/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // placeholder 占位符 [name] 源资源模块的名称
            // [ext] 源资源模块的后缀
            name: "[name]_[hash].[ext]",
            //打包后的存放位置
            outputPath: "./images",
            // 打包后文件的 url
            publicPath: "./images",
            // 小于 100 字节转成 base64 格式
            limit: 100,
          },
        },
        // loader: "url-loader?limit=100&name=img/[name].[hash:6].[ext]",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      //filename: "my.html",
      template: "./src/index.html",
    }),
  ],
};
