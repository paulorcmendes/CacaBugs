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
$tipo = "open";
if(isset($_POST['tipo'])){
	$tipo = $_POST['tipo'];

}
$time = 0;
if(isset($_POST['time'])){
	$time = $_POST['time'];
}
$id_user = $login_session["id"];

$sql = "INSERT INTO log(id_user, tipo, isRight, question, entries, timeSpent) values (".$id_user.",\"".$tipo."\",".$right.",".$question.",'".$entries."',".$time."); ";

if (mysqli_query($db, $sql)) {
    echo "Record inserted successfully";
} else {
    echo "Error updating record: " . mysqli_error($db);
}

mysqli_close($db);
