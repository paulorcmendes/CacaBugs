var xmlDoc = loadXMLDoc("question.xml"); 
var dataBase = xmlDoc.getElementsByTagName("dataBase")[0];

function openCode(language){		
	var i;
	var x = document.getElementsByClassName("code");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(language).style.display = "block";
}

function initValues(){
	var ipts = document.getElementsByClassName("variableInput");
	for (var i = 0; i < ipts.length; i++) {
		ipts[i].value = "";
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
function loadHTMLOfQuestion(index) {
    var html = "";
	var x;    
    var question = dataBase.getElementsByTagName("question")[index];
    var description = question.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    var code = question.getElementsByTagName("code");
    var entry = question.getElementsByTagName("entry");
    var test = question.getElementsByTagName("test")[0].childNodes[0].nodeValue;
    var divBlack = document.createElement("DIV");
    divBlack.id = "overlay-back";
    html += "<div id = \"question\" class =  \"total\">";
    html += "<div class = \"desc\">"+description+"</div>";    

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
    html += "<input type=\"submit\" value=\"Submit\" onclick=\"test"+index+"()\">";

    html += "</div>";
   	html += "<div class = \"result\" id = \"myResult\"> </div>";
    html += "</div>";	
    document.body.innerHTML = html;
    document.body.appendChild(divBlack);
    openCode(code[0].getAttribute('language'));
}	

function loadHTMLOfMenu(numberOfColumns){
    if(numberOfColumns == null) numberOfColumns = 5;
    var questions = dataBase.getElementsByTagName("question");
    var divMenu = document.createElement("DIV");
    var table = document.createElement("TABLE");
    var actualRow;
    var iRow = 0;
    divMenu.className = "menu";
    for(var i = 0; i<questions.length; i++){
        if(i%numberOfColumns == 0) actualRow = table.insertRow(iRow++);
        actualRow.insertCell(i%numberOfColumns).innerHTML = "<button onclick = \"loadHTMLOfQuestion("+i+");\">Question "+(i+1)+"</button>";
    }
    divMenu.appendChild(table);
    document.body.innerHTML = "";
    document.body.appendChild(divMenu);
}

function reactToAnswer(result, index){
    var img;
    var divPopup = document.createElement("DIV");
    divPopup.id = "overlay";
    
    
    if(result){        

        if(index != lastIndex){ 
            divPopup.innerHTML = "<div id=\"caixaResposta\"><p>Você Passou de Nível!</p></br><a href=\"#\" class=\"caixaRespostaButton\">Next</a> <a href=\"#\" class=\"caixaRespostaButton\">Try Again</a> <a href=\"#\" class=\"caixaRespostaButton\">Menu</a></div>";
            //loadHTMLOfQuestion(index+1); 
        }else {
            divPopup.innerHTML = "<div id=\"caixaResposta\"><p>Você Venceu o Caça Bugs!</p></br><a href=\"#\" class=\"caixaRespostaButton\">Try Level Again</a> <a href=\"#\" class=\"caixaRespostaButton\">Menu</a></div>";
            //loadHTMLOfMenu();
        }
        document.body.appendChild(divPopup);
        $(document).ready(function(){
            $('#overlay, #overlay-back').fadeIn(500);                
        });
        return ;
        img = "<img src= \'http://i.makeagif.com/media/11-15-2015/4lDs7n.gif\' alt=\'Result\' width=\'100%\' height=\'100%\'>";
    }else{
        /*window.alert(\"Tente Novamente\");*/ 
        initValues(); 
        img = "<img src=\'http://vandalsbucket.s3-sa-east-1.amazonaws.com/spree/products/45992/large/Errou.jpeg?1439700751\' alt=\'Result\' width=\'100%\' height=\'100%\'>";
    } 
    document.getElementById("myResult").innerHTML = img;
}
