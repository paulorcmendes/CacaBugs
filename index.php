<!DOCTYPE html>
<html>
<head>
	<script src = "script.js"></script>	
	<script type="text/javascript" id = "scriptMaroto"></script>
	<title>Caça Bugs</title>

	<link rel="stylesheet" href="style.css">	
 	

</head>
<body>

	<div id = "question" class =  "total"><!--
		<div class="desc">
		O código abaixo deveria retornar o maior dentre três números inteiros. Entretanto, há um erro. Você consegue inserir entradas que façam o código retornar uma resposta errada?
		</div>
		<div class="tabs">
			<a href="#" onclick="openCode('lua');">Lua</a>
			<a href="#" onclick="openCode('c');">C</a>
		</div>
		
		<div id = "lua" class="code">
function max3(a, b, c)
	if a>b and a>c then
		return a
	elseif b>a and b>c then
		return b
	else
		return c
	end
end		
		</div>

		<div id = "c" class="code" >
int max3(int a, int b, int c){
	if (a>b && a>c){
		return a;
	}else if(b>a && b>c){
		return b;
	}else{
		return c;
	}
}
		</div>
		
		<div class="input">
			<form>
				<label>A</label>
				<input type="text" class = "variableInput" id="txtA"><br>
				<label>B</label>
				<input type="text" class = "variableInput" id="txtB"><br>
				<label>C</label>
				<input type="text" class = "variableInput" id="txtC"><br>
				<input type="submit" value="Submit" onclick="test();">
			</form>
		</div>
	</div>
	<p id = "demo">
		
	</p>-->
		<script>
		//myFunction(0);
		//myFunction(1);
		</script>
	</div>
	<?php
	$xml=simplexml_load_file("question.xml") or die("Error: Cannot create object");
	$index = 0;
	$html = "";
	foreach($xml->children() as $question) { 
		$html .= " function test".$index."(){ var img; var flag = false;";
		$test = $question->test;
		$code = $question->code;
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
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value.split(\" \");";
				$html.= " for(i = 0; i < ".$variableName.".length; i++){";
				$html.= " if(".$variableName."[i] == \" \" || ".$variableName."[i] == \"\"){";
				$html.= "flag = true; break;}";
				$html.= $variableName."[i] = Number(".$variableName+"[i]);";
				$html.= "if (isNaN(".$variableName."[i])) { flag = true; break; } }";
			}else{
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
			}
	    }
	    $html.="if(flag){ window.alert(\"Entrada Invalida\"); initValues(); img = \"\";}";

		$html.="else{ if(correct(";
		for ($i = 0; $i < sizeof($entry)-1; $i++) {
			$html.= " ".$entry[$i] . ", ";
		}
		$html.= $entry[sizeof($entry)-1] . ") != wrong(";
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
		
		$html .= " openCode(\"".$code['language']."\");";
		echo $html;
	} 
	?>
</body>
</html>
