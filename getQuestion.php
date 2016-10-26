<?php
include('session.php');
$con = mysqli_connect('localhost','root','','caca_bugs');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$user_check = $login_session["user"];
$sql="SELECT * FROM user WHERE email = '$user_check'";
$result = mysqli_query($con,$sql);



$arrayReturn = array();

while($row = mysqli_fetch_array($result)) {
    $arrayReturn[] = array('nome' => $row['nome'], 'question' => $row['question']);
}

echo json_encode($arrayReturn);

mysqli_close($con);
