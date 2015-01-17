<?php
// contact email address in case there's an error
$dbAdminInfo = "cchristophorou@freshdirect.com";

$db = mysql_connect("nyc1fdrt02.nyc1.freshdirect.com", "Intranet","Chipmunk") or die("Error: " . mysql_error());
mysql_select_db($dbName,$db) or die("Could not connect to database");
?>