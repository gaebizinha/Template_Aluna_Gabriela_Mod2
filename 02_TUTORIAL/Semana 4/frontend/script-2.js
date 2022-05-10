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

function clicar() {
    var num1 = document.getElementById("V1").value;
    var num2 = document.getElementById("V2").value;
    var resultado = parseInt(num1) + parseInt(num2);
    document.querySelector(".resultado").innerHTML = resultado;
}



