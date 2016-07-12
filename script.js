
function openCode(language){		
	var i;
	var x = document.getElementsByClassName("code");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(language).style.display = "block";
}

/*function test(){
	var input = document.getElementsByClassName("input");
	var a = Number(document.getElementById("txtA").value);
	var b = Number(document.getElementById("txtB").value);
	var c = Number(document.getElementById("txtC").value);

	if(isNaN(a) || isNaN(b) || isNaN(c)){
		window.alert("Entrada Invalida");
		initValues();
	}else{
		if(correct(a, b, c) != wrong(a, b, c)){
			window.alert("Muito Bem");
		}else{
			window.alert("Tente Novamente");
			initValues();
		}
	}
}
*/
function initValues(){
	var ipts = document.getElementsByClassName("variableInput");
	for (var i = 0; i < ipts.length; i++) {
		ipts[i].value = 0;
	}
}
/*
function correct(a, b, c){
	var maior = a;
	if(b > maior){
		maior = b;
	}
	if(c > maior){
		maior = c;
	}
	return maior;
}

function wrong(a, b, c){

	if (a>b && a>c){
		return a;
	}else if(b>a && b>c){
		return b;
	}else{
		return c;
	}

}
*/


function loadXMLDoc(dname){
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else
    {
        xhttp=new ActiveXObject("Microsoft.XMLDOM");
    }

    xhttp.open("GET",dname,false);
    xhttp.send();
    return xhttp.responseXML;
}
function myFunction(index) {

	var x;
    var xmlDoc = loadXMLDoc("https://dl.dropboxusercontent.com/u/85412057/question.xml"); 
    dataBase = xmlDoc.getElementsByTagName("dataBase")[0];
    question = dataBase.getElementsByTagName("question")[index];
    description = question.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    code = question.getElementsByTagName("code");
    entry = question.getElementsByTagName("entry");
    test = question.getElementsByTagName("test")[0].childNodes[0].nodeValue;
    
    
    html = "<div class = \"desc\">"+description+"</div>";    

    html+= "<div class=\"tabs\">"
    for (var i = 0; i < code.length; i++) {
    	html+= "  <a href=\"#\" onclick=\"openCode('"+code[i].getAttribute('language')+"');\">"+code[i].getAttribute('language')+"</a>";
    }
    html+= "</div>"


    for (var i = 0; i < code.length; i++) {
    	html+= "<div id = \""+code[i].getAttribute('language')+"\" class=\"code\" >";
    	html+= code[i].childNodes[0].nodeValue;
    	html+="</div>";
    }

    html += "<div class=\"input\">";
    for (var i = 0; i < entry.length; i++) {
    	html+= "<label>"+entry[i].childNodes[0].nodeValue+"</label>";
    	html+= "<input type=\"text\" class = \"variableInput\" id=\"txt"+entry[i].childNodes[0].nodeValue+"\"><br>";
    }
    html += "<input type=\"submit\" value=\"Submit\" onclick=\"test()\">";

    html += "</div>";
   	html += "<div class = \"result\" id = \"myResult\"> </div>"; 		
   		
	
	
    document.getElementById("question").innerHTML = html;

    html = "function test(){ var img; var input = document.getElementsByClassName(\"input\");";
	for (var i = 0; i < entry.length; i++) {
		html+= " var "+entry[i].childNodes[0].nodeValue + " = Number(document.getElementById(\"txt"+entry[i].childNodes[0].nodeValue+"\").value);";
	}

	html += "if(";
	for (var i = 0; i < entry.length-1; i++) {
		html+= " isNaN("+entry[i].childNodes[0].nodeValue + ") ||";
	}
	html+= " isNaN("+entry[entry.length-1].childNodes[0].nodeValue + "))";

	//provisório
	html+="{ window.alert(\"Entrada Invalida\"); initValues(); img = \"\";}";

	html+="else{ if(correct("
	for (var i = 0; i < entry.length-1; i++) {
		html+= " "+entry[i].childNodes[0].nodeValue + ", ";
	}
	html+= entry[entry.length-1].childNodes[0].nodeValue + ") != wrong(";
	for (var i = 0; i < entry.length-1; i++) {
		html+= " "+entry[i].childNodes[0].nodeValue + ", ";
	}
	html+= entry[entry.length-1].childNodes[0].nodeValue + ")){";

	//provisório
	html+= "/*window.alert(\"Muito Bem\");*/ img = \"<img src= \'http://i.makeagif.com/media/11-15-2015/4lDs7n.gif\' alt=\'Result\' width=\'100%\' height=\'100%\'>\";";

	html+=" }else{ ";
	html+=" /*window.alert(\"Tente Novamente\");*/ initValues(); img = \"<img src=\'http://vandalsbucket.s3-sa-east-1.amazonaws.com/spree/products/45992/large/Errou.jpeg?1439700751\' alt=\'Result\' width=\'100%\' height=\'100%\'>\";";
	html+="} } document.getElementById(\"myResult\").innerHTML = img;}"


	html += test;
	document.getElementById("scriptMaroto").innerHTML = html;
}	

