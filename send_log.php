<?php
include('session.php');
$right = "false";
if(isset($_POST["right"]) && ($_POST["right"] == "true")){
	$right = "true";
}
$question = 0;
if(isset($_POST['question'])){
    $question = $_POST['question'];
}
$entries = "";
if(isset($_POST['sendEntries'])){
	$entries = $_POST['sendEntries'];
}
$con = mysqli_connect('localhost','root','','caca_bugs');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
$id_user = $login_session["id"];

$sql = "INSERT INTO log(id_user, tipo, isRight, question, entries) values (".$id_user.",\"submit\",".$right.",".$question.",'".$entries."'); ";

if (mysqli_query($con, $sql)) {
    echo "Record inserted successfully";
} else {
    echo "Error updating record: " . mysqli_error($con);
}

mysqli_close($con);
