const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'// 引入打包的文件时路径以/开头
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
      proxy: {
        '/api': {//这个/api其实是为了告诉代理，以后什么样的请求，需要给我代理转发
            target: 'http://localhost:4000',
            //转发的目标地址，不需要路径，因为转发的时候会把发送请求的路径默认频道目标后面
            //我们发http://localhost:8080/api/users/info
            //最终转发的目标会变为http://localhost:4000/api/users/info

            pathRewrite: {'^/api' : ''},
            //真正的目标地址应该是http://localhost:4000/users/info
            //这一行在干的活就是把/api去掉，不就是真正的目标地址？

            changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
        }
    },
    historyApiFallback: true,// 任意的 404 响应都被替代为 index.html 备胎
  },
  devtool:"cheap-module-eval-source-map",

  resolve:{
      extensions: [".js",".json",".vue"],//解决省略后缀问题
      alias: {
        '@':path.resolve(__dirname,'src')
      }
  }
};