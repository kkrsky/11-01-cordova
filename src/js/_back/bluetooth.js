window.alert('load bluettoth.js')

// /**
//  * !*****************************
//  *
//  *
//  *
//  *
//  *
// !*****************************!
// !*** 汎関数 ***!
// !*****************************
//  *
//  *
//  *
//  *
//  *
//  *!*****************************
//  */

function success(e, called, comment, alert) {
  e = stringify(e)
  //if not called, undefined
  let insert = ''
  if (comment === undefined || comment === '-') {
    insert = 'success: ' + e + '\nfrom: ' + called
  } else {
    insert = 'success: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
  }

  console.log(insert)
  if (alert !== undefined) window.alert(insert)
  return undefined
}
function failed(e, called, comment, alert) {
  e = stringify(e)
  //if not called, undefined
  let insert = ''
  if (comment === undefined || comment === '-')
    insert = 'error: ' + e + '\nfrom: ' + called
  else insert = 'error: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
  console.log(insert)
  if (alert !== undefined) window.alert(insert)
}

function stringify(e) {
  if (typeof e !== 'string') {
    return JSON.stringify(e)
  }
  return e
}
function parse(e) {
  if (typeof e !== 'string') {
    return e
  }
  return JSON.parse(e)
}

//app_bleオブジェクトを取得
let that = null
function init_that(e) {
  that = e
  console.log('[init] that: ', that)
}

