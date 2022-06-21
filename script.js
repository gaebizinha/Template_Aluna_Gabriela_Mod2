
var getDBResDiv = "#getDB";

/* Função que faz uma requisição GET */

//tirar o "nome" da tabela do banco de dados e faz aparecer no html
function TestGETDB(){
    var url = "http://127.0.0.1:3071/users";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    
    $(getDBResDiv).append(resposta[0].nome);
    //console.log(xhttp.responseText);
}
