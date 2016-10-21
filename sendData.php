<?php
$question = 0;
if(isset($_POST['currentQuestion'])){
    $question = $_POST['currentQuestion'];
}

$con = mysqli_connect('localhost','root','','caca_bugs');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql = "UPDATE user SET question =".$question." WHERE id=1";

if (mysqli_query($con, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($con);
}

mysqli_close($con);
