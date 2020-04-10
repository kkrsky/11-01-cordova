import app_model from 'src/js/model.js'
import app_view from 'src/js/view.js'
import common from 'src/js/common.js'

/*コンポーネント*/
import test from 'src/pages/test/test.js'
import ble from 'src/pages/ble/ble.js'
import _main from 'src/pages/_main/_main.js'
import _header from 'src/pages/_header/_header.js'
import _footer from 'src/pages/_footer/_footer.js'
import diagnostic from 'src/pages/diagnostic/diagnostic.js'

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
 * 関数   :キャメルケース（動詞＋目的語）、宣言はfunctionを用いて、適宜bind(this)にする
 * 変数   :キャメルケース(動詞＋目的語)
 * 定数   ：全大文字スネークケース
 *
 */

let app_controller = {
  init: function () {
    /**
     * base
     */
    router.init()
    common.init()
    app_view.init()
    app_model.init()

    /**
     * コンポーネント
     */
    ble.init()
    _main.init()
    diagnostic.init()
    _header.init()
    _footer.init()

    /**
     * テスト
     */
    test.init()
  },
}

export default app_controller
