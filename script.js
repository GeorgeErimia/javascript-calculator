let operator = ''
let firstNumber = null;
let secondNumber = null;
let result = null;

let display = document.querySelector('.display')

let displayValue = display.textContent;
console.log(displayValue)

let isLastButtonOperator = false;

function getDisplayValue() {
    displayValue = display.textContent;
    return displayValue;
}

function getDisplayValueNumber() {
    return parseFloat(getDisplayValue());
}

function add (num1, num2) {
    if(num2 != null)
        return num1 + num2;
    else return num1;
}

function subtract(num1, num2) {
    if(num2 != null) 
        return num1 - num2;
    else return num1;
}

function multiply(num1, num2) {
    if(num2 != null)
        return num1 * num2;
    else return num1;    
}

function divide(num1, num2) {
    if(num2 != null) {
        return num1 / num2;
        if(num2 === 0) return "ERROR";
    }
    else return num1;
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

    // storeValue(getDisplayValueNumber());
}

let numberButtons = document.querySelectorAll('.btn-number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        addNumberToDisplay(button.textContent);
        // result = operate(operator, firstNumber, secondNumber);
        debug();
        // console.log(button.textContent);
    })
})

// Configure the clear button to clear the display 
function clearDisplay() {
    display.textContent = "";
    firstNumber = null;
    secondNumber = null;
    operator = '';
    result = null;
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
            executeOperator("+");
            break;
        case 'btn-subtract':
            executeOperator("-");
            console.log("-");
            break;
        case 'btn-divide':
            executeOperator("/");
            console.log("/");
            break;
        case 'btn-multiply':
            executeOperator("X");
            console.log("X");
            break;
        case 'btn-equals':
            console.log("=");
            displayEquals();
            break;
    }
    isLastButtonOperator = true;
})

function storeValue(value) {
    // if(firstNumber == null) {
    //     firstNumber = value;
    // } else if (secondNumber != null){
    //     firstNumber = operate(operator, firstNumber, secondNumber);
    //     secondNumber = value;
    // } else secondNumber = value;
    result = (result === null ? value : operate(operator, result, value));
}

function debug() {
    console.log("First number : " + firstNumber);
    console.log("Second number : " + secondNumber);
    console.log("Operator : " + operator);
    console.log("Result : " + result);
}

// function executeOperator(operatorSymbol) {

//     let displayValueNumber = getDisplayValueNumber();

//     operator = operatorSymbol;

//     if(!isLastButtonOperator) {
//         storeValue(displayValueNumber);
//     }

//     console.log("First number : " + firstNumber);
//     console.log("Second number : " + secondNumber);

//     // if(!isLastButtonOperator) {
//     //     console.log(displayValueNumber);
    
//     //     if(firstNumber == null) {
//     //         firstNumber = displayValueNumber;
//     //     } else {
//     //         firstNumber = operate(opera    console.log("First number : " + firstNumber);
    // console.log("Second number : " + secondNumber)
    // console.log("Operator : " + operator)
    // console.log("Result : " + result);operator)
//     }
    
// }

function executeOperator(operatorSymbol) {

    if(!isLastButtonOperator) {
        storeValue(getDisplayValueNumber())
    }

    // result = operate(operator, firstNumber, secondNumber);

    operator = operatorSymbol;

    debug();

    display.textContent = result;
    
}

// function displayEquals() {

//     let displayValueNumber = getDisplayValueNumber();

//     storeValue(displayValueNumber);

//     let result = (secondNumber === null ? firstNumber : operate(operator, firstNumber, secondNumber))
//     // firstNumber = (displayValueNumber === NaN ? firstNumber : operate(operator, firstNumber, displayValueNumber))

//     display.textContent = result;

// }

function displayEquals() {

    storeValue(getDisplayValueNumber());

    display.textContent = result;
}