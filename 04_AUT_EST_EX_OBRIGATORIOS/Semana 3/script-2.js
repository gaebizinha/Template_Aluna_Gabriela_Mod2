/* 
=======================
Declaração de variáveis
=======================
*/

var g  = 10


/* 
=======================
Event Listener
=======================
*/
  
/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */

function clicar() {
    var V0 = document.getElementById("Vinicial").value;
    var resultadotempo = parseFloat(V0) / parseFloat(g);
    document.querySelector(".resultado").innerHTML = resultadotempo;
}

function clicar2() {
    var V0 = document.getElementById("Vinicial").value;
    var hmax1 = (V0 ** 2);
    var hmax = parseFloat(hmax1) / 20
    

    document.querySelector(".resultado2").innerHTML = hmax;
}
/* 
=======================
Funções
======================= 
*/

