jQuery.noConflict();
jQuery(document).ready(function() {
	jQuery('#posts li a').click(function(){
		var toLoad = jQuery(this).attr('href')+' #inner-content';
		
		jQuery('#load').remove();
		jQuery('#loadArea').append('<span id="load"></span>');
		jQuery('#load').fadeIn(300);
		
		jQuery('#loadArea').fadeOut(300, loadContent);
		
		function loadContent(){jQuery('#loadArea').load(toLoad,'',showNewContent());}
		
		function showNewContent(){jQuery('#loadArea').fadeIn(600, hideLoader);}
		
		function hideLoader(){jQuery('#load').fadeOut('normal');}
		
		return false;
	});
});