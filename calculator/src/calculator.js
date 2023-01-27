let firstOperand = null;
let operator = null;
let secondOperand = null;
let output = document.getElementById("output");

function handleNumberClick(event) {
    if (operator === null) {
        firstOperand = firstOperand === null ? event.target.textContent : firstOperand + event.target.textContent;
        output.textContent = firstOperand;
    } else {
        secondOperand = secondOperand === null ? event.target.textContent : secondOperand + event.target.textContent;
        output.textContent = secondOperand;
    }
}

function handleOperatorClick(event) {
    operator = event.target.textContent;
    output.textContent = operator;
}

function handleEqualClick() {
    if (firstOperand !== null && operator !== null && secondOperand !== null) {
        let result;
        switch (operator) {
            case "+":
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case "-":
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case "*":
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case "/":
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                result = "Invalid operator";
        }
        output.textContent = result;
    }
}

function handleClearClick() {
    firstOperand = null;
    operator = null;
    secondOperand = null;
    output.textContent = "0";
}

export { handleNumberClick, handleOperatorClick, handleEqualClick, handleClearClick }
