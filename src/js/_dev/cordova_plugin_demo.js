//window.alert('dev depend')

//object
/////////////////////demo/////////////////////
let id = '002'
let success = function(elm) {
  console.log('success: ', elm)
}
let failed = function(elm) {
  console.log('failed: ', elm)
}
check_id(id, success, failed) //demo
/////////////////////demo/////////////////////
let NativeStorage = {
  setItem: function(key, obj, cal_success, cal_failed) {
    let id = '001'
    let check_id = (id, obj, success_func, failed_func) => {
      let origin_id = '001'
      let pass_elm = ''
      if (origin_id === id) {
        //success
        /////////////////////
        pass_elm = obj
        /////////////////////
        success_func(pass_elm)
      } else {
        pass_elm = {
          code: 5,
          source: 'JS',
          exception:
            "TypeError: Cannot read property 'output_true' of undefined        at getSuccess (file:android_asset…",
        }
        failed_func(pass_elm)
      }
    }
    check_id(id, obj, cal_success, cal_failed)
  },
  getItem: function(key, cal_success, cal_failed) {
    let id = '001'
    let check_id = (id, success_func, failed_func) => {
      let origin_id = '001'
      let pass_elm = ''
      if (origin_id === id) {
        //success
        /////////////////////
        pass_elm = { name: 'NativeStorage', author: 'GillesCallebaut' }
        /////////////////////
        success_func(pass_elm)
      } else {
        pass_elm = {
          code: 5,
          source: 'JS',
          exception:
            "TypeError: Cannot read property 'output_true' of undefined        at getSuccess (file:android_asset…",
        }
        failed_func(pass_elm)
      }
    }
    check_id(id, cal_success, cal_failed)
  },
  keys: function(cal_success, cal_failed) {
    let id = '001'
    let check_id = (id, success_func, failed_func) => {
      let origin_id = '001'
      let pass_elm = ''
      if (origin_id === id) {
        //success
        /////////////////////
        pass_elm = ['reference']
        /////////////////////
        success_func(pass_elm)
      } else {
        pass_elm = {
          code: 5,
          source: 'JS',
          exception:
            "TypeError: Cannot read property 'output_true' of undefined        at getSuccess (file:android_asset…",
        }
        failed_func(pass_elm)
      }
    }
    check_id(id, cal_success, cal_failed)
  },
  remove: function(key, cal_success, cal_failed) {
    let id = '001'
    let check_id = (id, success_func, failed_func) => {
      let origin_id = '001'
      let pass_elm = ''
      if (origin_id === id) {
        //success
        /////////////////////
        pass_elm = 'OK'
        /////////////////////
        success_func(pass_elm)
      } else {
        pass_elm = {
          code: 5,
          source: 'JS',
          exception:
            "TypeError: Cannot read property 'output_true' of undefined        at getSuccess (file:android_asset…",
        }
        failed_func(pass_elm)
      }
    }
    check_id(id, cal_success, cal_failed)
  },
  clear: function(key, cal_success, cal_failed) {
    let id = '001'
    let check_id = (id, success_func, failed_func) => {
      let origin_id = '001'
      let pass_elm = ''
      if (origin_id === id) {
        //success
        /////////////////////
        pass_elm = 'OK'
        /////////////////////
        success_func(pass_elm)
      } else {
        pass_elm = {
          code: 5,
          source: 'JS',
          exception:
            "TypeError: Cannot read property 'output_true' of undefined        at getSuccess (file:android_asset…",
        }
        failed_func(pass_elm)
      }
    }
    check_id(id, cal_success, cal_failed)
  },
}

//system
function check_id(id, success_func, failed_func) {
  let origin_id = '001'
  let pass_elm = ''
  if (origin_id === id) {
    pass_elm = 'success!!!'
    success_func(pass_elm)
  } else {
    pass_elm = 'failed!!!'
    failed_func(pass_elm)
  }
}

//登録
window.NativeStorage = NativeStorage
