import app_model from 'src/js/model.js'
import app_view from 'src/js/view.js'
import common from 'src/js/common.js'

/*コンポーネント*/
import test from 'src/pages/test/test.js'
import ble from 'src/pages/ble/ble.js'
import main from 'src/pages/main/main.js'

/*utility*/
import router from 'src/js/router_core.js'

/**
 * 新規追加する場合
 * @追加 index.css
 * @追加 controller.js
 * @追加 webpack.pages.js
 */

/**
 * 開発方針
 * ***controller
 * 各ファイル.js、最上位としてcontroller.js
 * 3つ以上のファイルに共通のコードを書く場合はcontroller.jsに記述
 *
 * 概要
 * view⇔controller
 * model⇔controllerを担当
 *
 *
 *
 * ***model
 * model.js only
 *
 * 概要
 * model⇔controllerを担当
 *
 * ***view
 * view.js only
 *
 * 概要
 * view⇔controllerを担当
 *
 */

/**
 * 命名規則
 * id    :スネークケース (jsで扱うため)
 * class :ケバブケース (html)
 *
 */

let app_controller = {
  init: function() {
    common.init()
    router.init()
    app_view.init()
    ble.init()
    //main.init()

    test.init()
  },
}

export default app_controller
