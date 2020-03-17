window.alert('load bluettoth.js2')
let cons = {
  FILE_DIR_URL: 'cordov',
  elm_ul: document.getElementsByTagName('ul'),
  UUID: {
    all: {
      name: '自動挿入',
      obj: '自動挿入',
    },
    deviceA: {
      ID: '24:0A:C4:C5:F6:22', //'6C:05:2B:EA:6B:78',
      service: {
        service1: '4fafc201-1fb5-459e-8fcc-c5c9c331914b',
        service2: '0000bbb0-0000-1000-8000-00805f9b34fb',
        service3: '0000ccc0-0000-1000-8000-00805f9b34fb',
      },
      chracter: {
        chara1: 'beb5483e-36e1-4688-b7f5-ea07361b26a8',
        chara2: '0000bbb1-0000-1000-8000-00805f9b34fb',
        chara3: '0000ccc1-0000-1000-8000-00805f9b34fb',
      },
    },
    deviceB: {
      ID: '6C:05:2B:EA:6B:78',
      service: {
        service1: '0000fff0-0000-1000-8000-00805f9b34fb',
        service2: '0000bbb0-0000-1000-8000-00805f9b34fb',
        service3: '0000ccc0-0000-1000-8000-00805f9b34fb',
      },
      chracter: {
        chara1: '0000fff1-0000-1000-8000-00805f9b34fb',
        chara2: '0000bbb1-0000-1000-8000-00805f9b34fb',
        chara3: '0000ccc1-0000-1000-8000-00805f9b34fb',
      },
    },
    deviceC: {
      ID: '6C:05:2B:EA:6B:78',
      service: {
        service1: '0000fff0-0000-1000-8000-00805f9b34fb',
        service2: '0000bbb0-0000-1000-8000-00805f9b34fb',
        service3: '0000ccc0-0000-1000-8000-00805f9b34fb',
      },
      chracter: {
        chara1: '0000fff1-0000-1000-8000-00805f9b34fb',
        chara2: '0000bbb1-0000-1000-8000-00805f9b34fb',
        chara3: '0000ccc1-0000-1000-8000-00805f9b34fb',
      },
    },
  },
}

