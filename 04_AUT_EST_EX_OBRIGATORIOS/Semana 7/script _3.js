var v = 100;
if (document.getElementById('n').value > 50) {
    document.querySelector(".p").innerHTML = document.getElementById('n').value * (v * 1/5);
}
else {
    document.querySelector(".p").innerHTML = document.getElementById('n').value * v;
}


function diurno() {
var v = 200;
if (document.getElementById('n').value > 50) {
    document.querySelector(".p").innerHTML = document.getElementById('n').value * (v * 4/10);
}
else {
    document.querySelector(".p").innerHTML = document.getElementById('n').value * v;
}
}
