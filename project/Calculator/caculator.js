// let inputBox = document.getElementById("inputBox");
// let operator = "";
// let operand1 = "";
// let operand2 = "";

// function addNumber(num) {
//   inputBox.value += num;
// }

// function clearInput() {
//   inputBox.value = "";
//   operator = "";
//   operand1 = "";
//   operand2 = "";
// }
// function addOperator(op) {
//   operator = op;
//   operand1 = inputBox.value;
//   inputBox.value = "";
// }

// function calculate() {
//   operand2 = inputBox.value;
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = parseInt(operand1) + parseInt(operand2);
//       break;
//     case "-":
//       result = parseInt(operand1) - parseInt(operand2);
//       break;
//     case "*":
//       result = parseInt(operand1) * parseInt(operand2);
//       break;
//     case "/":
//       result = parseInt(operand1) / parseInt(operand2);
//       break;
//   }
//   inputBox.value = result;
//   operator = "";
//   operand1 = "";
//   operand2 = "";
// }


var inputBox = document.getElementById("inputBox");
var expression = "";

function addNumber(num){
  expression += num;
  inputBox.value = expression
  
}

function calculate(){
  inputBox.value = eval(expression);
  expression = "";
  
}
function clearInput(){
  expression = "";
  inputBox.value = expression;


}