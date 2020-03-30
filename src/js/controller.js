import app_model from 'src/js/model.js'
import app_view from 'src/js/view.js'
import common from 'src/js/common.js'

/*コンポーネント*/
import test from 'src/pages/test/test.js'
//import ble from 'src/pages/ble/ble.js'
import main from 'src/pages/main/main.js'

/*utility*/
import router from 'src/js/router_core.js'

/**
 * 新規追加する場合
 * @追加 index.css
 * @追加 controller.js
 * @追加 webpack.pages.js
 */

let app_controller = {
  init: function() {
    common.init()
    router.init()
    app_view.init()
    //top.init()
    //main.init()

    test.init()
  },
}

export default app_controller
