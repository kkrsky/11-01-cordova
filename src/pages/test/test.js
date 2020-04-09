import view from 'src/js/view.js'
import model from 'src/js/model.js'
const util = require('util') //for primisefy

//コールバックの中身確認用

let _cons = (elm1, elm2, elm3) => {
  if (elm1 === undefined && elm2 === undefined && elm3 === undefined) {
    console.log('-----start------')
    console.log('no callback')
    console.log('-----fin------')
  } else {
    console.log('-----start------')
    console.log('callback: ', elm1)
    console.log('callback: ', elm2)
    console.log('callback: ', elm3)
    console.log('-----fin------')
  }
}

const test = {
  data: {
    storage_id: {
      connected_device_info: 'connected_device_info',
      connect_device_id: 'connect_device_id',
    },
  },
  init: function () {
    console.log(c.cyan + '[init]', 'test.js')

    let init_list = {
      test_some: function () {
        //test_some
        $(document).on('click', '.test_inner_jquery', function () {
          console.log('click!')
          $('.output').text('click!!!')
          let available = true
          $('#state.location-setting').addClass(available ? 'on' : 'off')
        })

        $(document).on('deviceready', function () {
          let available2 = true
          $('#state .location').addClass(available2 ? 'on' : 'off')
        })
      }.bind(this),
      iziToast: function () {
        //iziToast テスト
        $(document).on('click', '.btn-test-toast', () => {
          view.toast_simple('title', 'this is msg')
          view.toast_info('this is msg')
          view.toast_success('this is msg')
          view.toast_warning('this is msg')
          view.toast_error('this is msg')
          view.toast_ask('title', 'this is msg')
        })
      }.bind(this),
      nativeStorage: function () {
        //NativeStorage テスト
        /**
         * ※success系を呼ぶときは、bind(this)を加える。thisを継承
         */

        var obj = { name: 'NativeStorage', author: 'GillesCallebaut' }
        let id = 'reference'
        //
        $(document).on('click', '#btn_NativeStorage_test_set2', () => {
          let id2 = 'reference2'
          let obj2 = { test: 'this is test' }
          this.NativeStorage_test.setItem(id2, obj2)
        })
        $(document).on('click', '#btn_NativeStorage_test_get2', () => {
          let id2 = 'reference2'
          this.NativeStorage_test.getItem(id2)
        })
        //
        $(document).on('click', '#btn_NativeStorage_test_set', () => {
          this.NativeStorage_test.setItem(id, obj)
        })
        $(document).on('click', '#btn_NativeStorage_test_get', () => {
          this.NativeStorage_test.getItem(id)
        })
        $(document).on('click', '#btn_NativeStorage_test_keys', () => {
          this.NativeStorage_test.keys()
        })
        $(document).on('click', '#btn_NativeStorage_test_rm', () => {
          this.NativeStorage_test.remove(id)
        })
        $(document).on('click', '#btn_NativeStorage_test_clear', () => {
          this.NativeStorage_test.clear()
        })
        $(document).on('click', '#btn_NativeStorage_test_output', () => {
          let output = this.NativeStorage_test.output()
          console.log('output:', output)
        })
      }.bind(this),
      diagnostic: function () {
        //diagnostic
        $(document).on('click', '#btn_diagnostic_test_all', () => {
          this.diagnostic_test.core.test()
          this.diagnostic_test.location.test()
          this.diagnostic_test.bluetooth.test()
          this.diagnostic_test.wifi.test()
          this.diagnostic_test.camera.test()
          this.diagnostic_test.notification.test()
          this.diagnostic_test.microphone.test()
          this.diagnostic_test.contacts.test()
          this.diagnostic_test.calender.test()
          this.diagnostic_test.reminders.test()
          this.diagnostic_test.motion.test()
          this.diagnostic_test.nfc.test()
          //this.diagnostic_test.exStorage.test()
        })
        $(document).on('click', '#btn_diagnostic_test_core', () => {
          this.diagnostic_test.core.test()
        })
        $(document).on('click', '#btn_diagnostic_test_location', () => {
          this.diagnostic_test.location.test()
        })
        $(document).on('click', '#btn_diagnostic_test_bluetooth', () => {
          this.diagnostic_test.bluetooth.test()
        })
        $(document).on('click', '#btn_diagnostic_test_wifi', () => {
          this.diagnostic_test.wifi.test()
        })
        $(document).on('click', '#btn_diagnostic_test_camera', () => {
          this.diagnostic_test.camera.test()
        })
        $(document).on('click', '#btn_diagnostic_test_notification', () => {
          this.diagnostic_test.notification.test()
        })
        $(document).on('click', '#btn_diagnostic_test_microphone', () => {
          this.diagnostic_test.microphone.test()
        })
        $(document).on('click', '#btn_diagnostic_test_contacts', () => {
          this.diagnostic_test.contacts.test()
        })
        $(document).on('click', '#btn_diagnostic_test_calender', () => {
          this.diagnostic_test.calender.test()
        })
        $(document).on('click', '#btn_diagnostic_test_reminders', () => {
          this.diagnostic_test.reminders.test()
        })
        $(document).on('click', '#btn_diagnostic_test_motion', () => {
          this.diagnostic_test.motion.test()
        })
        $(document).on('click', '#btn_diagnostic_test_nfc', () => {
          this.diagnostic_test.nfc.test()
        })
      }.bind(this),
      test_ble: function () {
        let that = this
        $(document).on(
          'click',
          '#btn_ble_test_scan',
          function () {
            this.ble_test.scan('#result')
          }.bind(this)
        )

        $(document).on('click', '#test_promise', function () {
          // コールバックスタイルの関数
          function callbackStyleFunction(data, delay, callback) {
            console.log(c.green + 'out!!')
            setTimeout(() => {
              callback(null, data)
              console.log(c.red + 'in!!!')
            }, delay)
          }

          // Promiseスタイルの関数にラップする
          let promiseStyleFunction = util.promisify(callbackStyleFunction)
          let success = (elm1, elm2) => {
            setTimeout(function () {
              console.log(c.red + 'success', elm1, elm2)
            }, 1000)
          }
          async function tes() {
            await promiseStyleFunction(5, 100, function (elm1, elm2) {
              setTimeout(function () {
                console.log(c.red + 'success', elm1, elm2)
              }, 1000)
              return 'this is return'
            })
            await promiseStyleFunction(50, 100, success)
            //await promiseStyleFunction(500, 100, success)
            console.log(c.red + 'aaaaa')
          }
          tes()
            // Promiseスタイルの関数を使用する
            //promiseStyleFunction(10, 3000)
            .then((data) => {
              // Promiseが成功した場合
              console.log('data = ' + data)
            })
            .catch((err) => {
              // Promiseが失敗した場合
              console.log('err' + err)
            })
        })
        $(document).on('click', '.ble-scan-list', function () {
          let id = $(this).data('id')

          let save_id = that.data.storage_id.connect_device_id
          let save_obj = { id: id }
          let check_save_id = model.nativeStorage.setItem(save_id, save_obj)

          // if (check_save_id === true) {
          const autoConnect = util.promisify(that.ble_test.autoConnect)
          autoConnect(id).then((result) => {
            console.log(result)
          })

          /*
          async function tes() {
            console.log('id', id)
            return await autoConnect(id)
          }
          tes()
          console.log(tes())
          */

          /*
          let connected_item = that.ble_test.autoConnect(id)
          console.log(c.red + 'connected_item', connected_item)
          if (connected_item !== false) {
            save_id = that.data.storage_id.connected_device_info
            model.nativeStorage.setItem(save_id, connected_item)
          } else {
            window.alert('device 接続失敗、もう一度接続してください')
          }
          */

          // } else {
          //window.alert('device id受け取り失敗、もう一度接続してください')
          // }
        })
        $(document).on(
          'click',
          '#btn_ble_test_autoConnect',
          function () {
            let id = '48:AE:45:BA:B9:C6' //'88:A9:B7:A9:0E:77'
            this.ble_test.autoConnect(id)
          }.bind(this)
        )
        $(document).on(
          'click',
          '#btn_ble_test_disconnect',
          function () {
            let id = '48:AE:45:BA:B9:C6' //'88:A9:B7:A9:0E:77'
            this.ble_test.disConnect(id)
          }.bind(this)
        )
        $(document).on(
          'click',
          '#btn_ble_test_read',
          function () {
            let id = '4A:FB:61:76:38:7C'
            let service_uuid = '4fafc201-1fb5-459e-8fcc-c5c9c331914b'
            let characteristic_uuid = 'beb5483e-36e1-4688-b7f5-ea07361b26a8'
            this.ble_test.read(id, service_uuid, characteristic_uuid)
          }.bind(this)
        )
        $(document).on(
          'click',
          '#btn_ble_test_write',
          function () {
            let id = '4A:FB:61:76:38:7C'
            let service_uuid = '4fafc201-1fb5-459e-8fcc-c5c9c331914b'
            let characteristic_uuid = 'beb5483e-36e1-4688-b7f5-ea07361b26a8'
            this.ble_test.write(id, service_uuid, characteristic_uuid)
          }.bind(this)
        )
      }.bind(this),
    }

    init_list.test_some()
    init_list.iziToast()
    init_list.nativeStorage()
    //init_list.diagnostic()
    init_list.test_ble()
  },
  NativeStorage_test: {
    //sysyem
    item: [],
    output_state: false,
    output_true: function (obj) {
      if (this.output_state === true) {
        this.output_false()
      }
      this.item.push(obj)
      this.output_state = true
    },
    output_false: function () {
      this.item.pop()
      this.output_state = false
    },
    output: function () {
      if (this.output_state === true) return this.item[0]
      else return false
    },

    //setItem
    setItem: function (id, obj) {
      NativeStorage.setItem(
        id,
        obj,
        this.setSuccess.bind(this),
        this.setError.bind(this)
      )
    },
    setSuccess: function (obj) {
      console.log(c.green + '[success]', 'set')
      _cons(obj)
      console.log(obj.name)
    },
    setError: function (error) {
      console.log(c.red + '[failed]', 'set')
      _cons(error)
      console.log(error.code)
      if (error.exception !== '') console.log(error.exception)
    },

    //keys
    keys: function () {
      NativeStorage.keys(this.keysSuccess.bind(this), this.keysError.bind(this))
    },
    keysSuccess: function (obj) {
      console.log(c.green + '[success]', 'keys')
      _cons(obj)
      console.log('keys: ', obj)
    },
    keysError: function (error) {
      console.log(c.red + '[failed]', 'keys')
      console.log(error.code)
      _cons(error)
      if (error.exception !== '') console.log(error.exception)
    },

    //getItem
    getItem: function (id) {
      NativeStorage.getItem(
        id,
        this.getSuccess.bind(this),
        this.getError.bind(this)
      )
    },
    getSuccess: function (obj) {
      console.log(c.green + '[success]', 'get')
      _cons(obj)

      console.log('get: ', obj)
      this.output_true(obj)
      console.log(this)
    },
    getError: function (error) {
      console.log(c.red + '[failed]', 'get')
      console.log(error.code)
      _cons(error)
      if (error.exception !== '') console.log(error.exception)
    },

    //remove
    remove: function (id) {
      NativeStorage.remove(
        id,
        this.removeSuccess.bind(this),
        this.removeError.bind(this)
      )
    },
    removeSuccess: function (obj) {
      console.log(c.green + '[success]', 'remove')
      _cons(obj)
    },
    removeError: function (error) {
      console.log(c.red + '[failed]', 'remove')
      console.log(error.code)
      _cons(error)
      if (error.exception !== '') console.log(error.exception)
    },

    //clear
    clear: function () {
      NativeStorage.clear(
        this.clearSuccess.bind(this),
        this.clearError.bind(this)
      )
    },
    clearSuccess: function (obj) {
      console.log(c.green + '[success]', 'clear')
      this.output_false()
      _cons(obj)
    },
    clearError: function (error) {
      console.log(c.red + '[failed]', 'clear')
      console.log(error.code)
      _cons(error)
      if (error.exception !== '') console.log(error.exception)
    },
  },
  ble_test: {
    success: function (elm, called, comment, alert) {
      //elm = stringify(e)
      //if not called, undefined

      if (comment === undefined || comment === '-') {
        console.log('success: ', elm, '\nfrom: ', called)
        if (alert === 'alert') {
          window.alert('success: ', elm, '\nfrom: ', called)
        }
      } else {
        console.log(
          'success: ',
          elm,
          '\nfrom: ',
          called,
          '\ncomment: ',
          comment
        )
        if (alert === 'alert') {
          window.alert(
            'success: ',
            elm,
            '\nfrom: ',
            called,
            '\ncomment: ',
            comment
          )
        }
      }
    },
    failed: function (err, called, comment, alert) {
      if (comment === undefined || comment === '-') {
        console.log('failed: ', err, '\nfrom: ', called)
        if (alert === 'alert') window.alert('failed: ', err, '\nfrom: ', called)
      } else {
        console.log('failed: ', err, '\nfrom: ', called, '\ncomment: ', comment)
        if (alert === 'alert')
          window.alert(
            'failed: ',
            err,
            '\nfrom: ',
            called,
            '\ncomment: ',
            comment
          )
      }
    },
    scan: function (appendElem) {
      //ble.scan(services, seconds, success, failure);

      console.log(c.cyan + '[start]', 'ble scan')

      ble.scan(
        [],
        5,
        function (device) {
          this.success(device, 'scan', 'des')

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
            $('<button>' + html + '</button>')
              .attr({
                class: 'ble-scan-list list-group-item list-group-item-action',
                'data-name': device.name,
                'data-id': device.id,
                'data-rssi': device.rssi,
              })
              .appendTo(appendElem) //'.ul-ble-scan-list'
          }
        }.bind(this),
        function (err) {
          this.failed(err, 'ble.scan()')
        }
      )
    },
    autoConnect: function (id) {
      console.log(c.cyan + '[start]', 'ble autoConnect', id)
      let check = false

      let success_connect = (elm) => {
        console.log(this)
        //if not called, undefined
        let called = 'ble autoConnect'
        let comment = 'success connect'
        let alert = 'alert'
        //this.success(elm, called, comment, alert)
      }

      let failed_connect = (err) => {
        let called = 'ble autoConnect'
        let comment = 'failed connect'
        let alert = 'alert'
        this.failed(err, called, comment, alert)
        //console.log(this)
        //#device-infoの情報をリセット
        //$('#device-info').slideUp()
      }
      //console.log(c.red + 'autoConnect', autoConnect(id, success_connect))

      ble.autoConnect(
        id,
        function (elm) {
          console.log('autoConnect success elm', elm)
          if (success_connect === undefined) {
            //接続維持の時、ble.autoConnect()単体で呼ばれる？
            this.success(
              'ble data',
              '[success] autoConnect [undefined]',
              '接続成功',
              true
            )
          } else {
            success_connect(elm.name)
          }
          check = elm
        }.bind(this),
        function (err) {
          console.log('autoConnect failed elm', err)
          if (failed_connect === undefined) {
            this.failed(
              'ble data',
              '[failed] autoConnect [undefined]',
              '接続失敗',
              true
            )
          } else {
            failed_connect(err)
          }
        }.bind(this)
      )
      console.log('check', check)
      return check
    },
    disConnect: function (id) {
      console.log(c.cyan + '[start]', 'ble disConnect')

      let success_disconnect = (elm) => {
        let called = 'ble disconnect()'
        let comment = 'success disconnect'
        let alert = 'alert'
        this.success(elm, called, comment, alert)
        // $('#device-info').slideUp()
      }

      let failed_disconnect = (err) => {
        let called = 'ble disconnect()'
        let comment = 'failed disconnect'
        let alert = 'alert'
        this.failed(err, called, comment, alert)
      }
      ble.disconnect(
        id,
        function (elm) {
          success_disconnect(elm)
        },
        function (err) {
          failed_disconnect(err)
        }
      )
    },
    read: function (id, service_uuid, characteristic_uuid) {
      ble.read(
        id,
        service_uuid,
        characteristic_uuid,
        function (elm) {
          this.success('read', elm)
        }.bind(this),
        function (err) {
          this.failed('read', err)
        }.bind(this)
      )
    },
    write: function (id, service_uuid, characteristic_uuid) {
      var data = new Uint8Array(1)
      data[0] = 1
      ble.write(
        id,
        service_uuid,
        characteristic_uuid,
        data.buffer,
        function (elm) {
          this.success('write', elm)
        }.bind(this),
        function (err) {
          this.failed('write', err)
        }.bind(this)
      )
    },
  },

  diagnostic_test: {
    device: { platform: 'android' },
    core: {
      test: function () {
        console.log(c.cyan + '[start]', 'core test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.switchToSettings(obj_pass)
          this.PermissionStatus(obj_pass)
          this.cpuArchitecture(obj_pass)
          this.getArchitecture(obj_pass)
          this.enableDebug(obj_pass)

          //android
          this.switchToWirelessSettings(obj_pass)
          this.switchToMobileDataSettings(obj_pass)
          this.getPermissionAuthorizationStatus(obj_pass)
          this.getPermissionsAuthorizationStatus(obj_pass)
          this.requestRuntimePermission(obj_pass)
          this.requestRuntimePermissions(obj_pass)
          this.isRequestingPermission(obj_pass)
          this.registerPermissionRequestCompleteHandler(obj_pass)
          this.isDataRoamingEnabled(obj_pass)
          this.isADBModeEnabled(obj_pass)
          this.isDeviceRooted(obj_pass)
          this.restart(obj_pass)
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.switchToSettings(obj_pass)
          this.PermissionStatus(obj_pass)
          this.cpuArchitecture(obj_pass)
          this.getArchitecture(obj_pass)
          this.enableDebug(obj_pass)

          //ios
          this.isBackgroundRefreshAuthorized(obj_pass)
          this.getBackgroundRefreshStatus(obj_pass)
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //android
      switchToWirelessSettings: function (obj) {
        console.log(c.cyan + '[start]', 'switchToWirelessSettings')
        cordova.plugins.diagnostic.switchToWirelessSettings()
      },
      switchToMobileDataSettings: function (obj) {
        console.log(c.cyan + '[start]', 'switchToMobileDataSettings')
        cordova.plugins.diagnostic.switchToMobileDataSettings()
      },
      getPermissionAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getPermissionAuthorizationStatus')
        cordova.plugins.diagnostic.getPermissionAuthorizationStatus(
          function (status) {
            switch (status) {
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log(
                  '[getPermissionAuthorizationStatus]: \n',
                  '[android] \n',
                  'Permission granted to use the camera'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log(
                  '[getPermissionAuthorizationStatus]: \n',
                  '[android] \n',
                  'Permission to use the camera has not been requested yet'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                console.log(
                  '[getPermissionAuthorizationStatus]: \n',
                  '[android] \n',
                  'Permission denied to use the camera - ask again?'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log(
                  '[getPermissionAuthorizationStatus]: \n',
                  '[android] \n',
                  "Permission permanently denied to use the camera - guess we won't be using it then!"
                )
                break
            }
          },
          function (error) {
            console.error(
              '[getPermissionAuthorizationStatus]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          },
          cordova.plugins.diagnostic.permission.CAMERA
        )
      },
      getPermissionsAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getPermissionsAuthorizationStatus')
        cordova.plugins.diagnostic.getPermissionsAuthorizationStatus(
          function (statuses) {
            for (var permission in statuses) {
              switch (statuses[permission]) {
                case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                  console.log(
                    '[getPermissionsAuthorizationStatus]: \n',
                    '[android] \n',
                    'Permission granted to use ' + permission
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                  console.log(
                    '[getPermissionsAuthorizationStatus]: \n',
                    '[android] \n',
                    'Permission to use ' +
                      permission +
                      ' has not been requested yet'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                  console.log(
                    '[getPermissionsAuthorizationStatus]: \n',
                    '[android] \n',
                    'Permission denied to use ' + permission + ' - ask again?'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                  console.log(
                    '[getPermissionsAuthorizationStatus]: \n',
                    '[android] \n',
                    'Permission permanently denied to use ' +
                      permission +
                      " - guess we won't be using it then!"
                  )
                  break
              }
            }
          },
          function (error) {
            console.error(
              '[getPermissionsAuthorizationStatus]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          },
          [
            cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION,
            cordova.plugins.diagnostic.permission.ACCESS_COARSE_LOCATION,
          ]
        )
      },
      requestRuntimePermission: function (obj) {
        console.log(c.cyan + '[start]', 'requestRuntimePermission')
        cordova.plugins.diagnostic.requestRuntimePermission(
          function (status) {
            switch (status) {
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log(
                  '[requestRuntimePermission]: \n',
                  '[android] \n',
                  'Permission granted to use the camera'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log(
                  '[requestRuntimePermission]: \n',
                  '[android] \n',
                  'Permission to use the camera has not been requested yet'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCe:
                console.log(
                  '[requestRuntimePermission]: \n',
                  '[android] \n',
                  'Permission denied to use the camera - ask again?'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log(
                  '[requestRuntimePermission]: \n',
                  '[android] \n',
                  "Permission permanently denied to use the camera - guess we won't be using it then!"
                )
                break
            }
          },
          function (error) {
            console.error(
              '[requestRuntimePermission]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          },
          cordova.plugins.diagnostic.permission.CAMERA
        )
      },
      requestRuntimePermissions: function (obj) {
        console.log(c.cyan + '[start]', 'requestRuntimePermissions')
        cordova.plugins.diagnostic.requestRuntimePermissions(
          function (statuses) {
            for (var permission in statuses) {
              switch (statuses[permission]) {
                case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                  console.log(
                    '[requestRuntimePermissions]: \n',
                    '[android] \n',
                    'Permission granted to use ' + permission
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                  console.log(
                    '[requestRuntimePermissions]: \n',
                    '[android] \n',
                    'Permission to use ' +
                      permission +
                      ' has not been requested yet'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                  console.log(
                    '[requestRuntimePermissions]: \n',
                    '[android] \n',
                    'Permission denied to use ' + permission + ' - ask again?'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                  console.log(
                    '[requestRuntimePermissions]: \n',
                    '[android] \n',
                    'Permission permanently denied to use ' +
                      permission +
                      " - guess we won't be using it then!"
                  )
                  break
              }
            }
          },
          function (error) {
            console.error(
              '[requestRuntimePermissions]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          },
          [
            cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION,
            cordova.plugins.diagnostic.permission.ACCESS_COARSE_LOCATION,
          ]
        )
      },
      isRequestingPermission: function (obj) {
        console.log(c.cyan + '[start]', 'isRequestingPermission')
        var isRequesting = cordova.plugins.diagnostic.isRequestingPermission()
        function requestSomePermissions() {
          //some
        }
        console.log(
          '[isRequestingPermission]: \n',
          '[android] \n',
          isRequesting
        )
        if (!isRequesting) {
          requestSomePermissions()
        } else {
          cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(
            function (statuses) {
              cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(
                null
              ) // de-register handler after single call
              requestSomePermissions()
            }
          )
        }
      },
      registerPermissionRequestCompleteHandler: function (obj) {
        console.log(
          c.cyan + '[start]',
          'registerPermissionRequestCompleteHandler'
        )

        function onPermissionRequestComplete(statuses) {
          console.info(
            '[registerPermissionRequestCompleteHandler]: \n',
            '[android] \n',
            'Permission request complete'
          )
          for (var permission in statuses) {
            switch (statuses[permission]) {
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log(
                  '[registerPermissionRequestCompleteHandler]: \n',
                  '[android] \n',
                  'Permission granted to use ' + permission
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log(
                  '[registerPermissionRequestCompleteHandler]: \n',
                  '[android] \n',
                  'Permission to use ' +
                    permission +
                    ' has not been requested yet'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                console.log(
                  '[registerPermissionRequestCompleteHandler]: \n',
                  '[android] \n',
                  'Permission denied to use ' + permission
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log(
                  '[registerPermissionRequestCompleteHandler]: \n',
                  '[android] \n',
                  'Permission permanently denied to use ' + permission
                )
                break
            }
          }
          cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(
            null
          ) // de-register handler
        }
        cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(
          onPermissionRequestComplete
        )
      },
      isDataRoamingEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isDataRoamingEnabled')
        cordova.plugins.diagnostic.isDataRoamingEnabled(
          function (enabled) {
            console.log(
              '[isDataRoamingEnabled]: \n',
              '[android] \n',
              'Data roaming is ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isDataRoamingEnabled]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isADBModeEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isADBModeEnabled')
        cordova.plugins.diagnostic.isADBModeEnabled(
          function (enabled) {
            console.log(
              '[isADBModeEnabled]: \n',
              '[android] \n',
              'ADB mode(debug mode) is ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isADBModeEnabled]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isDeviceRooted: function (obj) {
        console.log(c.cyan + '[start]', 'isDeviceRooted')
        cordova.plugins.diagnostic.isDeviceRooted(
          function (rooted) {
            console.log(
              '[isDeviceRooted]: \n',
              '[android] \n',
              'device is ' + (rooted ? 'rooted' : 'not rooted')
            )
          },
          function (error) {
            console.error(
              '[isDeviceRooted]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      restart: function (obj) {
        console.log(c.cyan + '[start]', 'restart')
        /*
        var onError = function(error) {
          console.error(
            '[restart]: \n',
            '[android] \n',
            'The following error occurred: ' + error
          )
        }

        // Warm restart
        cordova.plugins.diagnostic.restart(onError, false)

        // Cold restart
        cordova.plugins.diagnostic.restart(onError, true)
        */
      },

      //ios
      isBackgroundRefreshAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isBackgroundRefreshAuthorized')
        cordova.plugins.diagnostic.isBackgroundRefreshAuthorized(
          function (authorized) {
            console.log(
              '[isBackgroundRefreshAuthorized]: \n',
              '[ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'not authorized') +
                ' to perform background refresh'
            )
          },
          function (error) {
            console.error(
              '[isBackgroundRefreshAuthorized]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getBackgroundRefreshStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getBackgroundRefreshStatus')
        cordova.plugins.diagnostic.getBackgroundRefreshStatus(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getBackgroundRefreshStatus]: \n',
                '[ios] \n',
                'Background refresh is allowed'
              )
            }
          },
          function (error) {
            console.error(
              '[getBackgroundRefreshStatus]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },

      //android/ios
      switchToSettings: function (obj) {
        console.log(c.cyan + '[start]', 'switchToSettings')
        cordova.plugins.diagnostic.switchToSettings(
          function () {
            console.log(
              '[switchToSettings]: \n',
              'Successfully switched to Settings app'
            )
          },
          function (error) {
            console.error(
              '[switchToSettings]: \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      PermissionStatus: function (obj) {
        console.log(c.cyan + '[start]', 'PermissionStatus')

        //android
        let GRANTED_android =
          cordova.plugins.diagnostic.permissionStatus.GRANTED
        let NOT_REQUESTED_android =
          cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED
        let DENIED_ONCE =
          cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE
        let DENIED_ALWAYS_android =
          cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS
        let android = [
          GRANTED_android,
          NOT_REQUESTED_android,
          DENIED_ONCE,
          DENIED_ALWAYS_android,
        ]

        //ios
        let GRANTED_WHEN_IN_USE =
          cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE
        let GRANTED_ios = cordova.plugins.diagnostic.permissionStatus.GRANTED
        let RESTRICTED = cordova.plugins.diagnostic.permissionStatus.RESTRICTED
        let DENIED_ALWAYS_ios =
          cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS
        let NOT_REQUESTED_ios =
          cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED
        let ios = [
          GRANTED_WHEN_IN_USE,
          GRANTED_ios,
          RESTRICTED,
          DENIED_ALWAYS_ios,
          NOT_REQUESTED_ios,
        ]
        console.log('[PermissionStatus]: \n', 'android:', android, 'ios:', ios)
      },
      cpuArchitecture: function (obj) {
        console.log(c.cyan + '[start]', 'cpuArchitecture')

        //
        let cpu = cordova.plugins.diagnostic.cpuArchitecture

        //android/ios
        let UNKNOWN = cpu.UNKNOWN
        let ARMv6 = cpu.ARMv6
        let ARMv7 = cpu.ARMv7
        let ARMv8 = cpu.ARMv8
        let x86 = cpu.x86
        let X86_64 = cpu.X86_64

        let android_ios = [UNKNOWN, ARMv6, ARMv7, ARMv8, x86, X86_64]

        //android
        let MIPS = cpu.MIPS
        let MIPS_64 = cpu.MIPS_64

        let android = [MIPS, MIPS_64]

        console.log(
          '[cpuArchitecture]: \n',
          '[android/ios] \n',
          'android/ios:',
          android_ios,
          'android: ',
          android
        )
      },
      getArchitecture: function (obj) {
        console.log(c.cyan + '[start]', 'getArchitecture')
        cordova.plugins.diagnostic.getArchitecture(
          function (arch) {
            if (
              arch === cordova.plugins.diagnostic.cpuArchitecture.X86 ||
              arch === cordova.plugins.diagnostic.cpuArchitecture.X86_64
            ) {
              console.log(
                '[getArchitecture]: \n',
                '[android/ios] \n',
                'Intel inside'
              )
            }
          },
          function (error) {
            console.error('[getArchitecture]: \n', '[android/ios] \n', error)
          }
        )
      },

      enableDebug: function (obj) {
        console.log(c.cyan + '[start]', 'enableDebug')
        cordova.plugins.diagnostic.enableDebug(function () {
          console.log(
            '[enableDebug]: \n',
            '[android/ios] \n',
            'Debug is enabled'
          )
        })
      },
    },

    location: {
      test: function () {
        console.log(c.cyan + '[start]', 'location test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.locationMode(obj_pass)
          this.isLocationAvailable(obj_pass)
          this.isLocationEnabled(obj_pass)
          this.isLocationAuthorized(obj_pass)
          this.getLocationAuthorizationStatus(obj_pass)
          this.requestLocationAuthorization(obj_pass)
          this.registerLocationStateChangeHandler(obj_pass)
          this.switchToLocationSettings(obj_pass)

          //android
          this.isGpsLocationAvailable(obj_pass)
          this.isGpsLocationEnabled(obj_pass)
          this.isNetworkLocationAvailable(obj_pass)
          this.isNetworkLocationEnabled(obj_pass)
          this.getLocationMode(obj_pass)
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.locationMode(obj_pass)
          this.isLocationAvailable(obj_pass)
          this.isLocationEnabled(obj_pass)
          this.isLocationAuthorized(obj_pass)
          this.getLocationAuthorizationStatus(obj_pass)
          this.requestLocationAuthorization(obj_pass)
          this.registerLocationStateChangeHandler(obj_pass)
          this.switchToLocationSettings(obj_pass)

          //ios
          this.locationAuthorizationMode(obj_pass)
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //android
      locationMode: function (obj) {
        console.log(c.cyan + '[start]', 'locationMode')
        cordova.plugins.diagnostic.getLocationMode(
          function (locationMode) {
            switch (locationMode) {
              case cordova.plugins.diagnostic.locationMode.HIGH_ACCURACY:
                console.log(
                  '[locationMode]: \n',
                  '[android] \n',
                  'High accuracy'
                )
                break
              case cordova.plugins.diagnostic.locationMode.BATTERY_SAVING:
                console.log(
                  '[locationMode]: \n',
                  '[android] \n',
                  'Battery saving'
                )
                break
              case cordova.plugins.diagnostic.locationMode.DEVICE_ONLY:
                console.log('[locationMode]: \n', '[android] \n', 'Device only')
                break
              case cordova.plugins.diagnostic.locationMode.LOCATION_OFF:
                console.log(
                  '[locationMode]: \n',
                  '[android] \n',
                  'Location off'
                )
                break
            }
          },
          function (error) {
            console.error(
              '[locationMode]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isGpsLocationAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isGpsLocationAvailable')
        cordova.plugins.diagnostic.isGpsLocationAvailable(
          function (available) {
            console.log(
              '[isGpsLocationAvailable]: \n',
              '[android] \n',
              'GPS location is ' + (available ? 'available' : 'not available')
            )
          },
          function (error) {
            console.error(
              '[isGpsLocationAvailable]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isGpsLocationEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isGpsLocationEnabled')
        cordova.plugins.diagnostic.isGpsLocationEnabled(
          function (enabled) {
            console.log(
              '[isGpsLocationEnabled]: \n',
              '[android] \n',
              'GPS location is ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isGpsLocationEnabled]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isNetworkLocationAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isNetworkLocationAvailable')
        cordova.plugins.diagnostic.isNetworkLocationAvailable(
          function (available) {
            console.log(
              '[isNetworkLocationAvailable]: \n',
              '[android] \n',
              'Network location is ' +
                (available ? 'available' : 'not available')
            )
          },
          function (error) {
            console.error(
              '[isNetworkLocationAvailable]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isNetworkLocationEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isNetworkLocationEnabled')
        cordova.plugins.diagnostic.isNetworkLocationEnabled(
          function (enabled) {
            console.log(
              '[isNetworkLocationEnabled]: \n',
              '[android] \n',
              'Network location is ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isNetworkLocationEnabled]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getLocationMode: function (obj) {
        console.log(c.cyan + '[start]', 'getLocationMode')
        cordova.plugins.diagnostic.getLocationMode(
          function (locationMode) {
            switch (locationMode) {
              case cordova.plugins.diagnostic.locationMode.HIGH_ACCURACY:
                console.log(
                  '[getLocationMode]: \n',
                  '[android] \n',
                  'High accuracy'
                )
                break
              case cordova.plugins.diagnostic.locationMode.BATTERY_SAVING:
                console.log(
                  '[getLocationMode]: \n',
                  '[android] \n',
                  'Battery saving'
                )
                break
              case cordova.plugins.diagnostic.locationMode.DEVICE_ONLY:
                console.log(
                  '[getLocationMode]: \n',
                  '[android] \n',
                  'Device only'
                )
                break
              case cordova.plugins.diagnostic.locationMode.LOCATION_OFF:
                console.log(
                  '[getLocationMode]: \n',
                  '[android] \n',
                  'Location off'
                )
                break
            }
          },
          function (error) {
            console.error(
              '[getLocationMode]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },

      //ios
      locationAuthorizationMode: function (obj) {
        console.log(c.cyan + '[start]', 'locationAuthorizationMode')
        cordova.plugins.diagnostic.requestLocationAuthorization(
          function (status) {
            console.log(
              '[locationAuthorizationMode]: \n',
              '[android] \n',
              status
            )
          },
          function (error) {
            console.error(
              '[locationAuthorizationMode]: \n',
              '[android] \n',
              error
            )
          },
          cordova.plugins.diagnostic.locationAuthorizationMode.ALWAYS
        )
      },

      //android/ios
      isLocationAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isLocationAvailable')
        cordova.plugins.diagnostic.isLocationAvailable(
          function (available) {
            console.log(
              '[isLocationAvailable]: \n',
              '[android/ios] \n',
              'Location is ' + (available ? 'available' : 'not available')
            )
          },
          function (error) {
            console.error(
              '[isLocationAvailable]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },

      isLocationEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isLocationEnabled')
        cordova.plugins.diagnostic.isLocationEnabled(
          function (enabled) {
            console.log(
              '[isLocationEnabled]: \n',
              '[android/ios] \n',
              'Location setting is ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isLocationEnabled]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },

      isLocationAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isLocationAuthorized')
        cordova.plugins.diagnostic.isLocationAuthorized(
          function (authorized) {
            console.log(
              '[isLocationAuthorized]: \n',
              '[android/ios] \n',
              'Location is ' + (authorized ? 'authorized' : 'unauthorized')
            )
          },
          function (error) {
            console.error(
              '[isLocationAuthorized]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },

      getLocationAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getLocationAuthorizationStatus')
        cordova.plugins.diagnostic.getLocationAuthorizationStatus(
          function (status) {
            switch (status) {
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log(
                  '[getLocationAuthorizationStatus]: \n',
                  '[android/ios] \n',
                  'Permission not requested'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log(
                  '[getLocationAuthorizationStatus]: \n',
                  '[android/ios] \n',
                  'Permission denied'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log(
                  '[getLocationAuthorizationStatus]: \n',
                  '[android/ios] \n',
                  'Permission granted always'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus
                .GRANTED_WHEN_IN_USE:
                console.log(
                  '[getLocationAuthorizationStatus]: \n',
                  '[android/ios] \n',
                  'Permission granted only when in use'
                )
                break
            }
          },
          function (error) {
            console.error(
              '[getLocationAuthorizationStatus]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      requestLocationAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestLocationAuthorization')
        if (device.platform.toLowerCase() === 'android') {
          cordova.plugins.diagnostic.requestLocationAuthorization(
            function (status) {
              switch (status) {
                case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                  console.log(
                    '[requestLocationAuthorization]: \n',
                    '[android/ios] \n',
                    'Permission not requested'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                  console.log(
                    '[requestLocationAuthorization]: \n',
                    '[android/ios] \n',
                    'Permission granted'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                  console.log(
                    '[requestLocationAuthorization]: \n',
                    '[android/ios] \n',
                    'Permission denied'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                  console.log(
                    '[requestLocationAuthorization]: \n',
                    '[android/ios] \n',
                    'Permission permanently denied'
                  )
                  break
              }
            },
            function (error) {
              console.error(error)
            }
          )
        } else if (device.platform.toLowerCase() === 'ios') {
          cordova.plugins.diagnostic.requestLocationAuthorization(
            function (status) {
              switch (status) {
                case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                  console.log(
                    '[requestLocationAuthorization]: \n',
                    '[android/ios] \n',
                    'Permission not requested'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                  console.log(
                    '[requestLocationAuthorization]: \n',
                    '[android/ios] \n',
                    'Permission denied'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                  console.log(
                    '[requestLocationAuthorization]: \n',
                    '[android/ios] \n',
                    'Permission granted always'
                  )
                  break
                case cordova.plugins.diagnostic.permissionStatus
                  .GRANTED_WHEN_IN_USE:
                  console.log(
                    '[requestLocationAuthorization]: \n',
                    '[android/ios] \n',
                    'Permission granted only when in use'
                  )
                  break
              }
            },
            function (error) {
              console.error(
                '[requestLocationAuthorization]: \n',
                '[android/ios] \n',
                error
              )
            },
            cordova.plugins.diagnostic.locationAuthorizationMode.ALWAYS
          )
        } else {
        }
      },
      registerLocationStateChangeHandler: function (obj) {
        console.log(c.cyan + '[start]', 'registerLocationStateChangeHandler')
        cordova.plugins.diagnostic.registerLocationStateChangeHandler(function (
          state
        ) {
          if (
            (device.platform.toLowerCase() === 'android' &&
              state !== cordova.plugins.diagnostic.locationMode.LOCATION_OFF) ||
            (device.platform.toLowerCase() === 'ios' &&
              (state === cordova.plugins.diagnostic.permissionStatus.GRANTED ||
                state ===
                  cordova.plugins.diagnostic.permissionStatus
                    .GRANTED_WHEN_IN_USE))
          ) {
            console.log(
              '[registerLocationStateChangeHandler]: \n',
              '[android/ios] \n',
              'Location is available'
            )
          }
        })
      },
      switchToLocationSettings: function (obj) {
        console.log(c.cyan + '[start]', 'switchToLocationSettings')
        cordova.plugins.diagnostic.switchToLocationSettings()
      },
    },
    bluetooth: {
      test: function () {
        console.log(c.cyan + '[start]', 'bluetooth test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.bluetoothState(obj_pass)
          this.isBluetoothAvailable(obj_pass)
          this.getBluetoothState(obj_pass)
          this.registerBluetoothStateChangeHandler(obj_pass)

          //android
          this.isBluetoothEnabled(obj_pass)
          this.hasBluetoothSupport(obj_pass)
          this.hasBluetoothLESupport(obj_pass)
          this.hasBluetoothLEPeripheralSupport(obj_pass)
          this.setBluetoothState(obj_pass)
          this.switchToBluetoothSettings(obj_pass)
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.bluetoothState(obj_pass)
          this.isBluetoothAvailable(obj_pass)
          this.getBluetoothState(obj_pass)
          this.registerBluetoothStateChangeHandler(obj_pass)

          //ios
          this.requestBluetoothAuthorization(obj_pass)
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },
      //android/ios
      bluetoothState: function (obj) {
        console.log(c.cyan + '[start]', 'bluetoothState')
        let state = cordova.plugins.diagnostic.bluetoothState
        //android/ios
        let UNKNOWN = state.UNKNOWN
        let POWERED_OFF = state.POWERED_OFF
        let POWERED_ON = state.POWERED_ON

        //android
        let POWERING_OFF = state.POWERING_OFF
        let POWERING_ON = state.POWERING_ON

        //ios
        let RESETTING = state.RESETTING
        let UNAUTHORIZED = state.UNAUTHORIZED

        let ios = [UNKNOWN, POWERED_OFF, POWERED_ON, RESETTING, UNAUTHORIZED]
        let android = [
          UNKNOWN,
          POWERED_OFF,
          POWERED_ON,
          POWERING_OFF,
          POWERING_ON,
        ]
        console.log(
          '[bluetoothState]: \n',
          '[android/ios] \n',
          'android: ',
          android,
          'ios: ',
          ios
        )
        cordova.plugins.diagnostic.getBluetoothState(
          function (state) {
            if (
              state === cordova.plugins.diagnostic.bluetoothState.POWERED_ON
            ) {
              // Do something with Bluetooth
            }
          },
          function (error) {
            console.error(error)
          }
        )
      },
      isBluetoothAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isBluetoothAvailable')
        cordova.plugins.diagnostic.isBluetoothAvailable(
          function (available) {
            console.log(
              '[isBluetoothAvailable]: \n',
              '[android/ios] \n',
              'Bluetooth is ' + (available ? 'available' : 'not available')
            )
          },
          function (error) {
            console.error(
              '[isBluetoothAvailable]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getBluetoothState: function (obj) {
        console.log(c.cyan + '[start]', 'getBluetoothState')
        cordova.plugins.diagnostic.getBluetoothState(
          function (state) {
            if (
              state === cordova.plugins.diagnostic.bluetoothState.POWERED_ON
            ) {
              console.log(
                '[getBluetoothState]: \n',
                '[android/ios] \n',
                'Bluetooth is able to connect'
              )
            }
          },
          function (error) {
            console.error('[getBluetoothState]: \n', '[android/ios] \n', error)
          }
        )
      },
      registerBluetoothStateChangeHandler: function (obj) {
        console.log(c.cyan + '[start]', 'registerBluetoothStateChangeHandler')
        cordova.plugins.diagnostic.registerBluetoothStateChangeHandler(
          function (state) {
            if (
              state === cordova.plugins.diagnostic.bluetoothState.POWERED_ON
            ) {
              console.log(
                '[registerBluetoothStateChangeHandler]: \n',
                '[android/ios] \n',
                'Bluetooth is able to connect'
              )
            }
          }
        )
      },

      //android
      isBluetoothEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isBluetoothEnabled')
        cordova.plugins.diagnostic.isBluetoothEnabled(
          function (enabled) {
            console.log(
              '[isBluetoothEnabled]: \n',
              '[android] \n',
              'Bluetooth is ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isBluetoothEnabled]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      hasBluetoothSupport: function (obj) {
        console.log(c.cyan + '[start]', 'hasBluetoothSupport')
        cordova.plugins.diagnostic.hasBluetoothSupport(
          function (supported) {
            console.log(
              '[hasBluetoothSupport]: \n',
              '[android] \n',
              'Bluetooth is ' + (supported ? 'supported' : 'unsupported')
            )
          },
          function (error) {
            console.error(
              '[hasBluetoothSupport]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      hasBluetoothLESupport: function (obj) {
        console.log(c.cyan + '[start]', 'hasBluetoothLESupport')
        cordova.plugins.diagnostic.hasBluetoothLESupport(
          function (supported) {
            console.log(
              '[hasBluetoothLESupport]: \n',
              '[android] \n',
              'Bluetooth LE is ' + (supported ? 'supported' : 'unsupported')
            )
          },
          function (error) {
            console.error(
              '[hasBluetoothLESupport]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      hasBluetoothLEPeripheralSupport: function (obj) {
        console.log(c.cyan + '[start]', 'hasBluetoothLEPeripheralSupport')
        cordova.plugins.diagnostic.hasBluetoothLEPeripheralSupport(
          function (supported) {
            console.log(
              '[hasBluetoothLEPeripheralSupport]: \n',
              '[android] \n',
              'Bluetooth LE Peripheral Mode is ' +
                (supported ? 'supported' : 'unsupported')
            )
          },
          function (error) {
            console.error(
              '[hasBluetoothLEPeripheralSupport]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      switchToBluetoothSettings: function (obj) {
        console.log(c.cyan + '[start]', 'switchToBluetoothSettings')
        cordova.plugins.diagnostic.switchToBluetoothSettings()
      },

      setBluetoothState: function (obj) {
        console.log(c.cyan + '[start]', 'setBluetoothState')
        cordova.plugins.diagnostic.setBluetoothState(
          function () {
            console.log(
              '[setBluetoothState]: \n',
              '[android] \n',
              'Bluetooth was enabled'
            )
          },
          function (error) {
            console.error(
              '[setBluetoothState]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          },
          true
        )
      },

      //ios
      requestBluetoothAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestBluetoothAuthorization')
        cordova.plugins.diagnostic.requestBluetoothAuthorization(
          function () {
            console.log(
              '[requestBluetoothAuthorization]: \n',
              '[ios] \n',
              'Bluetooth authorization was requested.'
            )
          },
          function (error) {
            console.error(
              '[requestBluetoothAuthorization]: \n',
              '[ios] \n',
              error
            )
          }
        )
      },
    },
    wifi: {
      test: function () {
        console.log(c.cyan + '[start]', 'wifi test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.isWifiAvailable(obj_pass)
          this.isWifiEnabled(obj_pass)

          //android
          this.setWifiState(obj_pass)
          this.switchToWifiSettings(obj_pass)
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.isWifiAvailable(obj_pass)
          this.isWifiEnabled(obj_pass)

          //ios
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //android/ios
      isWifiAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isWifiAvailable')
        cordova.plugins.diagnostic.isWifiAvailable(
          function (available) {
            console.log(
              '[isWifiAvailable]: \n',
              '[android/ios] \n',
              'WiFi is ' + (available ? 'available' : 'not available')
            )
          },
          function (error) {
            console.error(
              '[isWifiAvailable]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isWifiEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isWifiEnabled')
        cordova.plugins.diagnostic.isWifiEnabled(
          function (enabled) {
            console.log(
              '[isWifiEnabled]: \n',
              '[android/ios] \n',
              'WiFi is ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isWifiEnabled]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },

      //android
      setWifiState: function (obj) {
        console.log(c.cyan + '[start]', 'setWifiState')
        cordova.plugins.diagnostic.setWifiState(
          function () {
            console.log(
              '[setWifiState]: \n',
              '[android] \n',
              'Wifi was enabled'
            )
          },
          function (error) {
            console.error(
              '[setWifiState]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          },
          true
        )
      },
      switchToWifiSettings: function (obj) {
        console.log(c.cyan + '[start]', 'switchToWifiSettings')
        cordova.plugins.diagnostic.switchToWifiSettings()
      },
    },

    camera: {
      test: function () {
        console.log(c.cyan + '[start]', 'camera test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.isCameraPresent(obj_pass)
          this.isCameraAvailable(obj_pass)
          this.isCameraAuthorized(obj_pass)
          this.getCameraAuthorizationStatus(obj_pass)
          this.requestCameraAuthorization(obj_pass)

          //android
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.isCameraPresent(obj_pass)
          this.isCameraAvailable(obj_pass)
          this.isCameraAuthorized(obj_pass)
          this.getCameraAuthorizationStatus(obj_pass)
          this.requestCameraAuthorization(obj_pass)

          //ios
          this.isCameraRollAuthorized(obj_pass)
          this.getCameraRollAuthorizationStatus(obj_pass)
          this.requestCameraRollAuthorization(obj_pass)
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //android/ios
      isCameraPresent: function (obj) {
        console.log(c.cyan + '[start]', 'isCameraPresent')
        cordova.plugins.diagnostic.isCameraPresent(
          function (present) {
            console.log(
              '[isCameraPresent]: \n',
              '[android/ios] \n',
              'Camera is ' + (present ? 'present' : 'absent')
            )
          },
          function (error) {
            console.error(
              '[isCameraPresent]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isCameraAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isCameraAvailable')
        cordova.plugins.diagnostic.isCameraAvailable({
          successCallback: function (available) {
            console.log(
              '[isCameraAvailable]: \n',
              '[android/ios] \n',
              'Camera is ' + (available ? 'available' : 'not available')
            )
          },
          errorCallback: function (error) {
            console.error(
              '[isCameraAvailable]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          externalStorage: false,
        })

        cordova.plugins.diagnostic.isCameraAvailable(
          function (available) {
            console.log(
              'Camera is ' + (available ? 'available' : 'not available')
            )
          },
          function (error) {
            console.error('The following error occurred: ' + error)
          },
          {
            externalStorage: false,
          }
        )

        cordova.plugins.diagnostic.isCameraAvailable(
          function (available) {
            console.log(
              'Camera is ' + (available ? 'available' : 'not available')
            )
          },
          function (error) {
            console.error('The following error occurred: ' + error)
          },
          false
        )
      },
      isCameraAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isCameraAuthorized')
        cordova.plugins.diagnostic.isCameraAuthorized({
          successCallback: function (authorized) {
            console.log(
              '[isCameraAuthorized]: \n',
              '[android/ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'denied') +
                ' access to the camera'
            )
          },
          errorCallback: function (error) {
            console.error(
              '[isCameraAuthorized]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          externalStorage: false,
        })

        cordova.plugins.diagnostic.isCameraAuthorized(
          function (authorized) {
            console.log(
              '[isCameraAuthorized]: \n',
              '[android/ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'denied') +
                ' access to the camera'
            )
          },
          function (error) {
            console.error(
              '[isCameraAuthorized]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          {
            externalStorage: false,
          }
        )

        cordova.plugins.diagnostic.isCameraAuthorized(
          function (authorized) {
            console.log(
              '[isCameraAuthorized]: \n',
              '[android/ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'denied') +
                ' access to the camera'
            )
          },
          function (error) {
            console.error(
              '[isCameraAuthorized]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          false
        )
      },
      getCameraAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getCameraAuthorizationStatus')
        cordova.plugins.diagnostic.getCameraAuthorizationStatus({
          successCallback: function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getCameraAuthorizationStatus]: \n',
                '[android/ios] \n',
                'Camera use is authorized'
              )
            }
          },
          errorCallback: function (error) {
            console.error(
              '[getCameraAuthorizationStatus]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          externalStorage: false,
        })

        cordova.plugins.diagnostic.getCameraAuthorizationStatus(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getCameraAuthorizationStatus]: \n',
                '[android/ios] \n',
                'Camera use is authorized'
              )
            }
          },
          function (error) {
            console.error(
              '[getCameraAuthorizationStatus]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          {
            externalStorage: false,
          }
        )

        cordova.plugins.diagnostic.getCameraAuthorizationStatus(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getCameraAuthorizationStatus]: \n',
                '[android/ios] \n',
                'Camera use is authorized'
              )
            }
          },
          function (error) {
            console.error(
              '[getCameraAuthorizationStatus]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          false
        )
      },

      requestCameraAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestCameraAuthorization')
        cordova.plugins.diagnostic.requestCameraAuthorization({
          successCallback: function (status) {
            console.log(
              '[requestCameraAuthorization]: \n',
              '[android/ios] \n',
              'Authorization request for camera use was ' +
                (status == cordova.plugins.diagnostic.permissionStatus.GRANTED
                  ? 'granted'
                  : 'denied')
            )
          },
          errorCallback: function (error) {
            console.error(
              '[requestCameraAuthorization]: \n',
              '[android/ios] \n',
              error
            )
          },
          externalStorage: false,
        })

        cordova.plugins.diagnostic.requestCameraAuthorization(
          function (status) {
            console.log(
              '[requestCameraAuthorization]: \n',
              '[android/ios] \n',
              'Authorization request for camera use was ' +
                (status == cordova.plugins.diagnostic.permissionStatus.GRANTED
                  ? 'granted'
                  : 'denied')
            )
          },
          function (error) {
            console.error(
              '[requestCameraAuthorization]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          {
            externalStorage: false,
          }
        )

        cordova.plugins.diagnostic.requestCameraAuthorization(
          function (status) {
            console.log(
              '[requestCameraAuthorization]: \n',
              '[android/ios] \n',
              'Authorization request for camera use was ' +
                (status == cordova.plugins.diagnostic.permissionStatus.GRANTED
                  ? 'granted'
                  : 'denied')
            )
          },
          function (error) {
            console.error(
              '[requestCameraAuthorization]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          },
          false
        )
      },

      //ios
      isCameraRollAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isCameraRollAuthorized')
        cordova.plugins.diagnostic.isCameraRollAuthorized(
          function (authorized) {
            console.log(
              '[isCameraRollAuthorized]: \n',
              '[ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'denied') +
                ' access to the camera roll'
            )
          },
          function (error) {
            console.error(
              '[isCameraRollAuthorized]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getCameraRollAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getCameraRollAuthorizationStatus')
        cordova.plugins.diagnostic.getCameraRollAuthorizationStatus(
          function (status) {
            switch (status) {
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log(
                  '[getCameraRollAuthorizationStatus]: \n',
                  '[ios] \n',
                  'Permission not requested'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log(
                  '[getCameraRollAuthorizationStatus]: \n',
                  '[ios] \n',
                  'Permission denied'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log(
                  '[getCameraRollAuthorizationStatus]: \n',
                  '[ios] \n',
                  'Permission granted'
                )
                break
            }
          },
          function (error) {
            console.error(
              '[getCameraRollAuthorizationStatus]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      requestCameraRollAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestCameraRollAuthorization')
        cordova.plugins.diagnostic.requestCameraRollAuthorization(
          function (status) {
            console.log(
              '[requestCameraRollAuthorization]: \n',
              '[ios] \n',
              'Authorization request for camera roll was ' +
                (status == cordova.plugins.diagnostic.permissionStatus.GRANTED
                  ? 'granted'
                  : 'denied')
            )
          },
          function (error) {
            console.error(
              '[requestCameraRollAuthorization]: \n',
              '[ios] \n',
              error
            )
          }
        )
      },
    },
    notification: {
      test: function () {
        console.log(c.cyan + '[start]', 'notification test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.isRemoteNotificationsEnabled(obj_pass)

          //android
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.isRemoteNotificationsEnabled(obj_pass)

          //ios
          this.remoteNotificationType(obj_pass)
          this.isRegisteredForRemoteNotifications(obj_pass)
          this.getRemoteNotificationTypes(obj_pass)
          this.getRemoteNotificationsAuthorizationStatus(obj_pass)
          this.requestRemoteNotificationsAuthorization(obj_pass)
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },
      //ios
      remoteNotificationType: function (obj) {
        console.log(c.cyan + '[start]', 'remoteNotificationType')

        let noti = cordova.plugins.diagnostic.remoteNotificationType

        let ALERT = noti.ALERT
        let SOUND = noti.SOUND
        let BADGE = noti.BADGE

        let ios = [ALERT, SOUND, BADGE]
        console.log('[remoteNotificationType]: \n', '[ios] \n', ios)

        cordova.plugins.diagnostic.getRemoteNotificationTypes(
          function (types) {
            if (
              types[cordova.plugins.diagnostic.remoteNotificationType.ALERT]
            ) {
              console.log(
                '[remoteNotificationType]: \n',
                '[ios] \n',
                'Has permission to display alerts'
              )
            }
            if (
              types[cordova.plugins.diagnostic.remoteNotificationType.SOUND]
            ) {
              console.log(
                '[remoteNotificationType]: \n',
                '[ios] \n',
                'Has permission to play sounds'
              )
            }
            if (
              types[cordova.plugins.diagnostic.remoteNotificationType.BADGE]
            ) {
              console.log(
                '[remoteNotificationType]: \n',
                '[ios] \n',
                'Has permission to modify icon badge'
              )
            }
          },
          function (error) {
            console.error(
              '[remoteNotificationType]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isRegisteredForRemoteNotifications: function (obj) {
        console.log(c.cyan + '[start]', 'isRegisteredForRemoteNotifications')
        cordova.plugins.diagnostic.isRegisteredForRemoteNotifications(
          function (registered) {
            console.log(
              '[isRegisteredForRemoteNotifications]: \n',
              '[ios] \n',
              'Device ' +
                (registered ? 'is' : "isn't") +
                ' registered for remote notifications'
            )
          },
          function (error) {
            console.error(
              '[isRegisteredForRemoteNotifications]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getRemoteNotificationTypes: function (obj) {
        console.log(c.cyan + '[start]', 'getRemoteNotificationTypes')
        cordova.plugins.diagnostic.getRemoteNotificationTypes(
          function (types) {
            for (var type in types) {
              console.log(
                '[getRemoteNotificationTypes]: \n',
                '[ios] \n',
                type + ' is ' + (types[type] ? 'enabled' : 'disabled')
              )
            }
          },
          function (error) {
            console.error(
              '[getRemoteNotificationTypes]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getRemoteNotificationsAuthorizationStatus: function (obj) {
        console.log(
          c.cyan + '[start]',
          'getRemoteNotificationsAuthorizationStatus'
        )
        cordova.plugins.diagnostic.getRemoteNotificationsAuthorizationStatus(
          function (status) {
            switch (status) {
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                console.log(
                  '[getRemoteNotificationsAuthorizationStatus]: \n',
                  '[ios] \n',
                  'Permission not yet requested'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                console.log(
                  '[getRemoteNotificationsAuthorizationStatus]: \n',
                  '[ios] \n',
                  'Permission denied'
                )
                break
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                console.log(
                  '[getRemoteNotificationsAuthorizationStatus]: \n',
                  '[ios] \n',
                  'Permission granted'
                )
                break
            }
          },
          function (error) {
            console.error(
              '[getRemoteNotificationsAuthorizationStatus]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      requestRemoteNotificationsAuthorization: function (obj) {
        console.log(
          c.cyan + '[start]',
          'requestRemoteNotificationsAuthorization'
        )
        cordova.plugins.diagnostic.requestRemoteNotificationsAuthorization({
          successCallback: function () {
            console.log(
              '[requestRemoteNotificationsAuthorization]: \n',
              '[ios] \n',
              'Successfully requested remote notifications authorization'
            )
          },
          errorCallback: function (err) {
            console.error(
              '[requestRemoteNotificationsAuthorization]: \n',
              '[ios] \n',
              'Error requesting remote notifications authorization: ' + err
            )
          },
          types: [
            cordova.plugins.diagnostic.remoteNotificationType.ALERT,
            cordova.plugins.diagnostic.remoteNotificationType.SOUND,
            cordova.plugins.diagnostic.remoteNotificationType.BADGE,
          ],
          omitRegistration: false,
        })
      },
      //android/ios
      isRemoteNotificationsEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isRemoteNotificationsEnabled')
        cordova.plugins.diagnostic.isRemoteNotificationsEnabled(
          function (enabled) {
            console.log(
              '[isRemoteNotificationsEnabled]: \n',
              '[android/ios] \n',
              'Remote notifications are ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isRemoteNotificationsEnabled]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
    },
    microphone: {
      test: function () {
        console.log(c.cyan + '[start]', 'microphone test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.isMicrophoneAuthorized(obj_pass)
          this.getMicrophoneAuthorizationStatus(obj_pass)
          this.requestMicrophoneAuthorization(obj_pass)
          //android
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.isMicrophoneAuthorized(obj_pass)
          this.getMicrophoneAuthorizationStatus(obj_pass)
          this.requestMicrophoneAuthorization(obj_pass)

          //ios
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //android/ios
      isMicrophoneAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isMicrophoneAuthorized')
        cordova.plugins.diagnostic.isMicrophoneAuthorized(
          function (authorized) {
            console.log(
              '[isMicrophoneAuthorized]: \n',
              '[android/ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'denied') +
                ' access to the microphone'
            )
          },
          function (error) {
            console.error(
              '[isMicrophoneAuthorized]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getMicrophoneAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getMicrophoneAuthorizationStatus')
        cordova.plugins.diagnostic.getMicrophoneAuthorizationStatus(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getMicrophoneAuthorizationStatus]: \n',
                '[android/ios] \n',
                'Microphone use is authorized'
              )
            }
          },
          function (error) {
            console.error(
              '[getMicrophoneAuthorizationStatus]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      requestMicrophoneAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestMicrophoneAuthorization')
        cordova.plugins.diagnostic.requestMicrophoneAuthorization(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[requestMicrophoneAuthorization]: \n',
                '[android/ios] \n',
                'Microphone use is authorized'
              )
            }
          },
          function (error) {
            console.error(
              '[requestMicrophoneAuthorization]: \n',
              '[android/ios] \n',
              error
            )
          }
        )
      },
    },
    contacts: {
      test: function () {
        console.log(c.cyan + '[start]', 'contacts test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.isContactsAuthorized(obj_pass)
          this.getContactsAuthorizationStatus(obj_pass)
          this.requestContactsAuthorization(obj_pass)
          //android
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.isContactsAuthorized(obj_pass)
          this.getContactsAuthorizationStatus(obj_pass)
          this.requestContactsAuthorization(obj_pass)

          //ios
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //android/ios
      isContactsAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isContactsAuthorized')
        cordova.plugins.diagnostic.isContactsAuthorized(
          function (authorized) {
            console.log(
              '[isContactsAuthorized]: \n',
              '[android/ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'denied') +
                ' access to contacts'
            )
          },
          function (error) {
            console.error(
              '[isContactsAuthorized]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getContactsAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getContactsAuthorizationStatus')
        cordova.plugins.diagnostic.getContactsAuthorizationStatus(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getContactsAuthorizationStatus]: \n',
                '[android/ios] \n',
                'Contacts use is authorized'
              )
            }
          },
          function (error) {
            console.error(
              '[getContactsAuthorizationStatus]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      requestContactsAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestContactsAuthorization')
        cordova.plugins.diagnostic.requestContactsAuthorization(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[requestContactsAuthorization]: \n',
                '[android/ios] \n',
                'Contacts use is authorized'
              )
            }
          },
          function (error) {
            console.error(
              '[requestContactsAuthorization]: \n',
              '[android/ios] \n',
              error
            )
          }
        )
      },
    },
    calender: {
      test: function () {
        console.log(c.cyan + '[start]', 'calender test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          this.isCalendarAuthorized(obj_pass)
          this.getCalendarAuthorizationStatus(obj_pass)
          this.requestCalendarAuthorization(obj_pass)
          //android
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          this.isCalendarAuthorized(obj_pass)
          this.getCalendarAuthorizationStatus(obj_pass)
          this.requestCalendarAuthorization(obj_pass)

          //ios
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //android/ios
      isCalendarAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isCalendarAuthorized')
        cordova.plugins.diagnostic.isCalendarAuthorized(
          function (authorized) {
            console.log(
              '[isCalendarAuthorized]: \n',
              '[android/ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'denied') +
                ' access to calendar'
            )
          },
          function (error) {
            console.error(
              '[isCalendarAuthorized]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getCalendarAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getCalendarAuthorizationStatus')
        cordova.plugins.diagnostic.getCalendarAuthorizationStatus(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getCalendarAuthorizationStatus]: \n',
                '[android/ios] \n',
                'Calendar use is authorized'
              )
            }
          },
          function (error) {
            console.error(
              '[getCalendarAuthorizationStatus]: \n',
              '[android/ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      requestCalendarAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestCalendarAuthorization')
        cordova.plugins.diagnostic.requestCalendarAuthorization(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[requestCalendarAuthorization]: \n',
                '[android/ios] \n',
                'Calendar use is authorized'
              )
            }
          },
          function (error) {
            console.error(
              '[requestCalendarAuthorization]: \n',
              '[android/ios] \n',
              error
            )
          }
        )
      },
    },
    reminders: {
      test: function () {
        console.log(c.cyan + '[start]', 'reminders test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          //android
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios

          //ios
          this.isRemindersAuthorized(obj_pass)
          this.getRemindersAuthorizationStatus(obj_pass)
          this.requestRemindersAuthorization(obj_pass)
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //ios
      isRemindersAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isRemindersAuthorized')
        cordova.plugins.diagnostic.isRemindersAuthorized(
          function (authorized) {
            console.log(
              '[isRemindersAuthorized]: \n',
              '[ios] \n',
              'App is ' +
                (authorized ? 'authorized' : 'denied') +
                ' access to reminders'
            )
          },
          function (error) {
            console.error(
              '[isRemindersAuthorized]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      getRemindersAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getRemindersAuthorizationStatus')
        cordova.plugins.diagnostic.getRemindersAuthorizationStatus(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getRemindersAuthorizationStatus]: \n',
                '[ios] \n',
                'Reminders authorization allowed'
              )
            }
          },
          function (error) {
            console.error(
              '[getRemindersAuthorizationStatus]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      requestRemindersAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestRemindersAuthorization')
        cordova.plugins.diagnostic.requestRemindersAuthorization(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[requestRemindersAuthorization]: \n',
                '[ios] \n',
                'Reminders authorization allowed'
              )
            }
          },
          function (error) {
            console.error(
              '[requestRemindersAuthorization]: \n',
              '[ios] \n',
              error
            )
          }
        )
      },
    },
    motion: {
      test: function () {
        console.log(c.cyan + '[start]', 'motion test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios
          //android
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios

          //ios
          this.motionStatus(obj_pass)
          this.isMotionAvailable(obj_pass)
          this.isMotionRequestOutcomeAvailable(obj_pass)
          this.requestMotionAuthorization(obj_pass)
          this.getMotionAuthorizationStatus(obj_pass)
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //ios
      motionStatus: function (obj) {
        console.log(c.cyan + '[start]', 'motionStatus')

        let mo = cordova.plugins.diagnostic.motionStatus

        let NOT_REQUESTED = mo.NOT_REQUESTED
        let GRANTED = mo.GRANTED
        let DENIED_ALWAYS = mo.DENIED_ALWAYS
        let RESTRICTED = mo.RESTRICTED
        let NOT_AVAILABLE = mo.NOT_AVAILABLE
        let NOT_DETERMINED = mo.NOT_DETERMINED
        let UNKNOWN = mo.UNKNOWN

        let ios = [
          NOT_REQUESTED,
          GRANTED,
          DENIED_ALWAYS,
          RESTRICTED,
          NOT_AVAILABLE,
          NOT_DETERMINED,
          UNKNOWN,
        ]

        console.log('[motionStatus]: \n', '[ios] \n', ios)
      },
      isMotionAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isMotionAvailable')
        cordova.plugins.diagnostic.isMotionAvailable(
          function (available) {
            console.log(
              '[isMotionAvailable]: \n',
              '[ios] \n',
              'Motion tracking is ' +
                (available ? 'available' : 'not available') +
                ' on this device'
            )
          },
          function (error) {
            console.error(
              '[isMotionAvailable]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isMotionRequestOutcomeAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isMotionRequestOutcomeAvailable')
        cordova.plugins.diagnostic.isMotionRequestOutcomeAvailable(
          function (available) {
            console.log(
              '[isMotionRequestOutcomeAvailable]: \n',
              '[ios] \n',
              'Motion tracking authorization request outcome is ' +
                (available ? 'available' : 'not available') +
                ' on this device'
            )
          },
          function (error) {
            console.error(
              '[isMotionRequestOutcomeAvailable]: \n',
              '[ios] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      requestMotionAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestMotionAuthorization')
        cordova.plugins.diagnostic.requestMotionAuthorization(
          function (status) {
            if (
              status === cordova.plugins.motionStatus.permissionStatus.GRANTED
            ) {
              console.log(
                '[requestMotionAuthorization]: \n',
                '[ios] \n',
                'Motion tracking authorized'
              )
            }
          },
          function (error) {
            console.error('[requestMotionAuthorization]: \n', '[ios] \n', error)
          }
        )
      },
      getMotionAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getMotionAuthorizationStatus')
        cordova.plugins.diagnostic.getMotionAuthorizationStatus(
          function (status) {
            if (
              status === cordova.plugins.diagnostic.permissionStatus.GRANTED
            ) {
              console.log(
                '[getMotionAuthorizationStatus]: \n',
                '[ios] \n',
                'Motion authorization allowed'
              )
            }
          },
          function (error) {
            console.error(
              '[getMotionAuthorizationStatus]: \n',
              '[ios] \n',
              error
            )
          }
        )
      },
    },
    nfc: {
      test: function () {
        console.log(c.cyan + '[start]', 'nfc test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios

          //android
          this.NFCState(obj_pass)
          this.isNFCPresent(obj_pass)
          this.isNFCEnabled(obj_pass)
          this.isNFCAvailable(obj_pass)
          this.registerNFCStateChangeHandler(obj_pass)
          this.switchToNFCSettings(obj_pass)
        } else if (device.platform.toLowerCase() === 'ios') {
          //android/ios
          //ios
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },

      //android
      NFCState: function (obj) {
        console.log(c.cyan + '[start]', 'NFCState')

        let nfc = cordova.plugins.diagnostic.NFCState
        let UNKNOWN = nfc.UNKNOWN
        let POWERED_OFF = nfc.POWERED_OFF
        let POWERED_ON = nfc.POWERED_ON
        let POWERING_OFF = nfc.POWERING_OFF
        let POWERING_ON = nfc.POWERING_ON

        let android = [
          UNKNOWN,
          POWERED_OFF,
          POWERED_ON,
          POWERING_OFF,
          POWERING_ON,
        ]
        console.log('[NFCState]: \n', '[android] \n', android)

        cordova.plugins.diagnostic.registerNFCStateChangeHandler(
          function (state) {
            switch (state) {
              case cordova.plugins.diagnostic.NFCState.UNKNOWN:
                console.log(
                  '[NFCState]: \n',
                  '[android] \n',
                  'NFC state is unknown'
                )
                break
              case cordova.plugins.diagnostic.NFCState.POWERED_OFF:
                console.log(
                  '[NFCState]: \n',
                  '[android] \n',
                  'NFC is powered off'
                )
                break
              case cordova.plugins.diagnostic.NFCState.POWERED_ON:
                console.log(
                  '[NFCState]: \n',
                  '[android] \n',
                  'NFC is powered on'
                )
                break
              case cordova.plugins.diagnostic.NFCState.POWERING_OFF:
                console.log(
                  '[NFCState]: \n',
                  '[android] \n',
                  'NFC is powering off'
                )
                break
              case cordova.plugins.diagnostic.NFCState.POWERING_ON:
                console.log(
                  '[NFCState]: \n',
                  '[android] \n',
                  'NFC is powering on'
                )
                break
            }
          },
          function (error) {
            console.error(
              '[NFCState]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isNFCPresent: function (obj) {
        console.log(c.cyan + '[start]', 'isNFCPresent')
        cordova.plugins.diagnostic.isNFCPresent(
          function (present) {
            console.log(
              '[isNFCPresent]: \n',
              '[android] \n',
              'NFC hardware is ' + (present ? 'present' : 'absent')
            )
          },
          function (error) {
            console.error(
              '[isNFCPresent]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isNFCEnabled: function (obj) {
        console.log(c.cyan + '[start]', 'isNFCEnabled')
        cordova.plugins.diagnostic.isNFCEnabled(
          function (enabled) {
            console.log(
              '[isNFCEnabled]: \n',
              '[android] \n',
              'NFC is ' + (enabled ? 'enabled' : 'disabled')
            )
          },
          function (error) {
            console.error(
              '[isNFCEnabled]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      isNFCAvailable: function (obj) {
        console.log(c.cyan + '[start]', 'isNFCAvailable')
        cordova.plugins.diagnostic.isNFCAvailable(
          function (available) {
            console.log(
              '[isNFCAvailable]: \n',
              '[android] \n',
              'NFC is ' + (available ? 'available' : 'not available')
            )
          },
          function (error) {
            console.error(
              '[isNFCAvailable]: \n',
              '[android] \n',
              'The following error occurred: ' + error
            )
          }
        )
      },
      registerNFCStateChangeHandler: function (obj) {
        console.log(c.cyan + '[start]', 'registerNFCStateChangeHandler')
        cordova.plugins.diagnostic.registerNFCStateChangeHandler(function (
          state
        ) {
          console.log(
            '[registerNFCStateChangeHandler]: \n',
            '[android] \n',
            'NFC state changed to: ' + state
          )
        })
      },
      switchToNFCSettings: function (obj) {
        console.log(c.cyan + '[start]', 'switchToNFCSettings')
        cordova.plugins.diagnostic.switchToNFCSettings()
      },
    },
    exStorage: {
      test: function () {
        console.log(c.cyan + '[start]', 'exStorage test')
        let obj_pass = ''

        if (device.platform.toLowerCase() === 'android') {
          //android/ios

          //android
          this.isExternalStorageAuthorized(obj_pass)
          this.getExternalStorageAuthorizationStatus(obj_pass)
          this.requestExternalStorageAuthorization(obj_pass)
          this.getExternalSdCardDetails(obj_pass)
        } else if (device.platform.toLowerCase() === 'ios') {
        } else {
          console.log(c.red + '[error]', 'platform is not android/ios')
        }
      },
      isExternalStorageAuthorized: function (obj) {
        console.log(c.cyan + '[start]', 'isExternalStorageAuthorized')
        cordova.plugins.diagnostic.isExternalStorageAuthorized(
          _cons,
          _cons,
          _cons
        )
      },
      getExternalStorageAuthorizationStatus: function (obj) {
        console.log(c.cyan + '[start]', 'getExternalStorageAuthorizationStatus')
        cordova.plugins.diagnostic.getExternalStorageAuthorizationStatus(
          _cons,
          _cons,
          _cons
        )
      },
      requestExternalStorageAuthorization: function (obj) {
        console.log(c.cyan + '[start]', 'requestExternalStorageAuthorization')
        cordova.plugins.diagnostic.requestExternalStorageAuthorization(
          _cons,
          _cons,
          _cons
        )
      },
      getExternalSdCardDetails: function (obj) {
        console.log(c.cyan + '[start]', 'getExternalSdCardDetails')
        cordova.plugins.diagnostic.getExternalSdCardDetails(_cons, _cons, _cons)
      },
    },
  },
}

export default test
