<?php
if(isset($_POST['currentQuestion'])){
    $question = $_POST['currentQuestion'];

    echo $question+32;

}
