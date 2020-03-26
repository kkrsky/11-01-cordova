//window.alert('dev depend')
let NativeStorage = {
  getItem: function(key, cal_success, cal_failed) {
    console.log(
      '[dev] NativeStorage.getItem(key, cal_success, cal_failed)',
      '\nkey: ',
      key,
      '\nsuccess: ',
      cal_success,
      '\nfailed: ',
      cal_failed
    )
  },
}

window.NativeStorage = NativeStorage
