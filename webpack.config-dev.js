const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
console.log(process.env.NODE_ENV)
module.exports = {
  mode: "development", // webpack 使用相应模式的内置优化
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      
      // 应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", {
            loader: 'css-loader',
            options: {
              // 开启 CSS Modules
              modules: true,
            }
          }],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"), // html 模板地址
      filename: "index.html", // 打包后输出的文件名
      title: "手动搭建 Vue 项目",
    }),
    new VueLoaderPlugin(),
  ],
};
