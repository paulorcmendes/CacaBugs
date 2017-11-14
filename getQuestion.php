<?php
include('session.php');
//include('config.php');

mysqli_select_db($db,"ajax_demo");
$user_check = $login_session["user"];
$sql="SELECT * FROM user WHERE email = '$user_check'";
$result = mysqli_query($db,$sql);



$arrayReturn = array();

while($row = mysqli_fetch_array($result)) {
    $arrayReturn[] = array('nome' => $row['nome'], 'question' => $row['question']);
}

echo json_encode($arrayReturn);

mysqli_close($db);
