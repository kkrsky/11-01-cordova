import view from 'src/js/view.js'

const test = {
  init: function() {
    console.log(c.cyan + '[init]', 'test.js')
    $(document).on('click', '.btn-test-toast', () => {
      view.toast_simple('title', 'this is msg')
      view.toast_info('this is msg')
      view.toast_success('this is msg')
      view.toast_warning('this is msg')
      view.toast_error('this is msg')
      view.toast_ask('title', 'this is msg')
    })
  },
}

export default test
