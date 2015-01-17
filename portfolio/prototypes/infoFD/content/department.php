	<!---  ajax script that displays user record information --->
    <script type="text/javascript" src="scripts/getuserrecord.js"></script>

	<div class="span-4 colborder">
		<h2>Department Listing</h2>
	</div>
	<div class="span-12 last" id="drilldown">
		<div id="header">
			<div class="span-6">
				<h2>Directory</h2>
			</div>
			<div class="span-6 last">
			</div>
		</div>
<?php
$departmentalCondition = "AND ((DepartmentName.costCenter = 5601) OR (DepartmentName.costCenter = 2401))";

// specify DB name
$dbName= "Intranet" ;

// include DB connection settings
include_once( 'includes/db.php' );

$sqlRecords = 'SELECT EmployeeInfo.id as id, EmployeeInfo.userFullName as Name
				FROM EmployeeInfo, DepartmentName, EmployeeDetails
				WHERE EmployeeDetails.employeeID = EmployeeInfo.id
				AND EmployeeDetails.employeeDepartment = DepartmentName.id
				'.$departmentalCondition.'
				AND EmployeeInfo.isEnabled = 0
				ORDER BY EmployeeInfo.userFullName';

if (!($sqlDirectoryResults = mysql_query($sqlRecords,$db)))
{
	die("Error retrieving records: " . mysql_error() . "<br /><br /><br />Please contact your <a href='mailto:".$dbAdminInfo."'>database administrator</a> indicating the above error.");
} else
{
?>    
		<div id="mainSection" class="span-6">
			<ul>
			<?php
				while( $rowDisplayDirectory = mysql_fetch_array($sqlDirectoryResults) )
				{
					echo"<li><a href='javascript:fetchUserRecord(\"".$rowDisplayDirectory["id"]."\",\"loadArea\")'>".$rowDisplayDirectory["Name"]."</a></li>";
				}
			?>
			</ul>
		</div>
		<div id="loadArea" class="span-6 last disabled"></div>
		<!--- <div id="footer">
			<div class="span-6">&nbsp;</div>
			<div class="span-6 last"><a href="index.php?id=#">Import</a></div>
		</div> --->
<?php
mysql_close($db);
}
?>
	</div>