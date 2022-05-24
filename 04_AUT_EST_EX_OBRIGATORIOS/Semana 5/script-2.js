/* 
=======================
Declaração de variáveis
=======================
*/


/* 
=======================
Event Listener
=======================
*/
  
/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */

function clicarSoma() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado1").innerHTML = parseInt(n1) + parseInt(n2);
}

function clicarSub() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado2").innerHTML = parseInt(n1) - parseInt(n2);
}

function clicarMult() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado3").innerHTML = parseInt(n1) * parseInt(n2);
}

function clicarPot() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado4").innerHTML = parseInt(n1) ** parseInt(n2);
}

/* 
=======================
Funções
======================= 
*/

