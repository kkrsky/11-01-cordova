const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const pages_cont = require('./router.js')
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
//※同一オブジェクトキーは、エラーを起こす可能性あり。
//入力したオブジェクトから自動でwebpackさせるファイルを設定する

/**
 *
 * @param {arry} ファイル名(XXX.html)一覧の配列
 * @return {arry} [[name,path],[...],[...]]の形式
 */
const pages_func = function(pages) {
  /**
   * 以下自動化、出力用配列を作成
   * [XX.html,AAA.html]
   * の形式
   */
  let container = []
  //ready
  container.push([pages.ready[1], ''])

  //transition.click
  let arry_tr = pages.transition.click
  for (arry of arry_tr) {
    let p2 = arry[1]
    let p2_path = arry[3]

    if (p2 === undefined) p2 = ''
    if (p2 !== '' && p2.split('.html').length > 1) {
      if (p2_path === undefined) p2_path = ''
      if (p2_path !== '' && p2_path.split('/').length > 1) {
        container.push([p2, p2_path])
      }
      container.push([p2, ''])
    }
  }
  //secondReady
  let key_arry = Object.keys(pages.secondReady)
  for (key of key_arry) {
    //console.log(pages.secondReady[key])
    let p = pages.secondReady[key][1]
    let p_path = pages.secondReady[key][2]
    //if(p===undefined)p=""

    if (p === undefined) p = ''
    if (p !== '' && p.split('.html').length > 1) {
      //空白＆.htmlが無いものは除く

      if (p_path === undefined) p_path = ''
      if (p_path !== '' && p_path.split('/').length > 1) {
        container.push([p, p_path])
      } else {
        container.push([p, ''])
      }
    }
  }

  //重複を除く

  let container_checked = container.filter(function(item, num, arry) {
    let max = arry.length
    let arry_1st = []
    for (let i = 0; i < max; i++) {
      arry_1st.push(arry[i][0])
    }

    return arry_1st.indexOf(item[0]) === num
  })

  /**
   * @arry {二次元配列}
   */
  function forPluginHtml(arry) {
    let name = ''
    let path = 'src/pages/' //main/main.html"
    let arry_out = []

    for (html of arry) {
      name = html[0].split('.')[0]
      if (html[1].split('/').length > 1) {
        path = html[1]
      } else {
        path = 'src/pages/' + name + '/' + html[0]
      }

      arry_out.push([name, path])
    }
    return arry_out
  }

  return forPluginHtml(container_checked)
}
const pages = pages_func(pages_cont)
//console.info(pages)
/*{
  index: 'src/index.html',
  test: 'src/pages/test/test.html',
  top: 'src/pages/top/top.html',
  ble: 'src/pages/ble/ble.html',
  main: 'src/pages/main/main.html',
}
*/

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

let plugins_insert = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
  new webpack.ProvidePlugin({
    iziToast: 'iziToast',
  }),
  new HtmlWebpackPlugin({
    template: 'src/index.html', //path
    filename: 'index.html', //name
  }),
]

var reset = '\u001b[0m'
var green = '\u001b[32m'
console.info('[pages]', green + 'index' + reset, ':' + 'src/index.html')
for (arry of pages) {
  console.info('[pages]', green + arry[0] + reset, ':' + arry[1])
  plugins_insert.push(
    new HtmlWebpackPlugin({
      template: arry[1], //path
      filename: arry[0] + '.html', //name
    })
  )
}
/*
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
*/
const config = {
  plugins: plugins_insert,
}

module.exports = config
