const pages = require('../pages/router.js')

/**
 * ["遷移先","遷移するhtml","クリックイベント",]
 */

const router = {
  init: function() {
    console.log(c.cyan + '[init]', 'router.js')
    /**初期表示 */

    $(document).on('deviceready', function() {
      $(pages.ready[0]).load('./' + pages.ready[1])
      setTimeout(function() {
        //console.log(green + 'timeout' + black + 'tes')
        let ready2 = pages.secondReady
        let max_ready2 = ready2.length

        for (var i = 0; i < max_ready2; i++) {
          if (ready2[i][0] === '' || ready2[i][1] === '') continue
          console.log(
            c.cyan + '[set][auto]',
            ready2[i][0],
            'from ' + ready2[i][1]
          )
          $(ready2[i][0]).load('./' + ready2[i][1])
        }
      }, 100)
    })

    //クリックイベントでページ遷移　登録
    let tr_click = pages.transition.click

    tr_click.forEach(function(arry) {
      $(document).on('click', arry[2], function() {
        $(arry[0]).load('./' + arry[1])
      })
    })
  },
}

export default router
