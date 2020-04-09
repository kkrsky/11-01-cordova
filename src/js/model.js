//コールバックの中身確認用
function _cons(obj) {
  console.log('callback: ', obj)
}

let app_model = {
  init: () => {
    console.log(c.cyan + '[init]', 'model.js')
  },
  nativeStorage: {
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
      let check = false
      NativeStorage.setItem(
        id,
        obj,
        function (elm) {
          this.setSuccess(elm)
          check = true
        }.bind(this),
        this.setError.bind(this)
      )
      return check
    },
    setSuccess: function (obj) {
      console.log(c.green + '[success]', 'set:', obj)
      _cons(obj)
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
      this.output_true(obj)
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
}

export default app_model
