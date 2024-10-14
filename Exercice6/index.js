const display = document.querySelector('#display');

let value1;
let value2;
let operator;
let isNewOperation;

function appendToDisplay(str) {
    defineVariable(str);
    display.value += str;
}

function clearDisplay() {
    display.value = '';
    [value1, value2, operator, isNewOperation] = resetVariables(value1, value2, operator, isNewOperation);
}

function calculateResult() {
    if (!value2)
        return display.value = value1;
    display.value = calculate();
    value1 = display.value;
    [value2, operator] = resetVariables(value2, operator);
    isNewOperation = true;
}

function calculate() {
    const a = Number(value1);
    const b = Number(value2);
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? 'Division by zero is not allowed' : a / b;
        default: return 'Invalid operator';
    }
}

function resetVariables(...vars) {
    return vars.map(() => undefined);
}

function defineVariable(str) {
    if (isNaN(Number(str))) {
        if (operator) {
            calculateResult();
        }
        operator = str;
    } else if (!operator) {
        if (!value1 || isNewOperation) {
            clearDisplay();
            value1 = '';
        }
        value1 += str;
        isNewOperation = false;
    } else {
        value2 ??= '';
        value2 += str;
    }
}