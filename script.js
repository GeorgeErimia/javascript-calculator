let operator = ''
let firstNumber = null;
let secondNumber = null;

let display = document.querySelector('.display')

let displayValue = display.textContent;
console.log(displayValue)

let isLastButtonOperator = false;

function getDisplayValue() {
    displayValue = display.textContent;
}

function getDisplayValueNumber() {
    return parseFloat(displayValue);
}

function add (num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0) return "ERROR";
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'X':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

// Configure the number buttons to display the number on the screen
function addNumberToDisplay(number) {
    if(isLastButtonOperator) {
        display.textContent = "";
    }
    display.textContent += `${number}`;
    isLastButtonOperator = false;
}

let numberButtons = document.querySelectorAll('.btn-number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        addNumberToDisplay(button.textContent);
        console.log(button.textContent);
    })
})

// Configure the clear button to clear the display 
function clearDisplay() {
    display.textContent = "";
    firstNumber = null;
    secondNumber = null;
    operator = '';
}

let clearButton = document.querySelector('.btn-clear');
clearButton.addEventListener('click', clearDisplay);

// configure the operand buttons
let operatorDiv = document.querySelector('.calculator-operators');
operatorDiv.addEventListener('click', (e) => {
    getDisplayValue();
    switch(e.target.id) {
        case 'btn-add':
            console.log("+");
            displayOperator("+");
            break;
        case 'btn-subtract':
            displayOperator("-");
            console.log("-");
            break;
        case 'btn-divide':
            displayOperator("/");
            console.log("/");
            break;
        case 'btn-multiply':
            displayOperator("X");
            console.log("X");
            break;
        case 'btn-equals':
            console.log("=");
            displayEquals();
            break;
    }
    isLastButtonOperator = true;
})

function displayOperator(operatorSymbol) {
    operator = operatorSymbol;

    if(!isLastButtonOperator) {
        let displayValueNumber = getDisplayValueNumber();
        console.log(displayValueNumber);
    
        if(firstNumber == null) {
            firstNumber = displayValueNumber;
        } else {
            firstNumber = operate(operator, firstNumber, displayValueNumber);
            display.textContent = firstNumber;
        }
    }
    secondNumber = "";
}

function displayEquals() {

    let displayValueNumber = getDisplayValueNumber();

    if(firstNumber == null) {
        firstNumber = displayValueNumber;
    }
    else {
        secondNumber = displayValueNumber;
    }

    firstNumber = (secondNumber === null ? firstNumber : operate(operator, firstNumber, secondNumber))
    // firstNumber = (displayValueNumber === NaN ? firstNumber : operate(operator, firstNumber, displayValueNumber))

    display.textContent = firstNumber;

    secondNumber = "";
}
