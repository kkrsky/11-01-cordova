window.c = {
  black: '\u001b[30m',
  red: '\u001b[31m',
  green: '\u001b[32m',
  yellow: '\u001b[33m',
  blue: '\u001b[34m',
  magenta: '\u001b[35m',
  cyan: '\u001b[36m',
  white: '\u001b[37m',
  reset: '\u001b[0m',
}

window.test = {
  console: (item, state) => {
    console.log('this state: ', state, '\nitem: ', item)
  },
}

let platform = ''
function setDeviceInfo() {
  console.log(c.cyan + '[start]', 'setDeviceInfo()')
  platform = device.platform.toLowerCase()
  if (platform.match(/win/)) {
    platform = 'windows'
  }
  $('body').addClass(platform)
}

const common = {
  init: function() {
    console.log(c.cyan + '[init]', 'common.js')
    setDeviceInfo()
    $(document).on('pause', function() {
      console.log(c.cyan + '[start]', 'pause')
    })
    $(document).on('resume', function() {
      console.log(c.cyan + '[start]', 'resume')
    })
  },
}

export default common
