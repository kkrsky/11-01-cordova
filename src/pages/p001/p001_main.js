let p001_main = {
  init: function() {
    console.log('[init] main')

    $('#btn-test-goto-p0011').on('click', () => {
      $('#test-page-transition').load('p0011.html')
      //window.location.href="p001.html"
    })
    $('#btn-test-goto-p001').on('click', () => {
      $('body').load('p001.html')
      //window.location.href="p001.html"
    })
    $('#btn-test-goto-p001s').on('click', () => {
      //$("#test-page-transition").load("p001.html")
      window.location.href = 'p001.html'
    })
  },
}

export default p001_main
