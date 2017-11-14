<?php
   include("config.php");
   session_start();
   $error = "";
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['username']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 
      
      $sql = "SELECT id FROM user WHERE email = '$myusername' and senha = md5('$mypassword')";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
         //session_register("myusername");
         $_SESSION['login_user'] = $myusername;
         
         header("location: index.php");
      }else {
         $error = "Your Email or Password is invalid";
      }
   }
?>
<html>
   
   <head>
      <title>Login Page</title>
      
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
            <div style = "font-size:20px; background-color:#333333; color:#FFFFFF; padding:3px;"><b>Página de Login</b></div>
        
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
                  <input class="submit" type = "submit" value = "Login"/><br />
               </form>
               
               <div style = "font-size:18px; color:#cc0000; margin-top:10px"><?php echo $error; ?></div>
              
              
        
         </div>
         <a class="submit" href="signUp.php">Criar Nova Conta</a>
        </div>
      </div> 
     

   </body>
</html>