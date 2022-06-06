
var V1 = 0
// função que irá printar na tela o valor indicado na caixa de texto
function Save() {
   V1 = document.getElementById("V1").value;
   document.querySelector(".resultado1").innerHTML = V1;
   
}
//soma + 1 ao número da tela  
function add1() {
   V1 = parseInt(V1) + parseInt(1);
   document.querySelector(".resultado1").innerHTML = V1;
}
//soma + 1 ao número da tela 
function less1() {
    V1 = parseInt(V1) - parseInt(1);
    document.querySelector(".resultado1").innerHTML = V1;
}

