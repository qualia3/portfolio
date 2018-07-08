$(function() {
  Array.prototype.forEach.call(
    document.body.querySelectorAll('label'),
    function(l){
      l.onclick = l.onclick || function(){}
    });
  }());
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
  });
});

// スムーズスクロール --------------------------
$(function(){
  var scrollElm = (function() {
    if('scrollingElement' in document) {
      return document.scrollingElement;
    }
    if(navigator.userAgent.indexOf('WebKit') != -1) {
      return document.body;
    }
    return document.documentElement;
  })();
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').not('.noscroll').on('click', function() {
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
