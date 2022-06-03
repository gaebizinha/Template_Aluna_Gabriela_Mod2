function trocar() {
   NOME2 = document.getElementById('n2').value
   document.getElementById('n2').value = document.getElementById('n1').value;
   document.getElementById('n1').value = NOME2;
}