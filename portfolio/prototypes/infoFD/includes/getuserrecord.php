<?php
$userID=$_GET["q"];

$sqlUserRecord = 'SELECT EmployeeInfo.userFullName As Name, DepartmentName.departmentName As Department, EmployeeDetails.employeePosition As Position, EmployeeInfo.userEmailAddress As EmailAddress,  EmployeeDetails.employeeWorkPhoneNumber As WorkPhoneNumber, EmployeeDetails.employeePersonalPhoneNumber As PersonalPhoneNumber,EmployeeDetails.employeeExtension As Extension, EmployeeDetails.employeeNextel As Nextel, EmployeeDetails.employeeDescription As Description, EmployeeInfo.id
				  FROM EmployeeInfo, DepartmentName, EmployeeDetails
				  WHERE EmployeeDetails.employeeID = '.$userID.' 
				  AND EmployeeDetails.employeeDepartment = DepartmentName.id
				  AND EmployeeInfo.id = '.$userID;

// specify DB name
$dbName= "Intranet" ;

// include DB connection settings
include_once( 'db.php' );

if (!($sqlUserRecordResults = mysql_query($sqlUserRecord,$db)))
{
	die("Error retrieving records: " . mysql_error() . "<br /><br /><br />Please contact your <a href='mailto:".$dbAdminInfo."'>database administrator</a> indicating the above error.");
} else
{
	while( $rowUserRecord = mysql_fetch_array($sqlUserRecordResults) )
	{
?>
<div class="title">
<h2>
<?php echo $rowUserRecord["Name"]; ?></h2>
<?php echo $rowUserRecord["Position"]; ?>
</div>
<div class="clear"></div><hr />


<div class="span-2 subtitle">Department</div>

<div class="span-3 last"><?php echo $rowUserRecord["Department"]; ?></div>

<div class="clear"></div><hr />





<div class="span-2 subtitle"> Email Address</div>

<div class="span-3 last"><a href="mailto:<?php echo $rowUserRecord["EmailAddress"]; ?>"><?php echo $rowUserRecord["EmailAddress"]; ?></a></div>

<div class="clear"></div><hr />



<div class="span-2 subtitle">Work Phone Number</div>

<div class="span-3 last"><?php echo $rowUserRecord["WorkPhoneNumber"]; ?></div>

<div class="clear"></div><hr />



<div class="span-2 subtitle">Personal Phone Number</div>

<div class="span-3 last"><?php echo $rowUserRecord["PersonalPhoneNumber"]; ?></div>

<div class="clear"></div><hr />



<div class="span-2 subtitle"> Extension</div>

<div class="span-3 last"><?php echo $rowUserRecord["Extension"]; ?></div>

<div class="clear"></div><hr />



<div class="span-2 subtitle">Nextel</div>

<div class="span-3 last"><?php echo $rowUserRecord["Nextel"]; ?></div>

<div class="clear"></div><hr />



<div class="span-2 subtitle">Notes</div>

<div class="span-3 last"><?php echo $rowUserRecord["Description"]; ?></div>

<div class="clear"></div><hr />
<?php
	}
}
mysql_close($db);
?>
