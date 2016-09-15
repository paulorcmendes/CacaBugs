<!DOCTYPE html>
<html>
<head>

	<script src = "script.js"></script>	
	<?php
	$xml=simplexml_load_file("question.xml") or die("Error: Cannot create object");
	$index = 0;
	$html = "";
	foreach($xml->children() as $question) { 
		$html .= " function test".$index."(){ var img; var flag = false;";
		$test = $question->test;
		$code = $question->code;
		$entry = $question->entry;
	    foreach ($question->entry as $variableName) {
	    	$type = $variableName["type"];
	    	if($type == "int"){
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
				$html.= "if (".$variableName." == \"\") { flag = true;}";
				$html.= " var ".$variableName. " = Number(document.getElementById(\"txt".$variableName."\").value);";
				$html.= "if (isNaN(".$variableName.") || !Number.isInteger(".$variableName.")) { flag = true;}";
			}else if($type == "float"){
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
				$html.= "if (".$variableName." == \"\") { flag = true;}";
				$html.= " var ".$variableName. " = Number(document.getElementById(\"txt".$variableName."\").value);";
				$html.= "if (isNaN(".$variableName.")) { flag = true;}";
			}else if($type == "vector"){
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value.split(\" \"); ";
				$html.= " for(i = 0; i < ".$variableName.".length; i++){ ";
				$html.= " if(".$variableName."[i] == \" \" || ".$variableName."[i] == \"\"){ ";
				$html.= "flag = true; break;} ";
				$html.= $variableName."[i] = Number(".$variableName."[i]); ";
				$html.= " if(isNaN(".$variableName."[i])) { flag = true; break; } } ";
			}else{
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
			}
	    }
	    $html.="if(flag){ window.alert(\"Entrada Invalida\"); initValues(); img = \"\";}";

		$html.="else{ if(correct".$index."(";
		for ($i = 0; $i < sizeof($entry)-1; $i++) {
			$html.= " ".$entry[$i] . ", ";
		}
		$html.= $entry[sizeof($entry)-1] . ") != wrong".$index."(";
		for ($i = 0; $i < sizeof($entry)-1; $i++) {
			$html.= " ".$entry[$i] . ", ";
		}
		$html.= $entry[sizeof($entry)-1] . ")){";

		//provisório
		$html.= "myFunction(".($index+1)."); return ; /*window.alert(\"Muito Bem\");*/ img = \"<img src= \'http://i.makeagif.com/media/11-15-2015/4lDs7n.gif\' alt=\'Result\' width=\'100%\' height=\'100%\'>\";";
		///html+=" myFunction("+(index+1)+");";
		$html.=" }else{ ";
		$html.=" /*window.alert(\"Tente Novamente\");*/ initValues(); img = \"<img src=\'http://vandalsbucket.s3-sa-east-1.amazonaws.com/spree/products/45992/large/Errou.jpeg?1439700751\' alt=\'Result\' width=\'100%\' height=\'100%\'>\";";
		$html.="} } document.getElementById(\"myResult\").innerHTML = img;}";

		$html .= $test;		
		
		$myfile = fopen("scriptQuestions.js", "w") or die("Unable to open file!");
		fwrite($myfile, $html);
		fclose($myfile);
		//echo $html;
		$index++;
	} 
	?>
	<script src = "scriptQuestions.js"></script>
	<title>Caca Bugs</title>

	<link rel="stylesheet" href="style.css">	
 	

</head>
<body>

	<div id = "question" class =  "total">
		<script>
		myFunction(5);
		</script>
	</div>	
</body>
</html>
