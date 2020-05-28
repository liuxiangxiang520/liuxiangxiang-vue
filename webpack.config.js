const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //打包CSS vue-style-loader是style-loader的一个增强版本
      {
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ]//使用loader的时候有顺序，从后往前
      },
       //打包图片，内部会使用到file-loader
       {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',//内部会使用到file-loader
                    options: {
                        limit: 8192, 
                        //如果图片小于这个值，会被base64编码为一个字符串，提高效率，减少请求
                        name:'[hash:8].[ext]' //打包后的图片名字，截取哈希值的前八位就ok
                    }
                }
            ]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'./src/public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyPlugin([ //为了把public下除了index.html文件外的其余所有，给dist目录下拷贝一份
      {
          from:path.resolve(__dirname,'src/public'),
          to:path.resolve(__dirname,'dist'),
          ignore:['index.html']
      }
  ]),
  ],
  mode:'development',

  devServer: {
      port:8020,
      open:true,
      quiet:true,
  },
  devtool:"cheap-module-eval-source-map",

  resolve:{
      extensions: [".js",".json",".vue"],//解决省略后缀问题
      alias: {
        '@':path.resolve(__dirname,'src')
      }
  }
};