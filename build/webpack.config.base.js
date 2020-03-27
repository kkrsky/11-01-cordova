const path = require('path')
const internalIp = require('internal-ip')

const config = {
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
      root: path.resolve(__dirname, '../'),
    },
  },

  output: {
    path: path.resolve(__dirname, '../www'),
    filename: 'index.js',
  },

  devServer: {
    //contentBase: '/jQuery_test/dist',
    watchContentBase: true,
    contentBase: path.resolve(__dirname, '../www'), // HTML等コンテンツのルートディレクトリ
    open: true,
    //host: internalIp.v4.sync(), // <- IPアドレス自動割り当て
    //port: 8080,
  },
}

module.exports = config
