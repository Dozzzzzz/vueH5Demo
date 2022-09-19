const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
const NODE_ENV = process.env.NODE_ENV;
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: `dist/${NODE_ENV}`,
  publicPath: './',
  indexPath: 'index.html',
  productionSourceMap: process.env.NODE_ENV === 'development',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }


  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  // devServer: {
  //   hot: true //配置热更新
  // },
  devServer: {
    hot: true, //配置热更新
    port: 8081, // 端口号
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://xxxx',
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
})


