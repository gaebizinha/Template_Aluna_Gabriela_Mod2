//função para ordenar nomes 
function OAlf() {
var nomes = document.getElementById("textos").value;
var array = nomes.split(" "); //irá criar um array que separa por cada palavra
const sorted = array.sort((a, b)=>{//aqui ele irá organizar por ordem alfabética
   return a.localeCompare(b);
}
);
document.querySelector(".resultado").innerHTML = sorted;//faz aparecer no html

}

