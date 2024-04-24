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
let numone = "";
let numtwo = null;
let firstTime = true;
const Operations={
    SUM:"sum",
    SUBS:"substract",
    MULT:"multiplication",
    DIV:"division",
    REST:"rest"
};



const sumfunction = () => {
    if (option && numone) {
        equalsfunction(); 
    }
    option = Operations.SUM; 
    if (!numtwo) {
        numtwo = numone; 
    }
    numone = ""; 
    ajustarTamanoFuente();
}
const substractfunction=()=>{
    if (option && numone) {
        equalsfunction();   
    }
    option = Operations.SUBS; 
    if (!numtwo) {
        numtwo = numone; 
    }
    numone = ""; 
    ajustarTamanoFuente();

}
const multiplicationfunction=()=>{
    if (option && numone) {
        equalsfunction(); 
    }
    option = Operations.MULT; 
    if (!numtwo) {
        numtwo = numone; 
    }
    numone = ""; 
    ajustarTamanoFuente();
}
const divisionfunction=()=>{
    if (option && numone) {
        equalsfunction(); 
    }
    option = Operations.DIV; 
    if (!numtwo) {
        numtwo = numone; 
    }
    numone = ""; 
    ajustarTamanoFuente();
}
const restFunction =()=>{
    if (option && numone) {
        equalsfunction(); 
    }
    option = Operations.REST; 
    if (!numtwo) {
        numtwo = numone; 
    }
    numone = ""; 
    ajustarTamanoFuente();
}
const clear=()=> {
    option = null;
    numone = "";
    numtwo = "";
    resultElement.textContent = "0";
    result=0;
    ajustarTamanoFuente();
}

function equalsfunction() {
    ajustarTamanoFuente();
    switch (option){
        case Operations.SUM:
            result = parseFloat(numtwo) + parseFloat(numone);
            ajustarTamanoFuente();
            break;
        case Operations.SUBS:
            result = parseFloat(numtwo) - parseFloat(numone);
            ajustarTamanoFuente();
            break;
        case Operations.MULT:
            result = parseFloat(numtwo) * parseFloat(numone);
            ajustarTamanoFuente();
            break;
        case Operations.DIV:
            result = parseFloat(numtwo) / parseFloat(numone);
            ajustarTamanoFuente();
            break;
        case Operations.REST:
            result = parseFloat(numtwo) % parseFloat(numone);
            ajustarTamanoFuente();
            break;
        default:
            break;
    }
    resultElement.textContent = result;
        numtwo = result.toString();
        numone = ""; 
        option = null;
        ajustarTamanoFuente();

}
function ajustarTamanoFuente() {
    const result = document.getElementById('result');
    const numero = result.textContent || result.innerText;

    
    if(numero.length >= 9){
        result.style.fontSize = '180%';
    }else if (numero.length >= 6 && numero.length <9) {
        result.style.fontSize = '200%';
    } else {
        result.style.fontSize = '247%'; 
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
        ajustarTamanoFuente();
        return;
        
    });
});
point.addEventListener('click', () => {
    if (!numone.includes('.')) { 
        numone += '.'; 
        resultElement.textContent = numone; 
        ajustarTamanoFuente();
    }
    
});
moreless.addEventListener('click', () => {
    if (numone !== "") { 
        numone = numone * -1; 
        resultElement.textContent = numone; 
    } else if (numtwo !== null) { 
        numtwo = numtwo * -1; 
        resultElement.textContent = numtwo;
    }
    ajustarTamanoFuente(); 
});




division.addEventListener('click',divisionfunction);
multiplication.addEventListener('click',multiplicationfunction);
substraction.addEventListener('click',substractfunction);
addition.addEventListener('click', sumfunction);
equal.addEventListener('click', equalsfunction);
ac.addEventListener('click', clear);
ajustarTamanoFuente();
clear();
