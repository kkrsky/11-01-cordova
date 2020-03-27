const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
//※同一オブジェクトキーは、エラーを起こす可能性あり。
//入力したオブジェクトから自動でwebpackさせるファイルを設定する

const pages = {
  top: 'src/index.html',
  top1: 'src/pages/p001/p001.html',
  top2: 'src/pages/p001/p0011.html',
}

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

let plugins_insert = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
]
var reset = '\u001b[0m'
var green = '\u001b[32m'

for (key in pages) {
  if (pages.hasOwnProperty(key)) {
    console.info('[pages]', green + key + reset, ':' + pages[key])
    plugins_insert.push(
      new HtmlWebpackPlugin({
        template: pages[key],
        filename: pages[key].split('/').splice(-1)[0],
      })
    )
  }
}
const config = {
  plugins: plugins_insert,
}

module.exports = config
