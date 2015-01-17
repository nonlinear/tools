

/*
=================================
flex slider, slide instead of fade
=================================
*/

$(window).load(function() {
				$('.flexslider').flexslider({
				  animation: "slide",
				  controlsContainer: ".flex-container"
			  });
			});

/*
=================================
trigger from bin to mag
=================================
*/
if(window.ixedit){ixedit.deployed = true};
	if(window.jQuery){jQuery(function(){
		(function(){var target = jQuery('#bin'); target.show('drop', { direction: 'up' }, 1000); 
	})();
		(function(){ jQuery('a.back').bind('click', function(event, ui){var target = jQuery('.mag'); target.fadeOut(2000);var target = jQuery('.mag'); target.css('height','0px'); var target = jQuery('#bin'); target.show('drop', { direction: 'down' }, 1000)});})();
		
		(function(){ jQuery('#001_Call a').bind('click', function(event, ui){var target = jQuery('#001'); target.fadeIn(2000);var target = jQuery('#001'); target.css('height','1004px'); var target = jQuery('#bin'); target.hide(0)});})();
		(function(){ jQuery('#002_Call a').bind('click', function(event, ui){var target = jQuery('#002'); target.fadeIn(2000);var target = jQuery('#002'); target.css('height','1004px'); var target = jQuery('#bin'); target.hide(0)});})();
	
if (window.navigator.standalone) {
 document.getElementById("tour").style.display = "none";
 document.getElementById("featured").style.display = "inline-block";
}
		
	})};
	/*
=================================
prevents ipad to scroll
=================================
*/

function BlockMove(event) {
  // Tell Safari not to move the window.
  event.preventDefault() ;
 }

