
  $(window).load(function() {
    $('.flexslider').flexslider({
          animation: "slide",
          controlsContainer: ".flex-container",
		  slideshow: false,
		  controlNav: false,
		  animationLoop: false
    });
  });
  if(window.jQuery){jQuery(function(){
		(function(){ var target = jQuery('.libscreen.out'); target.addClass('show'); })();
		(function(){ jQuery('.libtrigger').bind('click', function(event, ui){var target = jQuery('.screen'); target.removeClass('show'); var target = jQuery('.libscreen.in'); target.addClass('show')});})();
		(function(){ jQuery('.bintrigger').bind('click', function(event, ui){var target = jQuery('.screen'); target.removeClass('show'); var target = jQuery('.binscreen'); target.addClass('show')});})();
		(function(){ jQuery('.magtrigger').bind('click', function(event, ui){var target = jQuery('.screen'); target.removeClass('show'); var target = jQuery('.magscreen'); target.addClass('show')});})();
		(function(){ jQuery('.usertrigger').bind('click', function(event, ui){var target = jQuery('.screen'); target.removeClass('show'); var target = jQuery('.userscreen'); target.addClass('show')});})();
		(function(){ jQuery('.outtrigger').bind('click', function(event, ui){var target = jQuery('.screen'); target.removeClass('show'); var target = jQuery('.libscreen.out'); target.addClass('show')});})();
	})};
	$(document).ready(function() {

    $('.onload').modal('show')

});