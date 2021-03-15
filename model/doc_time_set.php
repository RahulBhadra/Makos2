<?php
session_start();
include 'connect.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTINS');
header('Access-Control-Allow-Headers: Origin,Content-Type,X-Auth-Token');
$data=json_decode(file_get_contents("php://input"));
$ph='7005261744';
$dname='Dr.ABC';
$days=$data->days;
$mor_from=$data->mor_from;
$mor_to=$data->mor_to;
$even_from=$data->even_from;
$even_to=$data->even_to;
/***Setting Time in Timing table****/
$sql="INSERT INTO `timings`(`ph`, `dname`, `days`,`mor_from`,`mor_to`,`even_from`,`even_to`) VALUES('$ph','$dname','$days','$mor_from','$mor_to','$even_from','$even_to')";
$res=mysqli_query($con,$sql) or die(mysqli_error($con));
if($res){
    echo "Timming added successfully....";
}
else{
    echo "Error...";
}
mysqli_close($con);
?>