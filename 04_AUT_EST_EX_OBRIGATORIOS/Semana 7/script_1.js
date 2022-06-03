var V1 = 0

function Save() {
   V1 = document.getElementById("V1").value;
   document.querySelector(".resultado1").innerHTML = V1;
   
}

function add1() {
   V1 = parseInt(V1) + parseInt(1);
   document.querySelector(".resultado1").innerHTML = V1;
}

function less1() {
    V1 = parseInt(V1) - parseInt(1);
    document.querySelector(".resultado1").innerHTML = V1;
}

