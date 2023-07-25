function getdivide(num1, num2) {
  return num1 / num2;
}
function getadd(num1, num2) {
  return num1 + num2;
}
function getsubtract(num1, num2) {
  return num1 - num2;
}
function getmultiply(num1, num2) {
  return num1 * num2;
}
let num1 = prompt("Enter the first number.");
let operation = prompt("Enter the operation (+, -, *, or /).");
let num2 = prompt("Enter the second number.");
function Calculator() {
  let result;
  if (operation === "+") {
    result = getadd(num1, num2);
  } else if (operation === "*") {
    result = getmultiply(num1, num2);
  } else if (operation === "-") {
    result = getsubtract(num1, num2);
  } else if (operation === "/") {
    result = getdivide(num1, num2);
  }
  alert(result);
  const okCalculatorAgine = confirm("do you want to Calculator more ?");
  if (okCalculatorAgine === true) {
    Calculator();
  } else {
    alert("hope our Calculator happy you :)");
    console.log(`hope our Calculator happy you :) `);
  }
}
Calculator();
