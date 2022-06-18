//função que troca os elementos
function trocar() {
   NOME2 = document.getElementById('n2').value //var tem o valor atribuido pelo que colocarem no input
   document.getElementById('n2').value = document.getElementById('n1').value; // varlores colocados em cada input têm valores trocados
   document.getElementById('n1').value = NOME2;
}