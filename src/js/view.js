const view = {
  init: function() {
    console.log(c.cyan + '[init]', 'view.js')
  },
  toast_simple: function(title, msg) {
    let option = {
      title: title,
      message: msg,
      position: 'topCenter',
    }
    iziToast.show(option)
  },
  toast_info: function(msg) {
    let option = {
      title: 'info',
      message: msg,
      position: 'topCenter',
    }
    iziToast.info(option)
  },
  toast_success: function(msg) {
    let option = {
      title: 'success',
      message: msg,
      position: 'topCenter',
    }
    iziToast.success(option)
  },
  toast_warning: function(msg) {
    let option = {
      title: 'warning',
      message: msg,
      position: 'topCenter',
    }
    iziToast.warning(option)
  },
  toast_error: function(msg) {
    let option = {
      title: 'error',
      message: msg,
      position: 'topCenter',
    }
    iziToast.error(option)
  },
  toast_ask: function(title, msg) {
    let option = {
      title: title,
      message: msg,
      timeout: 10000,
      close: false,
      overlay: true,
      displayMode: 'once',
      id: 'toast_ask',
      zindex: 999,

      position: 'center',
      buttons: [
        [
          '<button><b>YES</b></button>',
          function(instance, toast) {
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          },
          true,
        ],
        [
          '<button>NO</button>',
          function(instance, toast) {
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          },
        ],
      ],
      onClosing: function(instance, toast, closedBy) {
        console.info('Closing | closedBy: ' + closedBy)
      },
      onClosed: function(instance, toast, closedBy) {
        console.info('Closed | closedBy: ' + closedBy)
      },
    }
    iziToast.question(option)
  },
}

export default view
