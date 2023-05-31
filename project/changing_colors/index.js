var container = document.getElementById("container");
var btn = document.getElementById("btn");

var i = 0;
var colors = ["red", "green", "blue", "yellow", "purple", "cyan"];




// btn.addEventListener("click", function() {
//     container.style.backgroundColor = colors[i++];


//     if (i > colors.length - 1) {
//         i = 0;
//     }
// })

function changeColor() {
    setInterval(changing, 1000)
}

function changing() {
    container.style.background = colors[i++]
    if (i > colors.length - 1)
        i = 0;
}