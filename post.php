<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit();
}
$q = intval($_GET['q']);

$dbServername = "sql7.freesqldatabase.com";
$dbUsername = "sql7293864";
$dbPassword = "At1zh5zd1Z";
$dbName = "sql7293864";

$con = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);


$s = $q + $_SESSION['score'];


$sql = "UPDATE Users SET scores = '".$s."' WHERE name ='".$_SESSION['name']."'"; 

$result = mysqli_query($con,$sql);
$result->close();
mysqli_close($con);
?>