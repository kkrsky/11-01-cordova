/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import 'src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrapのスタイルシート側の機能を読み込む
import 'bootstrap' // BootstrapのJavaScript側の機能を読み込む

//import app_ble from 'src/js/_back/bluetooth.js'
import app_controller from 'src/js/controller.js'
import view from 'src/js/view.js'
//import './js/sub.js'

console.info('HTML組込み完了 from index.js') //webpackでhtmlに組み込まれたときに表示される

var app = {
  // Application Constructor
  initialize: function() {
    console.log('start initialize()')

    document.addEventListener('DOMContentLoaded', function() {
      console.log('listen DOMContentLoaded')
      //DOMに登録しておく
      //app_ble.init()
      app_controller.init()

      /**
       *
       * 仮想 deviceready
       *
       */
      //window.alert('virtual deviceready')
      view.toast_info('virtual cordova ready')
      setTimeout(() => {
        // イベントを作る
        const e = document.createEvent('Event')
        // deviceready イベントを初期化する
        e.initEvent('deviceready', true, false)
        // イベントを発火させる
        document.dispatchEvent(e)
      }, 50)
      /**
       *
       * 仮想 deviceready
       *
       */
    })

    document.addEventListener('load', function() {
      console.log('listen load')
    })

    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    )
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    console.log('start onDviceReady() ')
    this.receivedEvent('deviceready')
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log('start receivedEvent(id): ' + id)

    //app_ble.init()
    //app_ble.test()

    //もう一度devicereadyを発火(本来は常に発火しているので)
    //$(document).trigger('deviceready')
    console.log('fin Received Event: ' + id)
  },
}
app.initialize()
