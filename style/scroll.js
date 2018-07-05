$(function() {
  var timer = false;
  $(window).on('load resize', function(){
    if (timer !== false) {
      clearTimeout(timer);
    }
  });
});
// Navスクロールすると固定 -----------------
$(function() {
  var $win = $(window),
  $cloneNav = $('.mainNav-list').clone().addClass('clone-nav').appendTo('body'),
  showClass = 'is-show';
  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 200 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
    window.history.replaceState(null, '', location.pathname + location.search);
  });
});

// スムーズスクロール --------------------------
$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 900; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var headerHeight = 50;
    var position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
