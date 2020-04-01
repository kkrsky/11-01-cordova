const pages = {
  ready: ['#deviceready', 'layout.html'], //レイアウト用のhtmlを読み込む
  secondReady: [
    //レイアウトに対する初期ページを読み込む
    ['#header', ''],
    ['#main', 'main.html'],
    ['#footer', ''],
  ],
  transition: {
    click: [
      ['#main', 'main.html', '#tr_to_main'], //main表示
      ['#main', 'test.html', '#tr_to_test'], //test表示
      ['#main', 'ble.html', '#tr_to_ble_test', 'src/pages/ble/ble_test.html'],
    ],
  },
}
module.exports = pages
