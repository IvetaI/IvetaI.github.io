<?php
$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "kursinis";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);


$result = mysqli_query($conn,"SELECT * FROM bandymas");

$data = array();
while($row = mysqli_fetch_assoc($result))
{
	$data[] = $row;
}
echo json_encode($data);


