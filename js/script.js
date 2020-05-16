const numClick = document.querySelector('.calculator');
const textDisplay = document.querySelector('.text');

let storeValues = '';
let theOperator = '';
let operand1 = '';
let operand2 = '';
let solution;
let finalResult;


numClick.addEventListener('click', selectNum);


function displayNum() {
    textDisplay.textContent += event.target.textContent;
    storeValues += event.target.textContent;

    if (theOperator === '') {
        operand1 += event.target.textContent;
    }
    else if (theOperator !== '') {
        operand2 += event.target.textContent;
        textDisplay.textContent = operand2;
        console.log(operand2)
    }
}

function evaluate() {
    if (operand1 === '' || operand2 === '') {
        return;
    }
    else if (theOperator == '/' && Number(operand2) === 0) {
        textDisplay.textContent = 'Error';
        return;
    }
    console.log(Number(operand1), Number(operand2))
    finalResult = operate(theOperator, Number(operand1), Number(operand2));
    textDisplay.textContent = finalResult;
    return;
}


function hasOperator() {
    if (textDisplay.textContent.includes("*") || textDisplay.textContent.includes("/") || textDisplay.textContent.includes("+") || textDisplay.textContent.includes("-")) {
        return true;
    }
}

function setOperator() {
    if (operand1 === '') {
        return;
    }
    if (operand2 !== '') {
        evaluate();
        operand1 = finalResult;
        operand2 = '';

    }
    
    switch (event.target.textContent) {
        case '+':
            theOperator = '+';
            break;
        case '-':
            theOperator = '-';
            break;
        case '÷':
            theOperator = '/';
            break;
        case 'X':
            theOperator = '*';
            break;
    }

    if (!hasOperator()) {
       // textDisplay.textContent += ' ' + theOperator + ' ';
    }
   
    
}

function clearAll() {
    storeValues = '';
    theOperator = '';
    operand1 = '';
    operand2 = '';
    solution;
    finalResult;
    textDisplay.textContent = '';
}

function addDecimal() {
    let currentInput;
    currentInput = operand1 + operand2;

    if (!currentInput.includes('.')) {
        if (theOperator === '') {
            operand1 += event.target.textContent;
            textDisplay.textContent += event.target.textContent;
        }
        else if (theOperator !== '') {
            operand2 += event.target.textContent;
            textDisplay.textContent += event.target.textContent;
            console.log(operand2)
        }
    }

}

function backspace() {
    if (operand2 !== '') {
        operand2 = operand2.slice(0, operand2.length -1);
        textDisplay.textContent = textDisplay.textContent.slice(0, textDisplay.textContent.length - 1)
    }
    else {
        operand1 = operand1.slice(0, operand1.length -1);
        console.log("opera ",operand1)
        textDisplay.textContent = textDisplay.textContent.slice(0, textDisplay.textContent.length - 1)
    }
}


function selectNum(event) {
    //console.log(event.target.className);

    if (event.target.className === 'btn num') {
        displayNum();  
    }
    else if (event.target.className === 'btn operator') {
        setOperator();
    }
    else if (event.target.className === 'btn eval') {
        evaluate();
    }
    else if (event.target.className === 'btn clear') {
        clearAll();
    }
    else if (event.target.className === 'btn decimal') {
        addDecimal();
    }
    else if (event.target.className === 'btn delete') {
        backspace();
    }


}

numClick.addEventListener('click', selectNum);



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    let result;
    result = a / b;
    result = result.toFixed(2);

    return result;
}


function operate(operator, a, b) {
    switch (operator) {
        case '+':
            solution = add(a, b);
            console.log(solution);
            return solution;
        case '-':
            solution = subtract(a, b);
            return solution;
        case '*':
            solution = multiply(a, b);
            return solution;
        case '/':
            solution = divide(a, b);
            return solution;
    }
}

function populateDisplay() {

}

/* function calcAll() {

    operate(parseInt(storeValues)
}

*/