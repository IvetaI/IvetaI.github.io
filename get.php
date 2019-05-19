<?php
$dbServername = "sql7.freesqldatabase.com";
$dbUsername = "sql7291651";
$dbPassword = "1AKGnLYty1";
$dbName = "sql7291651";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);


$result = mysqli_query($conn,"SELECT * FROM bandymas");

$data = array();
while($row = mysqli_fetch_assoc($result))
{
	$data[] = $row;
}
echo json_encode($data);
?>

