<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit();
}
$dbServername = "sql7.freesqldatabase.com";
$dbUsername = "sql7293864";
$dbPassword = "At1zh5zd1Z";
$dbName = "sql7293864";

$con = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);


$result = mysqli_query($con,"SELECT * FROM Users ORDER BY scores DESC, name ASC");

$data = array();
while($row = mysqli_fetch_assoc($result))
{
	$data[] = $row;
}
echo json_encode($data);

$result->close();
mysqli_close($con);
?>