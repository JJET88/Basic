var count = 0;

document.getElementById("decrease").onclick = function () {
    count -= 1;
    document.getElementById("label-demo").innerText = count;
}

document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("label-demo").innerText = count;
}

document.getElementById("increase").onclick = function () {
    count += 1;
    document.getElementById("label-demo").innerText = count;
}
// Finding hypotenue of right triangle

var a;
var b;
var c;

document.getElementById("btn").onclick = function () {
    a = document.getElementById("a-demo").value;
    a = Number(a);

    b = document.getElementById("b-demo").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("sideC-demo").innerHTML = c;
}
