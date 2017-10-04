$(document).ready(function() {
  
  $('#prev').on('click', function() {
    var $activeImg = $('.slider-gallery img.active');
    $activeImg.removeClass('active');

    var $prevImg = $activeImg.prev();
    
    if ($prevImg.length != 0) {
      $prevImg.addClass('active');
    }
    else {
      $('.slider-gallery img:last-child').addClass('active');
    }
  });

  $('#next').on('click', function() {
    var $activeImg = $('.slider-gallery img.active');
    $activeImg.removeClass('active');

    var $nextImg = $activeImg.next();
    
    if ($nextImg.length != 0) {
      $nextImg.addClass('active');
    }
    else {
      $('.slider-gallery img:first-child').addClass('active');
    }
  });

});