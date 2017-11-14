<?php
   include("config.php");
   //session_start();
   $error = "";
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['username']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 
      $mypasswordR = mysqli_real_escape_string($db,$_POST['passwordR']);
      if($myusername != ""){
        if($mypassword != "" && $mypassword == $mypasswordR){
          $sql = "INSERT INTO user(email, nome, senha, question) values ('$myusername', '$myusername', MD5('$mypassword'), '0')";
          
          if (mysqli_query($db, $sql)) {
              header('location: login.php');
          } else {
              echo "Error updating record: " . mysqli_error($db);
          }
        }
        else{
          $error = "Passords do not match";
        }
      }else{
        $error = "Insert a valid email!";
      }
   }
?>
<html>
   
   <head>
      <title>Create Account</title>
      
      <link rel="stylesheet" href="style.css">
      
   </head>
   
   <body bgcolor = "#FFFFFF">
      <div class = "logo">
        <a href=""><img class = "imgLogo" src="logo.png"></a>
        <a href="https://telemidiaufma.slack.com"><img class = "parceiro" src="parceiro.png"></a>

      </div>  
      <div id = "divTotal" class="total">
        <div align = "center">
         <div style = "" align = "left">
            <div style = "font-size:20px; background-color:#333333; color:#FFFFFF; padding:3px;"><b>Criar Conta</b></div>
        
            <div class= "container" style = "font-size:15px; margin:30px">
               
               <form action = "" method = "post">
                  <div class="form-group">
                    <label>Email:</label><br /><br />
                    <input class="variableInput" type = "text" name = "username" class = "box"/><br /><br />
                  </div>
                  <div class="form-group">
                    <label>Senha:</label><br /><br />
                    <input class="variableInput" type = "password" name = "password" class = "box" /><br/><br />
                  </div>
                  <div class="form-group">
                    <label>Repita a Senha:</label><br /><br />
                    <input class="variableInput" type = "password" name = "passwordR" class = "box" /><br/><br />
                  </div>
                  <input class="submit" type = "submit" value = "Criar"/><br />
               </form>
               
               <div style = "font-size:18px; color:#cc0000; margin-top:10px"><?php echo $error; ?></div>
          
            </div>
        
         </div>
      
        </div>
      </div>	   

   </body>
</html>