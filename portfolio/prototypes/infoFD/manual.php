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
  </head>
  <!--[if lt IE 7 ]><body class="ie6"><![endif]--> 
  <!--[if IE 7 ]><body class="ie7"><![endif]--> 
  <!--[if IE 8 ]><body class="ie8"><![endif]--> 
  <!--[if !IE]>--><body><!--<![endif]-->
  <div class="container">
     
  <div id="header"><a href="/"><img src="images/blank.gif" border="0"  id="logo" /></a>
 <hr />
  <div id="menu">
   <?php include("menu.html") ?>
 </div>
 </div>
     <hr />
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
?>
    </div><hr />
      <div><div id="footer">
<ul>
	<li>&copy; 2009 FreshDirect, LLC</li>
</ul>
	</div></div>
    </div>
</body>
</html>