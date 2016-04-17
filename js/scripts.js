$(function(){
  $('.carousel').carousel({
    interval: 4000
  })

  $('.home-dlwh').mouseenter(function() {
    $(this).css('box-shadow', 'inset 0 0 0 1000px rgba(83, 0, 25, .5)');
  }).mouseleave(function(){
    $(this).css('box-shadow', 'inset 0 0 0 1000px rgba(83, 0, 25, .5)');
  });
});
