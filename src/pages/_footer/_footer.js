let _footer = {
  init() {
    console.log(c.cyan + '[init]', '_footer.js')
    $(document).on('click', '.btn-footer', function () {
      $('.btn-footer').removeClass('footer-active')
      $(this).addClass('footer-active')
    })
  },
}

export default _footer
