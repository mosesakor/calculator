const numClick = document.querySelector('.calculator');
const textDisplay = document.querySelector('.text');

let storeValues = '';
let theOperator = '';
let operand1 = '';
let operand2 = '';
let solution;
let finalResult;
let txtResult;
let startAgain;


numClick.addEventListener('click', selectNum);

// get is

function displayNum() {
    if (operand1.length < 8 && operand2.length < 8) {
        textDisplay.textContent += event.target.textContent;
    }
    storeValues += event.target.textContent;

    if (theOperator === '' && operand1.length < 8) {
        operand1 += event.target.textContent;
    }
    else if (theOperator !== '' &&operand2.length < 8) {
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
    txtResult = finalResult.toString()
    //operand1 = txtResult;


    console.log(txtResult)
    clearAll();

    textDisplay.textContent = txtResult;
    operand1 = txtResult;
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
        case 'x':
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

    if (operand1 === '') {
        return;
    }
    else if (operand1 !== '' && theOperator === '') {
        operand1 = operand1.slice(0, operand1.length -1);
        textDisplay.textContent = operand1;
        return;
    }
    else if (theOperator !== '' && finalResult === '') {// && operand2 !== '') {
        operand2 = operand2.slice(0, operand2.length -1);
        textDisplay.textContent = operand2;
    }
   // else if (theOperator !== '' && finalResult === '')
    else if (finalResult !== '')  {
        textDisplay.textContent = txtResult.slice(0, txtResult.length -1);
        console.log(textDisplay.textContent + "hi")
        operand1 = textDisplay.textContent;
        console.log("hmm", operand1)
        startAgain = operand1;
        clearAll();
        operand1 = startAgain;
        console.log("operand1", operand1)
        textDisplay.textContent = operand1;

    }

    /*

    if (!operand2 === '') {
        operand2 = operand2.slice(0, operand2.length -1);
        console.log(`num2 ${operand2}`)
        textDisplay.textContent = textDisplay.textContent.slice(0, textDisplay.textContent.length - 1)
    }
    else if (textDisplay.textContent) {
          
    }
    else {
        operand1 = operand1.slice(0, operand1.length -1);
        console.log("opera ",operand1)
        textDisplay.textContent = textDisplay.textContent.slice(0, textDisplay.textContent.length - 1)
    }
    */
}


function selectNum(event) {
    //console.log(event.target.className);

    if (event.target.className === 'btn num') {
        displayNum();  
    }
    else if (event.target.className === 'btn operator' || event.target.className === 'btn operator special') {
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
    let result;
    restul = a * b
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


//switch (keyPress)

/* function calcAll() {

    operate(parseInt(storeValues)
}

*/