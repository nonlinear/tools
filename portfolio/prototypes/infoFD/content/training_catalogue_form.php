<?php
$className = strip_tags(urldecode($_GET["cid"]));

$employeeName = strip_tags($_POST["employeeName"]);
//$employeeEmail = strip_tags($_POST["employeeEmail"]);
$supervisorName = strip_tags($_POST["supervisorName"]);
$departmentName = strip_tags($_POST["departmentName"]);
$idNumber = strip_tags($_POST["idNumber"]);
?>
<script type="text/javascript">
function validateForm()
{
	var employeeName = document.getElementById("employeeName").value;
	//var employeeEmail = document.getElementById("employeeName").value;
	var supervisorName = document.getElementById("supervisorName").value;
	var departmentName = document.getElementById("departmentName").value;
	var className = document.getElementById("className").value;
	var idNumber = document.getElementById("idNumber").value;
	
	if ((employeeName != "") && (supervisorName != "") && (departmentName != "") && (className != "") && (idNumber != ""))
	{
		document.getElementById("classForm").submit();
	} else
	{
		alert("Please complete ALL required fields.");
		return false;
	}
}
</script>
<h2>Class Registration Form</h2>
<div class="span-6 colborder mini"><p>Due to limitations on class size attendees will be selected in the order of when the class registration form is received.  A Human Resources team member will contact you to confirm if you are registered or on a waiting list.  Please ensure you have the availability on your calendar prior to registration.  Thank you.<br /><br />
<a href="index.php?id=training_catalogue">Return to Training Class Catalogue...</a></p></div>
<div class="span-10 last">
<?php
if ((empty($employeeName)) || (empty($supervisorName)) || (empty($departmentName)) || (empty($idNumber)))
{
?>
<form action="" class="form" method="post" id="classForm" name="classForm">
<div id="warningText">* All fields are required</div>
  <div class="field">
    <div class="span-4 label"> Employee Name</div>
    <div class="span-6 last">
      <input type="text" class="validate[required,custom[onlyNumber],length[5,5]] input" id="employeeName" name="employeeName" value="" />&nbsp;&nbsp;<span id="warningText">*</span>
    </div>
    <div class="clear"></div>
  </div>
  <div class="field">
    <div class="span-4 label"> Email Address</div>
    <div class="span-6 last">
      <input name="employeeEmail" type="text" class="validate[required,custom[onlyNumber],length[5,5]] input" id="employeeEmail" />
    </div>
    <div class="clear"></div>
  </div>
  <div class="field">
    <div class="span-4 label"> Supervisor Name</div>
    <div class="span-6 last">
      <input name="supervisorName" type="text" class="validate[required,custom[onlyNumber],length[5,5]] input" id="supervisorName" />&nbsp;&nbsp;<span id="warningText">*</span>
    </div>
    <div class="clear"></div>
  </div>
  <div class="field">
    <div class="span-4 label"> Department</div>
    <div class="span-6 last">
      <select name="departmentName" id="departmentName">
        <option value="" selected="selected"> Select... </option>
        <option value="Accounting/Finance">Accounting/Finance</option>
		<option value="Bakery/Pastry">Bakery/Pastry</option>
		<option value="Catering">Catering</option>
		<option value="Center of Excellence">Center of Excellence</option>
		<option value="Corporate Office Services">Corporate Office Services (COS)</option>
		<option value="Creative">Creative</option>
		<option value="Customer Service">Customer Service</option>
		<option value="Dairy">Dairy</option>
		<option value="Deli/Cheese">Deli/Cheese</option>
		<option value="Food Safety">Food Safety</option>
		<option value="Freezer">Freezer</option>
		<option value="Grocery/Grocery Replenishment">Grocery/Grocery Replenishment</option>
		<option value="Human Resources">Human Resources</option>
		<option value="Kitchen">Kitchen</option>
		<option value="Legal">Legal</option>
		<option value="Marketing">Marketing</option>
		<option value="Meat">Meat</option>
		<option value="Plant Maintenance">Plant Maintenance</option>
		<option value="Plant Management">Plant Management</option>
		<option value="Produce">Produce</option>
		<option value="Purchasing & Merchandising">Purchasing & Merchandising</option>
		<option value="R&D">R & D</option>
		<option value="Receiving">Receiving</option>
		<option value="Sanitation">Sanitation</option>
		<option value="Seafood">Seafood</option>
		<option value="Security">Security</option>
		<option value="Shipping">Shipping</option>
		<option value="Sortation">Sortation</option>
		<option value="Supply Chain Management">Supply Chain Management</option>
		<option value="Technology">Technology</option>
		<option value="Transportation">Transportation</option>
     </select>&nbsp;&nbsp;<span id="warningText">*</span>
    </div>
    <div class="clear"></div>
  </div>
  <div class="field">
    <div class="span-4 label"> Class Name</div>
    <div class="span-6 last">
      <input name="className" type="text" class="validate[required,custom[onlyNumber],length[5,5]] input" id="className" value="<?php echo $className; ?>" readonly="readonly" />
    </div>
    <div class="clear"></div>
  </div>
  <div class="field">
    <div class="span-4 label"> ID Number</div>
    <div class="span-6 last">
      <input name="idNumber" type="text" class="validate[required,custom[onlyNumber],length[5,5]] input" id="idNumber" />&nbsp;&nbsp;<span id="warningText">*</span>
    </div>
    <div class="clear"></div>
  </div>
    <div class="field"><a class="button" href="index.php?id=training_catalogue">Cancel</a>
      <a class="button" href="#" onclick="validateForm();">Submit</a>
    </div>
</form>
</div>
<?php
} else
{
	$employeeName = strip_tags($_POST["employeeName"]);
	$employeeEmail = strip_tags($_POST["employeeEmail"]);
	$supervisorName = strip_tags($_POST["supervisorName"]);
	$departmentName = strip_tags($_POST["departmentName"]);
	$className = strip_tags($_POST["className"]);
	$idNumber = strip_tags($_POST["idNumber"]);

	$emailAddress = "humanresources@freshdirect.com";

	$to = $emailAddress;
	$subject = "FreshDirect Training Class Registration";
	$email = "donotreply@freshdirect.com" ;
	$message = "Class registration has been requested. 
The following are the registration information:
***********************************************
Employee Name: ".$employeeName."
Employee Email: ".$employeeEmail."
Supervisor Name: ".$supervisorName."
Department Name: ".$departmentName."
Class Name: ".$className."
ID Number: ".$idNumber."";

	$headers = "From: $email";

	$sent = mail($to, $subject, $message, $headers) ;

	if($sent)
	{
		print "<div style='font-size: 90%; padding: 10px 0px;'>Thank you for your interest in registering for a FreshDirect training class.</div>
				<div style='font-size: 90%; padding: 10px 0px;'>Someone from Human Resources willl contact you shortly.</div>";
	} else
	{
		print "There was an error sending your registration information";
	}
}
?>