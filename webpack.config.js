const merge = require('webpack-merge')
const baseConfig = require('./build/webpack.config.base.js')
const pluginConfig = require('./src/pages/webpack.pages.js')

const developConfig_product = require('./build/webpack.config.product.js')
const developConfig_server = require('./build/webpack.config.dev.server.js') //index_dev.jsを起動
const developConfig_device = require('./build/webpack.config.dev.device.js') //本番用index.jsを起動

var reset = '\u001b[0m'
var green = '\u001b[32m'

if (process.env.npm_lifecycle_event === 'dev') {
  console.info(green + '\n[info] this is virtual cordova\n' + reset)
  const config = merge(baseConfig, pluginConfig, developConfig_server)
  module.exports = config
} else if (process.env.npm_lifecycle_event === 'prod') {
  console.info(green + '\n[info] this is production\n' + reset)
  const config = merge(baseConfig, pluginConfig, developConfig_product)
  module.exports = config
} else if (
  process.env.npm_lifecycle_event === 'dev2' ||
  process.env.npm_lifecycle_event === 'build'
) {
  console.info(green + '\n[info] this run device\n' + reset)
  const config = merge(baseConfig, pluginConfig, developConfig_device)
  module.exports = config
} else {
  console.info(green + '\n[info] this run device else\n' + reset)
  const config = merge(baseConfig, pluginConfig, developConfig_device)
  module.exports = config
}
