<?php
include('session.php');
$right = true;
if(isset($_POST["right"])){
	$right = ($_POST["right"] == "true");
}
$question = 0;
if(isset($_POST['question'])){
    $question = $_POST['question'];
}

$con = mysqli_connect('localhost','root','','caca_bugs');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}
$id_user = $login_session["id"];

$sql = "INSERT INTO user (id_user, data, right, question) values (".$id_user.", NOW(),".$right.",".$question."); ";

if (mysqli_query($con, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($con);
}

mysqli_close($con);
