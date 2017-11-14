<?php
include('session.php');
$question = 0;
if(isset($_POST['currentQuestion'])){
    $question = $_POST['currentQuestion'];
}


$user_check = $login_session["user"];
$sql = "UPDATE user SET question = ".$question." WHERE email = '$user_check'";

if (mysqli_query($db, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($db);
}

mysqli_close($db);
