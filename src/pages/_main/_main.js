import view from 'src/js/view.js'

let main = {
  init: function () {
    console.log(c.cyan + '[init]', 'main.js')
    $(document).on('click', '#btn_lock', function () {
      $(this).toggleClass('unlocked-color fa-unlock')
    })
    /*登録 */
  },
  test: function () {
    console.log(this)
    window.alert(this)
  },
}

export default main
