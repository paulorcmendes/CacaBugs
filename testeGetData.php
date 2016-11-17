<html>
<head>
</head>
<body>

<button id='clicaae'>Clica Ae</button>
<div id="response"><b>Nome do garoto</b></div>

</body>
<script   src="http://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
<script>
var nome;
$(document).ready(function() {
    //console.log(window.localStorage.getItem("questionposition"));
    //window.localStorage.setItem("questionposition", 50);

    $("#clicaae").click(function() {

        $.getJSON( "getQuestion.php", function(retorno) {
            for(iLaco = 0; iLaco < retorno.length; iLaco++) {
                var objeto = (retorno[iLaco]);
                console.log(objeto.nome);
                nome = objeto.nome;
                $("#response").html(nome);

            }
        }).fail(function() {
            console.log("falhou")
        });


        $.ajax({
            type: "POST",
            url: "sendData.php",
            data:{currentQuestion: 12},
            success: function(data){
                console.log(data);
            }
        });
    });
});
</script>
<script type="text/javascript">
    var totalTime = 0;
    var start, end;
    start = new Date().getTime()/1000;
    $(window).blur(function(e) {    
        end = new Date().getTime()/1000;
        totalTime += (end - start);     
        $("#pedro").html(totalTime);
    });
    $(window).focus(function(e) {
        start = new Date().getTime()/1000;
    });
    /*Pegar o tempo da hora do submit e
    subtrair do úlitmo start
    Senão - se ele passar todo o tempo sem 
    mudar de aba, será zero.*/


    /*Tipo log:
    Questão Tipo(open, submit) hora tempo
</script>
</html>