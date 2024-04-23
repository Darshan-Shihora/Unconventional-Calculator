const defaultValue = 0;
let currentValue = defaultValue;

function getUserInput(){
    return userInput.value;
    
}

function output(prevValue , operator , enteredNumber){
    let calcDescription = `${prevValue} ${operator} ${enteredNumber}`;
    outputResult(currentValue , calcDescription);
}

function add(){
    let enteredValue = getUserInput();
    let intialValue = currentValue;
    currentValue += enteredValue;
    output(intialValue , '+' , enteredValue);
}
function subtract(){
    let enteredValue = getUserInput();
    let intialValue = currentValue;
    currentValue -= enteredValue;
    output(intialValue , '-' , enteredValue);
}
function multiply(){
    let enteredValue = getUserInput();
    let intialValue = currentValue;
    currentValue *= enteredValue;
    output(intialValue , '*' , enteredValue);
}
function division(){
    let enteredValue = getUserInput();
    let intialValue = currentValue;
    currentValue /= enteredValue;
    output(intialValue , '/' , enteredValue);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',division);