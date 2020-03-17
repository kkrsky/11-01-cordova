import './index.css'

//ブラウザーがロードされたら、jsをロードする ※画像の読み込みの終了まで待たない。
window.onload = function() {
  //alert('browser finish load')
}

//$=jQueryの略
$(document).ready(function() {
  $('a').click(function(event) {
    //alert('As you can see, the link no longer took you to jquery.com')
    //event.preventDefault() //ページ遷移しない
  })
})

$('a').addClass('test')
$('a').removeClass('test')

$('a').click(function(event) {
  event.preventDefault()
  $(this).hide('slow')
})

let myCallback = function(tes) {
  window.alert('parm is: ' + tes)
}

$.get('index.html', function() {
  let tes = 'tes desu'
  myCallback(tes)
})
