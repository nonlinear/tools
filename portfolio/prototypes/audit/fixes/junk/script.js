/*
=================================
TOOLTIPS
=================================
*/

jQuery('article section a[title], ul.alpha a[title], #main .brand[title], .status[title], nav a[title], footer a[title], aside [title], td[title]').qtip({
   show: 'mouseover',
   hide: 'mouseout'
})
jQuery('.mainnav a[title], input[title]').qtip({
   show: 'mouseover',
   hide: 'mouseout',
  style: { 
      name: 'headtip'
   },
   corner: {
            target: 'bottomLeft',
            tooltip: 'topLeft'
         }
})

/*
=================================
FORMS
=================================
*/
	if(window.jQuery){jQuery(function(){
		(function(){ jQuery('a#holdingsCall').bind('click', function(event, ui){var target = jQuery('#holdings .forms'); target.show('blind', { direction: 'vertical' }, 500); var target = jQuery('a#holdingsCall'); target.hide(0)});})();
		(function(){ jQuery('#holdings .forms a.save').bind('click', function(event, ui){setTimeout(function(){var target = jQuery('#holdings .success'); target.show('blind', { direction: 'vertical' }, 500)}, 250); var target = jQuery('#holdings .forms'); target.hide('blind', { direction: 'vertical' }, 250)});})();
		(function(){ jQuery('#holdings .forms a.cancel').bind('click', function(event, ui){setTimeout(function(){var target = jQuery('#holdings .cancelled'); target.show('blind', { direction: 'vertical' }, 500)}, 250); var target = jQuery('#holdings .forms'); target.hide('blind', { direction: 'vertical' }, 250); var target = jQuery('#curtain'); target.hide('puff', { percent: 150 }, 200)});})();
		(function(){ jQuery('#holdings .success a.cancel').bind('click', function(event, ui){var target = jQuery('#holdings .success'); target.hide('blind', { direction: 'vertical' }, 250); var target = jQuery('#holdingsCall'); target.show(0)});})();
		(function(){ jQuery('#holdings .cancelled a.cancel').bind('click', function(event, ui){var target = jQuery('#holdings .cancelled'); target.hide('blind', { direction: 'vertical' }, 250); var target = jQuery('#holdingsCall'); target.show(0)});})();
	})};

	
/*
=================================
DASHBOARD GENERAL PRESO
=================================
*/
	if(window.jQuery){jQuery(function(){
		(function(){ jQuery('.preso .trigger li:nth-child(1) a').bind('click', function(event, ui){var target = jQuery('.preso .trigger li'); target.removeClass('selected'); var target = jQuery('.preso .trigger li:nth-child(1)'); target.addClass('selected'); var target = jQuery('.preso .content li'); target.hide(0); var target = jQuery('.preso .content li:nth-child(1)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.preso .trigger li:nth-child(2) a').bind('click', function(event, ui){var target = jQuery('.preso .trigger li'); target.removeClass('selected'); var target = jQuery('.preso .trigger li:nth-child(2)'); target.addClass('selected'); var target = jQuery('.preso .content li'); target.hide(0); var target = jQuery('.preso .content li:nth-child(2)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.preso .trigger li:nth-child(3) a').bind('click', function(event, ui){var target = jQuery('.preso .trigger li'); target.removeClass('selected'); var target = jQuery('.preso .trigger li:nth-child(3)'); target.addClass('selected'); var target = jQuery('.preso .content li'); target.hide(0); var target = jQuery('.preso .content li:nth-child(3)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.preso .trigger li:nth-child(4) a').bind('click', function(event, ui){var target = jQuery('.preso .trigger li'); target.removeClass('selected'); var target = jQuery('.preso .trigger li:nth-child(4)'); target.addClass('selected'); var target = jQuery('.preso .content li'); target.hide(0); var target = jQuery('.preso .content li:nth-child(4)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.preso .trigger li:nth-child(5) a').bind('click', function(event, ui){var target = jQuery('.preso .trigger li'); target.removeClass('selected'); var target = jQuery('.preso .trigger li:nth-child(5)'); target.addClass('selected'); var target = jQuery('.preso .content li'); target.hide(0); var target = jQuery('.preso .content li:nth-child(5)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.preso .trigger li:nth-child(6) a').bind('click', function(event, ui){var target = jQuery('.preso .trigger li'); target.removeClass('selected'); var target = jQuery('.preso .trigger li:nth-child(6)'); target.addClass('selected'); var target = jQuery('.preso .content li'); target.hide(0); var target = jQuery('.preso .content li:nth-child(6)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.preso .trigger li:nth-child(7) a').bind('click', function(event, ui){var target = jQuery('.preso .trigger li'); target.removeClass('selected'); var target = jQuery('.preso .trigger li:nth-child(7)'); target.addClass('selected'); var target = jQuery('.preso .content li'); target.hide(0); var target = jQuery('.preso .content li:nth-child(7)'); target.show('blind', { direction: 'vertical' }, 500)});})();
	})};

/*
=================================
JOURNAL SIDE PART PRESO
=================================
*/
	if(window.jQuery){jQuery(function(){
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(1) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(1)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(1)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(2) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(2)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(2)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(3) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(3)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(3)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(4) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(4)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(4)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(5) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(5)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(5)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(6) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(6)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(6)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(7) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(7)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(7)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(8) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(8)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(5)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(9) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(9)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(6)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(10) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(10)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(6)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(11) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(11)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(7)'); target.show('blind', { direction: 'vertical' }, 500)});})();
		(function(){ jQuery('.journalpreso .sidemenu li:nth-child(12) a').bind('click', function(event, ui){var target = jQuery('.journalpreso .sidemenu li'); target.removeClass('selected'); var target = jQuery('.journalpreso .sidemenu li:nth-child(12)'); target.addClass('selected'); var target = jQuery('.journalpreso .content li'); target.hide(0); var target = jQuery('.journalpreso .content li:nth-child(5)'); target.show('blind', { direction: 'vertical' }, 500)});})();
	})};