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
const common = {
  init: function() {
    console.log(c.cyan + '[init]', 'common')
  },
}

export default common
