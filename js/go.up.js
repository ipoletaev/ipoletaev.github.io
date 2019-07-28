jQuery(document).ready(function($){
  var offset = 400,
    offset_opacity = 1500,
    scroll_top_duration = 700,
    $back_to_top = $('.button');

  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('visible') : $back_to_top.removeClass('visible fade');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('fade');
    }
  });

  $back_to_top.on('click', function(event){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('visible') : $back_to_top.removeClass('visible fade');
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});
