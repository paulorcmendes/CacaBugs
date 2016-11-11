<?php
function generate(){
	if(!file_exists ("scriptQuestions.js")){
		$xml=simplexml_load_file("question.xml") or die("Error: Cannot create object");
		$index = 0;
		$html = "";
		$html .= "var lastIndex = ".(sizeof($xml->children())-1).";";
		foreach($xml->children() as $question) { 
			$html .= " function test".$index."(){var flag = false; var flagI = false; ";
			$test = $question->test;
			$code = $question->code;
			$entry = $question->entry;
		    foreach ($question->entry as $variableName) {
		    	$type = $variableName["type"];
		    	$html .=  " flagI = false; ";
		    	if($type == "int"){
					$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
					$html.= "if (".$variableName." == \"\") { flag = true; flagI = true;}";
					$html.= " var ".$variableName. " = Number(document.getElementById(\"txt".$variableName."\").value);";
					$html.= "if (isNaN(".$variableName.") || !Number.isInteger(".$variableName.")) { flag = true; flagI = true;}";
					$html.= " if(flagI == true) entradaInvalida(\"" . $variableName."\");";
				}else if($type == "float"){
					$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
					$html.= "if (".$variableName." == \"\") { flag = true;  flagI = true;}";
					$html.= " var ".$variableName. " = Number(document.getElementById(\"txt".$variableName."\").value);";
					$html.= "if (isNaN(".$variableName.")) { flag = true;  flagI = true;}";
					$html.= " if(flagI == true) entradaInvalida(\"" . $variableName."\");";
				}else if($type == "vector"){
					$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value.split(\" \"); ";
					$html.= " for(i = 0; i < ".$variableName.".length; i++){ ";
					$html.= " if(".$variableName."[i] == \" \" || ".$variableName."[i] == \"\"){ ";
					$html.= "flag = true;  flagI = true; break;} ";
					$html.= $variableName."[i] = Number(".$variableName."[i]); ";
					$html.= " if(isNaN(".$variableName."[i])) { flag = true;  flagI = true; break; } } ";
					$html.= " if(flagI == true) entradaInvalida(\"" . $variableName."\");";
				}else{
					$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
				}
		    }
		    $html.="if(flag){ resultadoInvalido(".$index."); }";

			$html.="else{ reactToAnswer(correct".$index."(";
			for ($i = 0; $i < sizeof($entry)-1; $i++) {
				$html.= " ".$entry[$i] . ", ";
			}
			$html.= $entry[sizeof($entry)-1] . ") != wrong".$index."(";
			for ($i = 0; $i < sizeof($entry)-1; $i++) {
				$html.= " ".$entry[$i] . ", ";
			}
			$html.= $entry[sizeof($entry)-1] . "),".$index.",";
			//generateMsgToLog
			for ($i = 0; $i < sizeof($entry)-1; $i++) {
				$html.= "\"".$entry[$i].": \"+".$entry[$i] . "+\"; \"+";
			}
			$html.= "\"".$entry[sizeof($entry)-1].": \" +".$entry[sizeof($entry)-1];

			$html.= " ); } }";

			$html.= $test;	
			
			$myfile = fopen("scriptQuestions.js", "w") or die("Unable to open file!");
			fwrite($myfile, $html);
			fclose($myfile);
			$index++;
		} 
	}
}
?>