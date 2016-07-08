
function openCode(language){		
	var i;
	var x = document.getElementsByClassName("code");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(language).style.display = "block";
}

function test(){
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

function initValues(){
	var ipts = document.getElementsByClassName("variableInput");
	for (var i = 0; i < ipts.length; i++) {
		ipts[i].value = 0;
	}
}

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
function myFunction() {
	var x;
    var xmlDoc = loadXMLDoc("https://raw.githubusercontent.com/paulorcmendes/CacaBugs/master/questions.xml?token=AIO7ytiCJqV0tcjswYbmHUuBonFiFPHiks5XiOlWwA%3D%3D"); 
    x = xmlDoc.getElementsByTagName("question")[0].childNodes[0].nodeValue;
    document.getElementById("demo").innerHTML = x;	    

}