$(document).ready(function() {
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
    const numbers2 = [00, 1, 30, 400, 500] // 配列
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

  const KEY_DEVICE_ID = 'nsDeviceId'
  /**
 * !*****************************
 * 
 * 
 * 
 * 
 *
!*****************************!
!*** 汎関数 ***!
!*****************************
 * 
 * 
 * 
 * 
 * 
 *!*****************************
 */

  function success(e, called, comment, alert) {
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
    //if not called, undefined
    let insert = ''
    if (comment === undefined || comment === '-')
      insert = 'error: ' + e + '\nfrom: ' + called
    else insert = 'error: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
    console.log(insert)
    if (alert !== undefined) window.alert(insert)
    return undefined
  }

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
   * ble.scanで取得したデータ一覧を'#ul-ble-scan-list'に表示
   *
   * ==呼び出し関数==
   *conBleScanDevice()
   *
   *
   */
  $(document).on('click', '.btn-ble-scan', function() {
    /*
  --#ble-scan-wwrapper 
  #ul-ble-scan-list
  .btn-ble-scan
  */
    //初期化
    $('#ul-ble-scan-list').text('')
    conBleScanDevice()
  })

  /**
   * ==概要==
   * ble.scanで取得した任意のデータをクリックしたときにble接続
   *
   * ==呼び出し関数==
   *conBleConnect(id, success3, failed3)
   *
   *
   */
  $(document).on('click', '.ble-scan-list', function() {
    let id = $(this).data('id')
    //console.log('id', id)

    //接続成功時の表示用関数
    function success2(e, called, comment, alert) {
      //if not called, undefined
      let insert = ''
      if (comment === undefined || comment === '-')
        insert = 'successだよ: ' + e + '\nfrom: ' + called
      else
        insert =
          'successだよ: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
      console.log(insert)
      if (alert !== undefined) window.alert(insert)

      //#device-infoに情報をsave
      $('#device-info').data('connectData', e)
      // //device-info-savedを発火
      // $(document).trigger('device-info-saved')

      // let deviceInfo = e
      // console.log('deviceInfo', deviceInfo)
      // $('.device-info-name').text(deviceInfo.name)
      // $('.device-info-id').text(deviceInfo.id)
      // $('.device-info-rssi').text(deviceInfo.rssi)
      // $('.device-info-services').text(deviceInfo.services)
      // $('.device-info-chars').text(deviceInfo.characteristics)

      //storageに接続したdeviceidを保存
      NativeStorage.setItem(
        KEY_DEVICE_ID,
        e.id,
        function(e) {
          console.log('success save: ', e.id)
        },
        function(e) {
          console.log('error save: ', e.id)
        }
      )

      //#device-infoにデータを記入、表示
      console.log('e', e)
      $('.device-info-name').text(e.name)
      $('.device-info-id').text(e.id)
      $('.device-info-rssi').text(e.rssi)
      $('.device-info-services').text(e.services)
      $('.device-info-chars').text(e.characteristics)
      //#device-infoを表示
      $('#device-info').slideDown()

      return undefined
    }
    function failed2(e, called, comment, alert) {
      //if not called, undefined
      let insert = ''
      if (comment === undefined || comment === '-')
        insert = 'error: ' + e + '\nfrom: ' + called
      else
        insert = 'error: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
      console.log(insert)
      if (alert !== undefined) window.alert(insert)

      //#device-infoの情報をリセット
      $('#device-info').slideUp()
      return undefined
    }

    //ble.connectでbleと接続、#device-infoにデータをキャッシュ
    //conBleConnect(id, success3, failed3)
    conBleAutoConnect(id, success2, failed2)

    $(document).on('device-info-saved', function() {
      let deviceInfo = $('#device-info').data('connectData')

      console.log('deviceInfo', deviceInfo)
      $('.device-info-name').text(deviceInfo.name)
      $('.device-info-id').text(deviceInfo.id)
      $('.device-info-rssi').text(deviceInfo.rssi)
      $('.device-info-services').text(deviceInfo.services)
      $('.device-info-chars').text(deviceInfo.characteristics)
    })
  })
  /**
   * ==概要==
   * 要素クリックしたときにble接続解除
   *
   * ==呼び出し関数==
   *conBleConnect(id, success3, failed3)
   *
   *
   */
  $(document).on('click', '.btn-ble-disconnect', function() {
    let id = $('#device-info').data('connectData').id

    //接続成功時の表示用関数
    function failed2(e, called, comment, alert) {
      //if not called, undefined
      let insert = ''
      if (comment === undefined || comment === '-')
        insert = 'error: ' + e + '\nfrom: ' + called
      else
        insert = 'error: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
      console.log(insert)
      if (alert !== undefined) window.alert(insert)
      return undefined
    }
    function success2(e, called, comment, alert) {
      //if not called, undefined
      let insert = ''
      if (comment === undefined || comment === '-')
        insert = 'successだよ: ' + e + '\nfrom: ' + called
      else
        insert =
          'successだよ: ' + e + '\nfrom: ' + called + '\ncomment: ' + comment
      console.log(insert)

      if (alert !== undefined) window.alert(insert)

      //イベント発火
      $(document).trigger('device-disconnected')
      $('#device-info').slideUp()
      return undefined
    }

    conBleDisConnect(id, success2, failed2)

    $(document).on('device-disconnected', function() {})
  })

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
   * ble.scanで取得したデータ一覧を'#ul-ble-scan-list'に表示
   *
   * ==呼び出し関数==
   *ble.scan([],time,succ,fail)
   *
   *
   */
  function conBleScanDevice() {
    console.log('start conBleScanDevice()')
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
        failed(e, 'conBleScanDevice()')
      }
    )
  }

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

  /**
   * ==概要==
   * ble接続(自動)
   *
   * ==呼び出し関数==
   * success2(e,from,comment,alert)
   * failed2(e,from,comment,alert)
   *
   *
   */

  function conBleAutoConnect(id, success2, failed2) {
    //function conBleConnect(id) {
    ble.autoConnect(
      id,
      function(e) {
        success2(JSON.stringify(e), 'conBleAutoConnect(id)', '接続成功', true)
      },
      function(e) {
        failed2(JSON.stringify(e), 'conBleAutoConnect(id)', '接続失敗', true)
      }
    )
  }

  function conBleDisConnect(id, success2, failed2) {
    ble.disconnect(
      id,
      function(e) {
        success2(
          e,
          'conBleDisConnect(id, success2, failed2)',
          'disconnect成功',
          true
        )
      },
      function(e) {
        failed2(
          e,
          'conBleDisConnect(id, success2, failed2)',
          'disconnect失敗',
          true
        )
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
    ble.write(ID, serviceID_1, charaID_1, data_1.buffer, success._1, failed._1)
    ble.write(ID, serviceID_2, charaID_2, data_2.buffer, success._2, failed._2)
    ble.write(ID, serviceID_3, charaID_3, data_3.buffer, success._3, failed._3)
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
})
