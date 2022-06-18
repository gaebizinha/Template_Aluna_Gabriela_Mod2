function Seq(){
var Elem = document.getElementById("V1").value;
var mostra = document.getElementById("resultado");
if (Elem <= 0) {
   document.querySelector(".resultado").innerHTML = "não é possível calcular";
}else{
   var n1 = 1;
   var n2 = 0;
   var n3 = 0;
   var n4 = 0;
   var array = [];
   for(let i = 0; i < Elem; i++){
      array.push(n3);
      n3 = n1 + n2;
      n4 = n2/n1;
      n1 = n2;
      n2 = n3;
   }
   mostra.innerHTML = array;
}

}