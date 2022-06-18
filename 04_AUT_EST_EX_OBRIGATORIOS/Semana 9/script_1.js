//função para calcular se o valor isnerido na caixa de texto é par ou impar 
function Save() {
   var V1 = document.getElementById("V1").value;
   var final = V1%2;
   if (final == 0) {
      document.querySelector(".resultado1").innerHTML = "par";
   } else {
      document.querySelector(".resultado1").innerHTML = "impar";
   } 
   document.querySelector("resultado1").innerHTML = final;

}


