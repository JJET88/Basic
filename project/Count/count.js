var count = 0;
var h3 = document.getElementById("count");

function increase(){
    count ++;
    h3.innerHTML = count;
}

function decrease(){
    count --;
    h3.innerHTML = count;
}