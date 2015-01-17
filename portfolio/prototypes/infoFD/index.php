<?php
$usr = strip_tags($_GET["usr"]);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Fresh Direct</title>
     <link rel="stylesheet" href="css/base.css" type="text/css" media="screen, projection"><link rel="stylesheet" href="code/blueprint/screen.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="code/blueprint/print.css" type="text/css" media="print"> 
    <link href="code/drilldown.css" rel="stylesheet" type="text/css" />
    <link href="code/style.css" rel="stylesheet" type="text/css">   
	<!--[if IE]><link rel="stylesheet" href="code/blueprint/ie.css" type="text/css" media="screen, projection"><![endif]-->
    <!--[if IE]><link rel="stylesheet" href="code/styleIE.css" type="text/css" media="screen, projection"><![endif]-->
    <script type="text/javascript">
	
	function findHrefs()
	{
		var a = document.links;
		var limit = a.length;
		var pathArray = window.location.pathname.split( '/' )

		for (var i=0; i < limit; ++i)
		{
			if (a[i].href)
			{
				var URLArray = a[i].href.split( '/' );
				var targetPage = URLArray[URLArray.length-1];
				if ((targetPage.indexOf("mailto:") == -1) && (a[i].target != "_blank") && (targetPage.indexOf("javascript:") == -1))
				{
					var targetPageURL = targetPage.split( '?' );

					if  (targetPage.indexOf("manual.php") == -1)
					{
						a[i].href = 'index.php?'+targetPageURL[1]+'&usr=<?php echo $usr; ?>'
					} else
					{
						a[i].href = 'manual.php?'+targetPageURL[1]+'&usr=<?php echo $usr; ?>'						
					}
				}
			}
		}
	}
	
	window.onload=findHrefs;    
    </script>

	<script src="code/jquery-1.2.1.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" id="listmenu-v" href="code/fsmenu/listmenu_h.css" />
	<link rel="stylesheet" type="text/css" id="fsmenu-fallback" href="code/fsmenu/listmenu_fallback.css" />
    <script type="text/javascript" src="code/fsmenu/fsmenu.js"></script>
	<script type="text/javascript" src="code/fsmenu/fsmenu2.js"></script>
    <script type="text/javascript" src="code/jquery.min.js"></script>
	<script type="text/javascript" src="code/jquery.hoveraccordion.min.js"></script>
    <script src="code/jquery.dimensions.js" type="text/javascript"></script>
    <script src="code/jquery.tooltip.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function(){
	// Setup HoverAccordion for Example 1
	$('#example1').hoverAccordion();

	// Setup HoverAccordion for Example 2 with some custom options
	$('#accordion').hoverAccordion({
		activateitem: '1',
		speed: 'fast'
	});
	$('#accordion').children('li:first').addClass('firstitem');
	$('#accordion').children('li:last').addClass('lastitem');
});

</script>
  </head>
  <!--[if lt IE 7 ]><body class="ie6"><![endif]--> 
  <!--[if IE 7 ]><body class="ie7"><![endif]--> 
  <!--[if IE 8 ]><body class="ie8"><![endif]--> 
  <!--[if !IE]>--><body><!--<![endif]-->
    <div class="container">
     
  <div id="header"><a href="index.php?id=index"><img src="images/blank.gif" border="0"  id="logo" /></a>
 <hr />
  <div id="menu">
   <?php include("menu.html") ?>
 </div>
  </div>
     <hr /><div class="span-6 accordion colborder">
       <ul id="accordion">
         <li><a href="#" class="title">Quick Links</a>
           <ul>
             <li><a href="http://www.mybenny.com" target="_blank">My Benny Card</a></li>
             <li><a href="http://www.fidelity.com" target="_blank">401k – Fidelity</a></li>
             <li><a href="http://www.freshdirect.com" target="_blank">Order @ FreshDirect.com</a></li>
             <li><a href="https://www.freshdirectbenefits.com" target="_blank">FreshDirect Benefits Site</a></li>
             <li><a href="manual.php?id=emanualE_A">Employee Manual</a></li>
             <li><a href="manual.php?id=emanualS_A"><em>Manual del Empleado</em></a></li>
             <li><a href="http://intranet.freshdirect.icims.com" target="_blank">Internal Career Opportunities</a></li>
             <li><a href="http://hr.freshdirect.com/selfservice" target="_blank">Kronos Self Service</a></li>
             <li><a href="http://lawhelp.org/NY/" target="_blank">Law Help</a></li>
           </ul>
         </li>
         <li><a href="#" class="title">News and Updates</a>
           <ul>
             <li>
               <iframe src="http://kiosk.freshdirect.com/news.html" width="195" height="360" marginwidth="0" marginheight="0" frameborder="0" scroll="no"></iframe>
             </li>
           </ul>
         </li>
         <li><a href="#" class="title">Company  Calendar</a>
           <ul>
             <li style="font-size: 95%; color: #666666;">11 July 2009 - FreshDirect's 7th Year Anniversary</li>
             <li style="font-size: 95%; color: #666666;">28 July 2009 - Company Picnic (Company Closed)</li>
             <li style="font-size: 95%; color: #666666;">22 August 2009 - Ramadan (First day)</li>
             <li style="font-size: 95%; color: #666666;">07 September 2009 - Labor Day (Paid Holiday)</li>
             <li style="font-size: 95%; color: #666666;">20 September 2009 - Eid Al-Fittr</li>
             <li style="font-size: 95%; color: #666666;">27 September 2009 - Yom Kippur (Begins at Sundown)</li>
             <li style="font-size: 95%; color: #666666;">12 October 2009 - Columbus Day</li>
             <li style="font-size: 95%; color: #666666;">11 November 2009 - Veterans Day</li>
             <li style="font-size: 95%; color: #666666;">26 November 2009 - Thanksgiving Day (Paid Holiday)</li>
             <li style="font-size: 95%; color: #666666;">27 November 2009 - Eid Al-Addha (Company Closed)</li>
             <li style="font-size: 95%; color: #666666;">01 December 2009 - World AIDS Day</li>
	      <!--- <li style="font-size: 95%; color: #666666;">11 December 2009 - Chanukah (Begins at Sundown)</li>
			<li style="font-size: 95%; color: #666666;">25 December 2009 - Christmas Day (Paid Holiday)</li>
			<li style="font-size: 95%; color: #666666;">26 December 2009 - Company Closed</li>
			<li style="font-size: 95%; color: #666666;">01 January 2010 - New Year's Day / Kwanzaa (Paid Holiday)</li> --->
           </ul>
         </li>
       </ul>
     </div>
      <?php
        if ($_REQUEST['id'] == ''){
            include 'content/about.html';
        } else {
			if (file_exists('content/'.$_REQUEST['id'].'.php')){
				include 'content/'.$_REQUEST['id'].'.php';
			}else if (file_exists('content/'.$_REQUEST['id'].'.html')) {
				include 'content/'.$_REQUEST['id'].'.html';
			} else if (file_exists('content/'.$_REQUEST['id'].'.htm')){
				include 'content/'.$_REQUEST['id'].'.htm';
			}else {
				include 'content/about.html';
			}//if else if (file_exists)

        }
?></div><hr />
      <div><div id="footer">
<ul>
	<li>&copy; 2009 FreshDirect, LLC</li>
</ul>
	</div></div>
    </div>
</body>
</html>