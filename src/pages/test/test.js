import view from 'src/js/view.js'

//コールバックの中身確認用
function _cons(obj) {
  console.log('callback: ', obj)
}

const test = {
  init: function() {
    console.log(c.cyan + '[init]', 'test.js')

    //iziToast テスト
    $(document).on('click', '.btn-test-toast', () => {
      view.toast_simple('title', 'this is msg')
      view.toast_info('this is msg')
      view.toast_success('this is msg')
      view.toast_warning('this is msg')
      view.toast_error('this is msg')
      view.toast_ask('title', 'this is msg')
    })

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
  },
  NativeStorage_test: {
    //sysyem
    item: [],
    output_state: false,
    output_true: function(obj) {
      if (this.output_state === true) {
        this.output_false()
      }
      this.item.push(obj)
      this.output_state = true
    },
    output_false: function() {
      this.item.pop()
      this.output_state = false
    },
    output: function() {
      if (this.output_state === true) return this.item[0]
      else return false
    },

    //setItem
    setItem: function(id, obj) {
      NativeStorage.setItem(
        id,
        obj,
        this.setSuccess.bind(this),
        this.setError.bind(this)
      )
    },
    setSuccess: function(obj) {
      console.log(c.green + '[success]', 'set')
      _cons(obj)
      console.log(obj.name)
    },
    setError: function(error) {
      console.log(c.red + '[failed]', 'set')
      _cons(error)
      console.log(error.code)
      if (error.exception !== '') console.log(error.exception)
    },

    //keys
    keys: function() {
      NativeStorage.keys(this.keysSuccess.bind(this), this.keysError.bind(this))
    },
    keysSuccess: function(obj) {
      console.log(c.green + '[success]', 'keys')
      _cons(obj)
      console.log('keys: ', obj)
    },
    keysError: function(error) {
      console.log(c.red + '[failed]', 'keys')
      console.log(error.code)
      _cons(error)
      if (error.exception !== '') console.log(error.exception)
    },

    //getItem
    getItem: function(id) {
      NativeStorage.getItem(
        id,
        this.getSuccess.bind(this),
        this.getError.bind(this)
      )
    },
    getSuccess: function(obj) {
      console.log(c.green + '[success]', 'get')
      _cons(obj)

      console.log('get: ', obj)
      this.output_true(obj)
      console.log(this)
    },
    getError: function(error) {
      console.log(c.red + '[failed]', 'get')
      console.log(error.code)
      _cons(error)
      if (error.exception !== '') console.log(error.exception)
    },

    //remove
    remove: function(id) {
      NativeStorage.remove(
        id,
        this.removeSuccess.bind(this),
        this.removeError.bind(this)
      )
    },
    removeSuccess: function(obj) {
      console.log(c.green + '[success]', 'remove')
      _cons(obj)
    },
    removeError: function(error) {
      console.log(c.red + '[failed]', 'remove')
      console.log(error.code)
      _cons(error)
      if (error.exception !== '') console.log(error.exception)
    },

    //clear
    clear: function() {
      NativeStorage.clear(
        this.clearSuccess.bind(this),
        this.clearError.bind(this)
      )
    },
    clearSuccess: function(obj) {
      console.log(c.green + '[success]', 'clear')
      this.output_false()
      _cons(obj)
    },
    clearError: function(error) {
      console.log(c.red + '[failed]', 'clear')
      console.log(error.code)
      _cons(error)
      if (error.exception !== '') console.log(error.exception)
    },
  },
  ble_test: {
    scan: function() {},
    autoConnect: function() {},
  },
}

export default test
