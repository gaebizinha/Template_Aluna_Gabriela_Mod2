var V1 = 0
function Salvar() {
   V1 = document.getElementById("V1").value;
    document.querySelector(".resultado1").innerHTML = V1;
}


function clicarSoma() {
   V1 = parseInt(V1) + parseInt(1);
   document.querySelector(".resultado1").innerHTML = V1;
}

function clicarSub() {
    V1 = parseInt(V1) - parseInt(1);
    document.querySelector(".resultado1").innerHTML = V1;
}

