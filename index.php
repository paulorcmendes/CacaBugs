<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<html>
<head>
	<?php
		include 'generateFunctions.php';
		generate(); 
	?>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src = "script.js"></script>		
	<script src = "scriptQuestions.js"></script>
	<title>Caça Bugs</title>

	<link rel="stylesheet" href="style.css">		

</head>
<body>	
	<div class = "logo">
	  <a href=""><img class = "imgLogo" src="logo.png"></a>
	  <a href="https://telemidiaufma.slack.com"><img class = "parceiro" src="parceiro.png"></a>
	</div>
	<div id = "divTotal" class="total">
		<script>
		loadHTMLOfMenu();
		</script>	
	</div>
	<div id="overlay-back"></div>
</body>
</html>
