let currentInput = '';
let previousInput = '';
let currentOperator = '';
let resultShown = false;

function handleButtonClick(value) {
    if (resultShown) {
        // If the result is shown and a new number/operator is clicked, start a new calculation
        currentInput = value;
        resultShown = false;
    } else {
        currentInput += value;
    }

    // Update the result display with the complete expression
    updateResult();
}

function updateResult() {
    // Check if both previousInput and currentOperator have values before updating the result
    if (previousInput !== '' && currentOperator !== '') {
        document.getElementById('result').innerText = previousInput + ' ' + currentOperator + ' ' + currentInput;
    } else {
        document.getElementById('result').innerText = currentInput;
    }
}

function calculateResult() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            currentInput = (num1 + num2).toString();
            break;
        case '-':
            currentInput = (num1 - num2).toString();
            break;
        case '*':
            currentInput = (num1 * num2).toString();
            break;
        case '/':
            currentInput = (num1 / num2).toString();
            break;
    }

    previousInput = '';
    currentOperator = '';
    resultShown = true;
    updateResult();
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    resultShown = false;
    updateResult();
}

function handleOperator(operator) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculateResult();
        } else {
            previousInput = currentInput;
        }
        currentOperator = operator;
        currentInput = '';
    }

    // Update the result display with the complete expression
    updateResult();
}

function handleEqual() {
    if (currentOperator !== '' && previousInput !== '' && currentInput !== '') {
        calculateResult();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const equalButton = document.getElementById('equal');
    equalButton.addEventListener('click', handleEqual);

    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleOperator(button.innerText);
        });
    });
});
