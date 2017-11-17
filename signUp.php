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
          $error = "As senhas devem ser iguais!";
        }
      }else{
        $error = "Insira um nome de usuário válido!";
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
        <div style = "border-radius: 8px; background-color:#669999; color:#FFFFFF; text-align: left; width: 50%; font-size: 90%; padding: 1%; perspective: relative; font-family:Arial;">Developed by: Paulo Renato Conceição Mendes</div>
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
        <a class="submit" href="login.php">Página de Login</a>
        </div>
      </div>	   

   </body>
</html>