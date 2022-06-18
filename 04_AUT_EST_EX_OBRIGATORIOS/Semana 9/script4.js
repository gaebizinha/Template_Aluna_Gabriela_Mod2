//função que mostra a sequência
function Seq(){
var Elem = document.getElementById("V1").value;
var mostra = document.getElementById("resultado");
if (Elem <= 0) {//caso o número colocado na caixa de texto seja negativo ou igual a 0 ira aparecer a mensagem.
   document.querySelector(".resultado").innerHTML = "não é possível calcular";
}else{//caso o número da caixa de texto seja maior que 0, a função dentro do for irá rodar.
   var n1 = 1;
   var n2 = 0;
   var n3 = 0;
   var n4 = 0;
   var array = [];// sequência 
   for(let i = 0; i < Elem; i++){
      array.push(n3);//o n3 será o último da sequência
      n3 = n1 + n2;
      n4 = n2/n1;
      n1 = n2;
      n2 = n3;
   }
   mostra.innerHTML = array;
}

}