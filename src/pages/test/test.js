import view from 'src/js/view.js'

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

    var obj = { name: 'NativeStorage', author: 'GillesCallebaut' }
    let id = 'reference'

    $('#btn_NativeStorage_test_set').on('click', () => {
      console.log(this)
      this.NativeStorage_test.setItem(id, obj)
    })
    $('#btn_NativeStorage_test_get').on('click', () => {
      this.NativeStorage_test.getItem(id)
    })
    $('#btn_NativeStorage_test_keys').on('click', () => {
      this.NativeStorage_test.keys()
    })
    $('#btn_NativeStorage_test_rm').on('click', () => {
      this.NativeStorage_test.remove(id)
    })
    $('#btn_NativeStorage_test_clear').on('click', () => {
      this.NativeStorage_test.clear()
    })
    $('#btn_NativeStorage_test_output').on('click', () => {
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
      NativeStorage.setItem(id, obj, this.setSuccess, this.setError)
    },
    setSuccess: function(obj) {
      console.log(c.green + '[success]', 'set')
      console.log(obj.name)
    },
    setError: function(error) {
      console.log(c.red + '[failed]', 'set')
      console.log(error.code)
      if (error.exception !== '') console.log(error.exception)
    },

    //keys
    getItem: function() {
      NativeStorage.keys(this.keysSuccess, this.keysError)
    },
    keysSuccess: function(obj) {
      console.log(c.green + '[success]', 'keys')
      console.log(obj.name)
    },
    keysError: function(error) {
      console.log(c.red + '[failed]', 'keys')
      console.log(error.code)
      if (error.exception !== '') console.log(error.exception)
    },

    //getItem
    getItem: function(id) {
      NativeStorage.getItem(id, this.getSuccess, this.getError)
    },
    getSuccess: function(obj) {
      console.log(c.green + '[success]', 'get')
      console.log(obj.name)
      this.output_true(obj)
    },
    getError: function(error) {
      console.log(c.red + '[failed]', 'get')
      console.log(error.code)
      if (error.exception !== '') console.log(error.exception)
    },

    //remove
    remove: function(id) {
      NativeStorage.remove(id, this.removeSuccess, this.removeError)
    },
    removeSuccess: function() {
      console.log(c.green + '[success]', 'remove')
    },
    removeError: function(error) {
      console.log(c.red + '[failed]', 'remove')
      console.log(error.code)
      if (error.exception !== '') console.log(error.exception)
    },

    //clear
    remove: function() {
      NativeStorage.clear(this.clearSuccess, this.clearError)
    },
    clearSuccess: function() {
      console.log(c.green + '[success]', 'clear')
    },
    clearError: function(error) {
      console.log(c.red + '[failed]', 'clear')
      console.log(error.code)
      if (error.exception !== '') console.log(error.exception)
    },
  },
}

export default test
