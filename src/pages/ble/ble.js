import model from 'src/js/model.js'

let top = {
  init: function() {
    console.log(c.cyan + '[init]', 'ble.js')
    $(document).on('deviceready', () => {
      this.test()
    })
  },
  test: function() {
    let id = 'reference'
    let check = this.checkIdLocalDb(id)
    console.log(check)
  },
  checkIdLocalDb: function(id) {
    console.log(c.cyan + '[start]', 'checkIdLocalDb()')
    model.nativeStorage.keys() //NativeStorage.keysを実行し、outputに出力
    let keys = model.nativeStorage.output()
    console.log('check keys', keys)
    if (keys === false) {
      return false
    } else if (keys.indexOf(id) > -1) {
      //idは存在する
      return true
    } else {
      return false
    }
  },
  connectBle: function() {},
}

export default top
