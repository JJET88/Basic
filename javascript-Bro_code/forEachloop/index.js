var paragraph = document.getElementById("demo");

var names = ["david", "jame", "john"];


names.forEach(capitalize);
names.forEach(print);


function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring;

}
function print(element) {
    console.log(element);
}
paragraph.innerHTML = names.forEach(capatalize);