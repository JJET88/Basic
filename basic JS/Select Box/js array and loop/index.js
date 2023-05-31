



let myNumbers=[2,5,7,3,33];
for (let number of myNumbers){
    console.log(number);
}


 
let myCar ={
    "make": "Honda",
    "year": "2030",
    "model": "Accord"
};
for (let key in myCar){   // key = can give any variable
    console.log(key);
    console.log(myCar[key])

}

//while loop
let j=3;
while (j<6){
    console.log(j);
    j++;
}


//do-while loop
let k=0;
do {
    console.log(k);
    k++;
}while (k<3);





















let colors=['red','blue','green','white'];
console.log(colors);

colors.push('yellow');
console.log(colors);







let lastColor =colors.pop();
console.log(colors);


console.log(colors);
let firstColor = colors.shift();
console.log(firstColor);

colors.unshift("gray");
console.log(colors);