let app_ble = {
  data: {
    /**
   * !*****************************
   * 
   * 
   * 
   * 
   *
  !*****************************!
  !*** 変数 ***!
  !*****************************
   * 
   * 
   * 
   * 
   * 
   *!*****************************
   */
    KEY_DEVICE_ID: 'nsBleConnectedData',
  },
  test: function() {
    /**
   * !*****************************
   * 
   * 
   * 
   * 
   *
  !*****************************!
  !*** test funcion ***!
  !*****************************
   * 
   * 
   * 
   * 
   * 
   *!*****************************
   */

    // key
    const KEY_NUMBERS = 'nsNums'
    const KEY_RECORDS = 'nsRecords'

    // value
    const numbers = [100, 200, 300, 400, 500] // 配列
    const records = {
      // オブジェクト
      date: {
        year: 2019,
        month: 11,
        day: 16,
        week: 1,
      },
      time: [
        { hour: 7, min: 10 },
        { hour: 9, min: 20 },
        { hour: 11, min: 30 },
        { hour: 15, min: 40 },
        { hour: 20, min: 50 },
      ],
    }

    $(document).on('deviceready', function() {
      // devicereadyイベント
      console.log('*** storage ready ***\n', window.NativeStorage)
    })

    $(document).on('click', '#btn-test-storage-allload', function() {
      console.log('*** onallLoad ***')

      NativeStorage.keys(
        obj => console.log('success', obj),
        err => console.log('error', err.code)
      )
    })
    $(document).on('click', '#btn-test-storage-load', function() {
      console.log('*** onLoad ***')

      NativeStorage.getItem(
        KEY_DEVICE_ID,
        obj => console.log('success', obj),
        err => console.log('error', err.code)
      )

      console.log('check1')

      NativeStorage.getItem(
        KEY_RECORDS,
        obj => console.log('success', obj),
        err => console.log('error', err.code)
      )

      console.log('check2')
    })

    $(document).on('click', '#btn-test-storage-save', function() {
      console.log('*** onSave ***')

      NativeStorage.setItem(
        KEY_DEVICE_ID,
        numbers,
        obj => console.log('success', obj),
        err => console.log('error', err.code)
      )

      console.log('check1')

      NativeStorage.setItem(
        KEY_RECORDS,
        records,
        obj => console.log('success', obj),
        err => console.log('error', err.code)
      )

      console.log('check2')
    })

    $(document).on('click', '#btn-test-storage-save2', function() {
      console.log('*** onSave2 ***')
      const numbers2 = [0, 1, 30, 400, 500] // 配列
      NativeStorage.setItem(
        KEY_NUMBERS,
        numbers2,
        obj => console.log('success', obj),
        err => console.log('error', err.code)
      )

      console.log('check1')

      NativeStorage.setItem(
        KEY_RECORDS,
        records,
        obj => console.log('success', obj),
        err => console.log('error', err.code)
      )

      console.log('check2')
    })
    $(document).on('click', '#btn-test-storage-clear', function() {
      console.log('*** onclear ***')

      NativeStorage.clear(
        obj => console.log('success', obj),
        err => console.log('error', err.code)
      )
    })
    function test_inout() {
      let data = { a: [1, 4, 6, 7, 3], b: ['tes', 'tes2'] }
      let key = 'a'
      $('.test_inout').data(key, data)

      var tes = $('.test_inout').data(key)
      console.log(tes, typeof tes)
    }
    function test_in() {
      let data = 'tes01'
      let key = 'a'
      $temp_in(data, key)
    }
    function test_out() {
      let key = 'a'
      $temp_out(key)
      var tes = $get_out()
      console.log(tes)
    }

    $('button').click(function() {
      if ($(this).hasClass('test_inout')) {
        test_inout()
      } else if ($(this).hasClass('test_in')) {
        test_in()
      } else if ($(this).hasClass('test_out')) {
        test_out()
      } else if ($(this).hasClass('.btn-ble-scan')) {
        //test_out()
      } else if ($(this).hasClass('test_out')) {
        test_out()
      } else if ($(this).hasClass('test_out')) {
        test_out()
      } else {
        console.log('button clicked')
        //window.alert('else')
      }
    })

    $(document).on('click', '.test', function() {
      $(this).data('key', 'value')
      window.alert($(this).data('key'))

      let testDataTag = $(this).data('name')
      window.alert(testDataTag)
    })

    let html = 'test'
    $('<li>' + html + '</li>')
      .attr({
        class: 'bt test list ble-scan-list',
        'data-name': 'test',
      })
      .appendTo('#ul-test')

    $(document).on('click', '.test_scc', function() {
      function scc(e) {
        success(e, 'test_scc', 'this is comment', true)
      }
      function fal(e) {
        failed(e, 'test_scc', 'this is comment', true)
      }
      console.log(this)
      if ($(this).hasClass('scc')) {
        scc('this is success')
        $(this).fadeOut()
        $('.fal').show()
      } else if ($(this).hasClass('fal')) {
        fal('this is failed')
        $(this).fadeOut()
        $('.scc').fadeIn()
      }
      //$(this).toggle()
    })
  },

  //見た目にかかわる処理
  view: {
    scan: function() {
      console.log('[start] view.scan()')
      /**
       *@概要
       * '#ul-ble-scan-list'をクリア
       * ※関連のcontroller.scan関数は特殊なため、直接HTMLに出力させている
       *
       *@呼び出し関数
       *
       *
       *@出力先
       *#ul-ble-scan-list
       *
       */

      //初期化
      $('#ul-ble-scan-list').text('')
      setTimeout(function() {
        if ($('.ble-scan-list').length === 0) {
          $('#ul-ble-scan-list').text('デバイスが見つかりません')
        }
      }, 5000)
    },
  },

  //見た目に関わる操作以外の処理
  controller: {
    scan: function() {
      console.log('[start] controller.scan()')
      /**
       *@概要
       * ble.scanで取得したデータ一覧を'#ul-ble-scan-list'に表示
       * ※この関数は特殊なため、直接HTMLに出力させている
       *
       *@呼び出し関数
       *ble.scan([],time,succ,fail)
       *
       *@出力先
       *#ul-ble-scan-list
       *
       */
      ble.scan(
        [],
        5,
        function(device) {
          //console.log(device.name)

          if (device.name !== undefined) {
            //データ作成

            let html =
              '<b>' +
              device.name +
              '</b>' +
              '<br/>' +
              'RSSI: ' +
              device.rssi +
              '&nbsp;|&nbsp;' +
              device.id

            //挿入
            $('<li>' + html + '</li>')
              .attr({
                class: 'bt list ble-scan-list',
                'data-name': device.name,
                'data-id': device.id,
                'data-rssi': device.rssi,
              })
              .appendTo('#ul-ble-scan-list')
          }
        },
        function(e) {
          failed(e, 'controller.scan()')
        }
      )
    },
    autoConnect: function(id, success_connect, failed_connect) {
      console.log('[start] controller.autoConnect()')
      /**
       *@概要
       * ble自動接続
       * ※接続維持方法が特殊。30秒程度接続後、接続失敗コールバックが呼ばれ、再接続される
       *
       *@呼び出し関数
       *ble.autoConnect()
       *success()
       *
       *@出力先
       *success_connect()
       *
       */
      ble.autoConnect(
        id,
        function(e) {
          if (success_connect === undefined) {
            //接続維持の時、ble.autoConnect()単体で呼ばれる？
            success(
              'ble data',
              '[success] autoConnect [undefined]',
              '接続成功',
              true
            )
          } else {
            success_connect(
              e.name,
              'controller.autoConnect()',
              '接続成功',
              true
            )
          }
        },
        function(e) {
          if (failed_connect === undefined) {
            failed(
              'ble data',
              '[failed] autoConnect [undefined]',
              '接続失敗',
              true
            )
          } else {
            failed_connect(e, 'controller.autoConnect()', '接続失敗', true)
          }
        }
      )
    },
    disConnect: function(id, success_disconnect, failed_disconnect) {
      console.log('[start] controller.disConnect()')
      ble.disconnect(
        id,
        function(e) {
          success_disconnect(
            e,
            '[success] controller.disConnect()',
            'disconnect成功',
            true
          )
        },
        function(e) {
          failed_disconnect(
            e,
            '[failed] controller.disConnect()',
            'disconnect失敗',
            true
          )
        }
      )
    },
  },
  init: function() {
    /**
       * !*****************************
       * 
       * 
       * 
       * 
       *
      !*****************************!
      !*** initialize ***!
      !*****************************
      * 
      * 
      * 
      * 
      * 
      *!*****************************
      */
    init_that(this)
    /** 
      * ==概要==
      * アプリ起動時、DBにdeviceデータがあれば、自動接続
      *
      * ==呼び出し関数==
      *
      *
  
      */
    $(document).on('deviceready', () => {
      NativeStorage.getItem(
        this.data.KEY_DEVICE_ID,
        obj => {
          if (obj.name === undefined || obj.id === undefined) {
            let setItem = { name: 'none', id: 'none' }
            NativeStorage.setItem(
              this.data.KEY_DEVICE_ID,
              setItem,
              () => console.log('success save !obj.name || !obj.id'),
              () => console.log('failed save !obj.name || !obj.id')
            )
          }

          //接続成功時の表示用関数
          function success2(e) {
            console.log('initialize: auto connect ble success')

            //#device-infoにデータを記入

            $('.device-info-name').text(e.name)
            $('.device-info-id').text(e.id)
            $('.device-info-rssi').text(e.rssi)
            $('.device-info-services').text(e.services)
            $('.device-info-chars').text(JSON.stringify(e.characteristics))
            //#device-infoを表示
            $('#device-info').slideDown()
          }
          function failed2(e, called, comment, alert) {
            //if not called, undefined
            let insert = ''
            if (comment === undefined || comment === '-')
              insert = 'error: ' + e + '\nfrom: ' + called
            else
              insert =
                'error: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
            console.log(insert)
            if (alert !== undefined) window.alert(insert)
          }

          //conBleConnect(id, success3, failed3)
          conBleAutoConnect(
            obj.id,
            success2(obj),
            failed2(obj, " $(document).on('deviceready', function() {")
          )
        },
        err => {
          window.alert('デバイスと接続してください。')
          console.log('no device data', err.code)
        }
      )
    })

    $(document).on('click', '.btn-ble-scan', () => {
      this.view.scan()
      this.controller.scan()
    })

    $(document).on('click', '.ble-scan-list', function() {
      //<li>のdata-id属性に保存したidを取得
      let id = $(this).data('id')
      console.log('[clicked] id: ', id)

      //データのロード画面

      //接続成功時の表示用関数
      let success_connect = (e, called, comment, alert) => {
        //if not called, undefined
        success(e, called, comment, alert)

        //storageに接続したdeviceidを保存
        console.log(e)
        e = parse(e)
        NativeStorage.setItem(
          that.data.KEY_DEVICE_ID,
          e,
          function(e) {
            console.log('success save: ', e.name)
          },
          function(e) {
            console.log('error save: ', e.name)
          }
        )

        if (e.name === undefined) {
          e.name = 'none'
        }

        //#device-infoにデータを記入

        $('.device-info-name').text(e.name)
        $('.device-info-id').text(e.id)
        $('.device-info-rssi').text(e.rssi)
        $('.device-info-services').text(e.services)
        $('.device-info-chars').text(JSON.stringify(e.characteristics))
        //#device-infoを表示
        $('#device-info').slideDown()
      }
      let failed_connect = function(e, called, comment, alert) {
        failed(e, called, comment, alert)

        //#device-infoの情報をリセット
        $('#device-info').slideUp()
      }

      //初回接続時、成功コールバック関数が呼ばれる？
      that.controller.autoConnect(id, success_connect, failed_connect)
    })

    $(document).on('click', '.btn-ble-disconnect', () => {
      NativeStorage.getItem(
        this.data.KEY_DEVICE_ID,
        function(e) {
          success(e, '[success] NativeStorage.getItem() disconnect', 'load')

          //接続成功時の表示用関数
          let success_disconnect = function(e, called, comment, alert) {
            $('#device-info').slideUp()
            success(e, called, comment, alert)
          }
          let failed_disconnect = function(e, called, comment, alert) {
            failed(e, called, comment, alert)
          }
          this.controller.disConnect(
            e.id,
            success_disconnect,
            failed_disconnect
          )
        },
        function(e) {
          failed(e, '[failed] NativeStorage.getItem() disconnect')
        }
      )
    })

    /**
   * !*****************************
   * 
   * 
   * 
   * 
   *
  !*****************************!
  !*** View ***!
  !*****************************
   * 
   * 
   * 
   * 
   * 
   *!*****************************
  */

    /**
     * ==概要==
     * 要素クリックしたときにble接続解除
     *
     * ==呼び出し関数==
     *conBleConnect(id, success3, failed3)
     *
     *
     */

    /** 
   *!***************************** 
   * 
   * 
   * 
   * 
   *
  !*****************************!
  !*** Contraoller ***!
  !*****************************
   * 
   * 
   * 
   * 
   * 
   *!*****************************
   */

    /**
     * ==概要==
     * ble接続(手動)
     *
     * ==呼び出し関数==
     * success2(e,from,comment,alert)
     * failed2(e,from,comment,alert)
     *
     *
     */

    function conBleConnect(id, success2, failed2) {
      //function conBleConnect(id) {
      ble.connect(
        id,
        function(e) {
          success2(JSON.stringify(e), 'conBleConnect(id)', '接続成功', true)
        },
        function(e) {
          failed2(JSON.stringify(e), 'conBleConnect(id)', '接続失敗', true)
        }
      )
    }

    function onBLERead() {
      //cons.elm_ul.ul_bleReadList.textContent = ''
      let ID = '24:0A:C4:C5:F6:22' // '6C:05:2B:EA:6B:78'
      let serviceID_1 = '4fafc201-1fb5-459e-8fcc-c5c9c331914b' //cons.UUID.deviceA.service.service1
      let charaID_1 = 'beb5483e-36e1-4688-b7f5-ea07361b26a8' //cons.UUID.deviceA.chracter.chara1
      /*
      let serviceID_2 = cons.UUID.deviceA.service.service2
    let charaID_2 = cons.UUID.deviceA.chracter.chara2
    let serviceID_3 = cons.UUID.deviceA.service.service3
    let charaID_3 = cons.UUID.deviceA.chracter.chara3
    */
      let success = {
        template: function(e, prop) {
          let unit8View = new Uint8Array(e)
          let ul_element = '' //cons.elm_ul.ul_bleReadList

          //console.log("success read: " + prop);
          console.log('read: ' + prop + ' | ' + JSON.stringify(unit8View))
          let li = document.createElement('li')
          let html = '<b>' + prop + '</b>' + '<br/>' + unit8View
          li.innerHTML = html
          ul_element.appendChild(li)
        },
        _1: function(e) {
          let prop = 'service 1'
          success.template(e, prop)
        },
        _2: function(e) {
          let prop = 'service 2'
          success.template(e, prop)
        },
        _3: function(e) {
          let prop = 'service 3'
          success.template(e, prop)
        },
      }
      let failed = function() {
        window.alert('書き込みエラー ペリフェラル再接続')
      }
      function subBLERead(ID, serviceID, charaID, success) {
        console.log('subBLERead()')

        //let s = success();
        let failed = function() {
          console.log('failed read')
          window.alert('failed read')
        }
        ble.read(ID, serviceID, charaID, success, failed)
      }
      subBLERead(ID, serviceID_1, charaID_1, success._1, failed)
      //subBLERead(ID, serviceID_2, charaID_2, success._2, failed)
      ///subBLERead(ID, serviceID_3, charaID_3, success._3, failed)
    }

    function onBLEWrite() {
      console.log('onBLEWrite')

      let ID = document.forms.form_bleWrite.input_bleWrite_ID.value
      let serviceID_1 = document.forms.form_bleWrite.input_bleWrite_sUUID1.value
      let charaID_1 = document.forms.form_bleWrite.input_bleWrite_cUUID1.value
      let serviceID_2 = document.forms.form_bleWrite.input_bleWrite_sUUID2.value
      let charaID_2 = document.forms.form_bleWrite.input_bleWrite_cUUID2.value
      let serviceID_3 = document.forms.form_bleWrite.input_bleWrite_sUUID3.value
      let charaID_3 = document.forms.form_bleWrite.input_bleWrite_cUUID3.value
      let input = []

      let data_1 = new Uint8Array(1)
      input[0] = document.forms.form_bleWrite.input_bleWrite_write1.value
      data_1[0] = Number(input[0])
      console.log(input[0])
      console.log(Number(input[0]))

      let data_2 = new Uint8Array(3)
      input[1] = document.forms.form_bleWrite.input_bleWrite_write21.value
      input[2] = document.forms.form_bleWrite.input_bleWrite_write22.value
      input[3] = document.forms.form_bleWrite.input_bleWrite_write23.value
      data_2[0] = Number(input[1])
      data_2[1] = Number(input[2])
      data_2[2] = Number(input[3])
      console.log(input[1])

      let data_3 = new Uint32Array(1)
      input[4] = document.forms.form_bleWrite.input_bleWrite_write3.value
      data_3[0] = Number(input[4])
      console.log(input[4])

      let success = {
        template: function(e, prop) {
          window.alert('write: ' + prop)
        },
        _1: function(e) {
          let prop = 'service 1'

          success.template(e, prop)
        },
        _2: function(e) {
          let prop = 'service 2'
          success.template(e, prop)
        },
        _3: function(e) {
          let prop = 'service 3'
          success.template(e, prop)
        },
      }
      let failed = {
        template: function(e, prop) {
          console.log('error: ' + e + ' | ' + prop)
        },
        _1: function(e) {
          let prop = 'service 1'
          failed.template(e, prop)
        },
        _2: function(e) {
          let prop = 'service 2'
          failed.template(e, prop)
        },
        _3: function(e) {
          let prop = 'service 3'
          failed.template(e, prop)
        },
      }
      ble.write(
        ID,
        serviceID_1,
        charaID_1,
        data_1.buffer,
        success._1,
        failed._1
      )
      ble.write(
        ID,
        serviceID_2,
        charaID_2,
        data_2.buffer,
        success._2,
        failed._2
      )
      ble.write(
        ID,
        serviceID_3,
        charaID_3,
        data_3.buffer,
        success._3,
        failed._3
      )
    }

    function onBLENotify() {
      let ID = document.forms.form_bleNotify.input_bleNotify_ID.value
      let serviceID = document.forms.form_bleNotify.input_bleNotify_sUUID.value
      let charaID = document.forms.form_bleNotify.input_bleNotify_cUUID.value
      let success = function(e) {
        let data = new Uint8Array(e)
        console.log('change: ' + data[0])
        window.alert('change: ' + data[0])
      }
      let failed = function() {
        window.alert('error')
      }
      window.alert('BLE Notifiy Start')
      console.log('start Notify')
      ble.startNotification(ID, serviceID, charaID, success, failed)
    }

    /**
     * BLE
     * @param {string} ID 接続するデバイスID
     * @param {string} serviceID 接続するserviceUUID
     * @param {string} charaID 接続するchractisticUUID
     * @param {function} success 成功時のコールバック関数、引数はID
     */

    function subBLEWrite(ID, serviceID, charaID, success, failed) {
      console.log('onBLEWrite')
    }

    function subBLENotify() {
      console.log('onBLENotify')
    }
  },
}

export default app_ble
