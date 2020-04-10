let header = {
  init() {
    console.log(c.cyan + '[init]', '_header.js')
    $(document).on('click', 'div', function () {
      $('.navbar-collapse').collapse('hide')
    })
  },
}

export default header
