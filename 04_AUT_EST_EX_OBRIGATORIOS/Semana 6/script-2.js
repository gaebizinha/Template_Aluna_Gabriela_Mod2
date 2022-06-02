
function clicarSoma() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado1").innerHTML = parseFloat(n1) + parseFloat(n2);
}

function clicarSub() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado2").innerHTML = parseFloat(n1) - parseFloat(n2);
}

function clicarMult() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado3").innerHTML = parseFloat(n1) * parseFloat(n2);
}

function clicarPot() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado4").innerHTML = parseFloat(n1) ** parseFloat(n2);
}

function clicarDiv() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado5").innerHTML = parseFloat(n1) / parseFloat(n2);
}

function clicarRest() {
    var n1 = document.getElementById("V1").value;
    var n2 = document.getElementById("V2").value;
    document.querySelector(".resultado6").innerHTML = parseFloat(n1) % parseFloat(n2);
}
