//função para calcular soma dos digitos 
function Soma() {
   var v1 = document.getElementById("V1").value;
   var soma = 0
   d1 = v1 % 10; // pegar o n digitado e retorna o resto inteiro da divisão por 10
   d1 = parseInt(v1 / 10);
   while (v1 > 0) {//condição para rodar função caso o v1 ainda não for 0, será repetida.
      var resto = v1 % 10;
      soma = soma + resto;
      v1 = parseInt(v1 / 10);
   }
   document.querySelector(".resultado1").innerHTML = soma;
}
