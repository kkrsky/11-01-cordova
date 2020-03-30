const pages = {
  ready: ['#deviceready', 'top.html'], //レイアウト用のhtmlを読み込む
  secondReady: [
    //レイアウトに対する初期ページを読み込む
    ['#header', ''],
    ['#main', 'main.html'],
    ['#footer', ''],
  ],
  transition: {
    click: [
      ['#main', 'main.html', '#tr_to_main', 'src/pages/main/main.html'], //main表示
      ['#main', 'test.html', '#tr_to_test'], //test表示
      ['#footer', 'ble.html', '#ttt'],
      ['#header', 'test.html', '#ttt2'],
    ],
  },
}
module.exports = pages
