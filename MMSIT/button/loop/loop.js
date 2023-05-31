// const fruit = {
//         name : "mango",
//         color: "yellow",
//         price : 300,
//         isSweet: function(){
//           console.log(`${this.name} is  Sweet`);},
//         isCheap: function(){
//           console.log(`${this.name} is ${this.color} color and cheap`)
//         }
// }
// console.log(fruit.name);
// console.log(fruit.color);
// console.log(fruit.price);
// console.log(fruit.isSweet());
// console.log(fruit.isCheap());

// for(let i = 1; i<=6; i++){
//   star += "* ";
//   console.log(star,i);
// }

// for (let i = 1; i <= 6; i++) {
//   let star="";
//   for (let x = 1; x <= i; x++) {
//     star += "* ";
//   }
//   console.log(star);
// }

// for(let i=6; i>=1; i--){
//   let star="";
//   for(let x=1; x<=i; x++){
//     star+="* "
//   }
//   console.log(star)
// }

// function starGenerater(count){
//   let star="";
//   for(let i=1;i<=count;i++){
//     if(i%2==0){
//       star+= "* ";
//     }
//     else{
//       star+="- "
//     }
//   }
//   return star;
// }
function starGenerater(count, symbol = "* ") {
  let star = "";
  for (let i = 1; i <= count; i++) {
    star += symbol;
  }
  return star;
}

// console.log(starGenerater(6,"? "))

// for(let i=1; i<=6;i++){
//   console.log(starGenerater(i))
// }

// for(let i=6; i>=1;i--){
//   console.log(starGenerater(i))
// }

for (let i = 1; i <= 6; i++) {
  if (i % 2 == 0) {
    console.log(starGenerater(i,"* "))
  } else {
    console.log(starGenerater(i,"- "))
  }
}


for (let i = 6; i >= 1; i--) {
  if (i % 2 == 0) {
    console.log(starGenerater(i,"* "))
  } else {
    console.log(starGenerater(i,"- "))
  }
}
