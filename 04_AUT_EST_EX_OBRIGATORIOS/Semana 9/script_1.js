//função para calcular se o valor isnerido na caixa de texto é par ou impar 
function PI() {
   var V1 = document.getElementById("V1").value;
   var array = V1.split("");
   if (array [0] % 2 == 0) {
      document.querySelector(".resultado1").innerHTML = "par"
   }else{
      document.querySelector(".resultado1").innerHTML = "impar"
   }
}
