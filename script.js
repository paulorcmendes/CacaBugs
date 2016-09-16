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
    $(document).ready(function(){
        $('#overlay, #overlay-back').fadeOut(500);                
    });
    var html = "";
	var x;    
    var question = dataBase.getElementsByTagName("question")[index];
    var description = question.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    var code = question.getElementsByTagName("code");
    var entry = question.getElementsByTagName("entry");
    var test = question.getElementsByTagName("test")[0].childNodes[0].nodeValue;

    html += "<div class = \"question\">";
    html += "<div class = \"titleQuestion\">Question "+(index+1)+"</div>";
    html += "<div class = \"desc\">"+description+"</div>";    

    html+= "<div class=\"tabs\">"
    for (var i = 0; i < code.length; i++) {
    	html+= "  <a href=\"#\" onclick=\"openCode('"+code[i].getAttribute('language')+"');\" class = \"buttonTab\">"+code[i].getAttribute('language')+"</a>";
    }
    html+= "</div>"


    for (var i = 0; i < code.length; i++) {
    	html+= "<div id = \""+code[i].getAttribute('language')+"\" class=\"code\" >";
    	html+= code[i].childNodes[0].nodeValue;
    	html+="</div>";
    }
    html += "<input type=\"submit\" id = \"btnMenu\" class=\"submit\" value=\"Menu\" onclick=\"loadHTMLOfMenu();\">";
    html += "<div class=\"input\">";
    for (var i = 0; i < entry.length; i++) {
    	html+= "<label>"+entry[i].childNodes[0].nodeValue+"</label> ";
    	html+= "<input type=\"text\" class = \"variableInput\" id=\"txt"+entry[i].childNodes[0].nodeValue+"\"><br>";
    }
    html += "<input type=\"submit\" class=\"submit\" value=\"Submit\" onclick=\"test"+index+"()\">";

    html += "</div>";
   	html += "<div class = \"result\" id = \"myResult\"> </div>";    
    html += "</div>";	

    document.getElementById("divTotal").innerHTML = html;   
    openCode(code[0].getAttribute('language'));
}	

function loadHTMLOfMenu(numberOfColumns){
    $(document).ready(function(){
        $('#overlay, #overlay-back').fadeOut(500);                
    });
    if(numberOfColumns == null) numberOfColumns = 5;
    var questions = dataBase.getElementsByTagName("question");
    var divIns = document.createElement("DIV");
    var divMenu = document.createElement("DIV");
    var table = document.createElement("TABLE");
    var actualRow;
    var iRow = 0;
    table.className = "tableMenu";
    divIns.className = "instruction";
    divMenu.className = "menu";
    divMenu.appendChild(divIns);
    for(var i = 0; i<questions.length; i++){
        if(i%numberOfColumns == 0) actualRow = table.insertRow(iRow++);
        actualRow.insertCell(i%numberOfColumns).innerHTML = "<button onclick = \"loadHTMLOfQuestion("+i+");\" class = \"menuQuestion\">Question "+(i+1)+"</button>";
    }
    divMenu.appendChild(table);
    divIns.innerHTML = "Select a Question";    
    document.getElementById("divTotal").innerHTML = "";
    document.getElementById("divTotal").appendChild(divMenu);
}

function reactToAnswer(result, index){
    var img;
    var divPopup = document.createElement("DIV");
    divPopup.id = "overlay";
    
    
    if(result){        
        var divCaixaResposta = document.createElement("DIV");
        divCaixaResposta.id = "caixaResposta";
        if(index != lastIndex){ 
            para = document.createElement("p");
            para.appendChild(document.createTextNode("Você Passou de Nível!"));
            divCaixaResposta.appendChild(para);
            divCaixaResposta.appendChild(document.createElement("BR"));
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfQuestion("+(index+1)+"); return false;\">Next</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfQuestion("+(index)+"); return false;\">Try Again</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfMenu(); return false;\">Menu</a></div>";
            divPopup.appendChild(divCaixaResposta);
            //loadHTMLOfQuestion(index+1); 
        }else {
            para = document.createElement("p");
            para.appendChild(document.createTextNode("Você Venceu o Caça Bugs!"));
            divCaixaResposta.appendChild(para);
            divCaixaResposta.appendChild(document.createElement("BR"));
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfQuestion("+(index)+"); return false;\">Try Level Again</a> ";
            divCaixaResposta.innerHTML += "<a href=\"#\" class=\"caixaRespostaButton\" onclick = \"loadHTMLOfMenu(); return false;\">Menu</a></div>";
            divPopup.appendChild(divCaixaResposta);
            //loadHTMLOfMenu();
        }
        document.getElementById("divTotal").appendChild(divPopup);
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
