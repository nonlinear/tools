function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

var filesadded=""; //list of files already added

function checkloadjscssfile(filename, filetype)
{
	if (filesadded.indexOf("["+filename+"]")==-1)
	{
		loadjscssfile(filename, filetype)
		filesadded+="["+filename+"]" //List of files added in the form "[filename1],[filename2],etc"
	} //else
		//alert("file already added!")
}

var xmlHttp
var loadsearchstatustext = "<br />&nbsp;&nbsp;&nbsp;&nbsp;<img src='/images/loading.gif' /> Searching...<br /><br />"

function fetchUserRecord(str,targetDiv)
{ 
xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
	 alert ("Browser does not support HTTP Request")
	 return
	}

	//if (str != "")
	//{
		var url="includes/getuserrecord.php"
		url=url+"?q="+str
		url=url+"&sid="+Math.random()
		xmlHttp.onreadystatechange= function() { fetchStateChanged(targetDiv); }
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	//}
}

function fetchStateChanged(targetDiv) 
{ 
document.getElementById(targetDiv).innerHTML = loadsearchstatustext; // show fetching message
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{
		// need to load css since AJAX does not accept scripts from the parent page.
		checkloadjscssfile('/css/drilldown.css', 'css');
		document.getElementById(targetDiv).innerHTML=xmlHttp.responseText;
	} 
}

function GetXmlHttpObject()
{
var xmlHttp=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 //Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}