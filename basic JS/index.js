let product1 ="Electric Guitar";
let product2 ="Drum Set"; 
let product3 ="Piano";
let product4 ="Bass Guitar";

let productListDiv = document.getElementById("productList");


function addProduct(productName){
    let newDiv = document.createElement("div");
    newDiv.innerHTML =productName;
    productListDiv.appendChild(newDiv);
}
addProduct(product1);
addProduct(product2);
addProduct(product3);
addProduct(product4);