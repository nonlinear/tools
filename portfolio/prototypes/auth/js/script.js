/*
=================================
TOOLTIPS
=================================
*/

$('article section a[title], ul.alpha a[title], #main .brand[title], .status[title], nav a[title], footer a[title], aside [title], td[title]').qtip({
   show: 'mouseover',
   hide: 'mouseout'
})
$('.mainnav a[title], input[title]').qtip({
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
