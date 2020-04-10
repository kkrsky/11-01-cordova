const pages = {
  ready: ['#deviceready', 'layout.html'], //レイアウト用のhtmlを読み込む
  secondReady: [
    //レイアウトに対する初期ページを読み込む
    ['#header', '_header.html'],
    ['#main', 'test.html'],
    ['#footer', '_footer.html'],
  ],
  transition: {
    click: [
      ['#main', '_main.html', '#tr_to_main'], //main表示
      ['#main', 'test.html', '#tr_to_test'], //test表示
      [
        '#main',
        'ble_test.html',
        '#tr_to_ble_test',
        'src/pages/ble/ble_test.html',
      ],
      ['#main', 'diagnostic.html', '#tr_to_diagnostic'],
      //header
      ['#main', 'status.html', '#tr_header_status'],
      ['#main', 'history.html', '#tr_header_history'],
      ['#main', 'profile.html', '#tr_header_profile'],
      //footer
      ['#main', '_main.html', '#tr_footer_home'],
      ['#main', 'diagnostic.html', '#tr_footer_setting'],
      ['#main', 'login.html', '#tr_footer_bike'],
      ['#main', 'map.html', '#tr_footer_map'],
    ],
  },
}
module.exports = pages

/*
"[android] \n",
"[ios] \n",
"[android/ios] \n",


"[registerNFCStateChangeHandler]: \n","[android] \n",

"[getMotionAuthorizationStatus]: \n","[ios] \n",


"[requestCalendarAuthorization]: \n","[android/ios] \n",

if (device.platform.toLowerCase() === 'android/ios') {
}

if (device.platform.toLowerCase() === 'android') {
} else if (device.platform.toLowerCase() === 'ios') {
} else {
}

*/
