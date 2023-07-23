function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

let num1 = prompt("Enter the first number");
let operator = prompt("Enter the operation (+, -, *, or /)");
let num2 = prompt("Enter the second number");

num1 = parseInt(num1);
num2 = parseInt(num2);

let result;

if (operator === "+") {
    result = add(num1, num2);
}
else if (operator === "-") {
    result = subtract(num1, num2);
}
else if (operator === "*") {
    result = multiply(num1, num2);
}
else if (operator === "/") {
    result = divide(num1, num2);
}
else {
    alert("Invalid operator");
}

alert(result);




