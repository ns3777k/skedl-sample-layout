$(document).ready(function() {
  var isOpened = false,
      $menu = $('.menu'),
      $body = $('body'),
      menuWidth = Number($menu.outerWidth() || 0);

  $('.icon-menu').click(function() {
    var menuLeftOffset = !isOpened? 0: -menuWidth,
        bodyLeftOffset = !isOpened? menuWidth: 0;
    
    $menu.animate({left: menuLeftOffset + 'px'}, 200);
    $body.animate({left: bodyLeftOffset + 'px'}, 200);

    isOpened = !isOpened;
  });
}); 