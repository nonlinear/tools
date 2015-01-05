$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
