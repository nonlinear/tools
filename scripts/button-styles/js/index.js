// http://shoptalkshow.com/episodes/134-marc-grabanski/#t=16:07
$('[data-js="btn"]').hover(function(){
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('body').addClass('blur');
  } else {
    $('body').removeClass('blur');
  }
});