<?php
session_start();
include 'connect.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTINS');
header('Access-Control-Allow-Headers: Origin,Content-Type,X-Auth-Token');
$data=json_decode(file_get_contents("php://input"));
$output=array();
$user='admin';

/*** Timings View Table ***/

$sql="SELECT * FROM timings";
$res=mysqli_query($con,$sql) or die(mysqli_error($con));
while($row=mysqli_fetch_assoc($res))
{
    $output[]=$row;
}
echo json_encode($output);
mysqli_close($con);
?>