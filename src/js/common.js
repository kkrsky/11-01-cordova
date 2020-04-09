window.c = {
  black: '\u001b[30m',
  red: '\u001b[31m',
  green: '\u001b[32m',
  yellow: '\u001b[33m',
  blue: '\u001b[34m',
  magenta: '\u001b[35m',
  cyan: '\u001b[36m',
  white: '\u001b[37m',
  reset: '\u001b[0m',
}

window.test = {
  console: (item, state) => {
    console.log('this state: ', state, '\nitem: ', item)
  },
}

let platform = ''
function setDeviceInfo() {
  console.log(c.cyan + '[start]', 'setDeviceInfo()')
  platform = device.platform.toLowerCase()
  if (platform.match(/win/)) {
    platform = 'windows'
  }
  $('body').addClass(platform)
}

const common = {
  init: function () {
    console.log(c.cyan + '[init]', 'common.js')
    setDeviceInfo()
    $(document).on('pause', function () {
      console.log(c.cyan + '[start]', 'pause')
    })
    $(document).on('resume', function () {
      console.log(c.cyan + '[start]', 'resume')
    })
  },
}

export default common

/*
documentは始めに宣言して登録しておかないと、発火を検知できない。
set_async(async_id, elm) {
    console.log(c.cyan + '[start]', 'set_async common.js')
    let id = 'none'
    if (elm === undefined) {
      id = 'async_' + async_id
    } else {
      id = 'async_saved_' + async_id
      model.nativeStorage.setItem(id, elm)
    }
    $(document).trigger(id)
  },
  get_async(async_id, callback) {
    console.log(c.cyan + '[start]', 'get_async common.js')
    let id = 'async_' + async_id
    let id_saved = 'async_saved' + async_id

    $(document).on(id, callback)

    $(document).on(id_saved, function () {
      model.nativeStorage.getItem(id)
      let item = model.nativeStorage.output()
      console.log('async pass item:', item)
      callback(item) //callback関数にnativeStorageに保存したデータを渡す。
    })
  },
  */
