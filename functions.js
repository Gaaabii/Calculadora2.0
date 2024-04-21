const resultElement = document.getElementById('result');
const ac = document.getElementById('ac');
const moreless = document.getElementById('moreless');
const rest = document.getElementById('rest');
const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const substraction = document.getElementById('substraction');
const addition = document.getElementById('addition');
const equal = document.getElementById('equal');
const numberButtons = document.querySelectorAll('.number');
const point = document.getElementById('point');

let result;
let option;
let numone = "0";
let numtwo = "0";
const Operations={
    SUM:"sum",
    SUBS:"substract",
    MULT:"multiplication",
    DIV:"division",
    REST:"rest"
};



const sumfunction=()=> {
    
    option = Operations.SUM;
    numtwo = numone; 
    numone = ""; 
}
const substractfunction=()=>{
    option = Operations.SUBS;
    numtwo = numone;
    numone = "";

}
const multiplicationfunction=()=>{
    option = Operations.MULT;
    numtwo = numone;
    numone = ""; 
}
const divisionfunction=()=>{
    option=Operations.DIV;
    numtwo = numone; 
    numone = ""; 
}
const restFunction =()=>{
    option=Operations.REST;
    numtwo = numone;
    numone = ""; 
}
const clear=()=> {
    numone = "";
    numtwo = "";
    resultElement.textContent = "0";
}

function equalsfunction() {
    switch (option){
        case Operations.SUM:
            result = parseFloat(numtwo) + parseFloat(numone);
            resultElement.textContent = result;
            adjustFontSize();

            break;
        case Operations.SUBS:
            result = parseFloat(numtwo) - parseFloat(numone);
            resultElement.textContent = result;
            adjustFontSize();
            
            break;
        case Operations.MULT:
            result = parseFloat(numtwo) * parseFloat(numone);
            resultElement.textContent = result;
            adjustFontSize();
            break;
        case Operations.DIV:
            
            result = parseFloat(numtwo) / parseFloat(numone);
            
            resultElement.textContent = result;
            adjustFontSize();
            break;
        case Operations.REST:
            
            result = parseFloat(numtwo) % parseFloat(numone);
            
            resultElement.textContent = result;
            adjustFontSize();
            break;
        default:
            break;
    }

}



numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (numone.length<9){
            const content = button.textContent;
        
        if (content === '.' && !numone.includes('.')) {
            numone += '.';
        } else if (content !== '.' || (content === '.' && numone.includes('.') && numone.length > 0 )) {
            
            numone += content;
        }
        resultElement.textContent = numone; 
            
        }
        return;
        
    });
});
point.addEventListener('click', () => {
    if (!numone.includes('.')) { 
        numone += '.'; 
        resultElement.textContent = numone; 
    }
});
moreless.addEventListener('click',()=> {
    
    result=result*-1;
    resultElement.textContent = result;
});




division.addEventListener('click',divisionfunction);
multiplication.addEventListener('click',multiplicationfunction);
substraction.addEventListener('click',substractfunction);
addition.addEventListener('click', sumfunction);
equal.addEventListener('click', equalsfunction);
ac.addEventListener('click', clear);
clear();
