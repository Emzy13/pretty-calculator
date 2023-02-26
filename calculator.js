let buffer= '0';
let Total=0;
let previousOperator= null;
const screen= document.querySelector('.screen');

function buttonClick(value) {
     if (isNaN(parseInt(value))) {
        handleSymbol(value);
     }
     else {
        handleNumber(value);
     }
    update(); 
}

function handleNumber(number) {
    if(buffer === '0'){
        buffer = number;
    }
    else{
        buffer += number;
    }
}

function handleMath(value) {
    if(buffer ==='0'){
        return;
    }
    const intBuffer= parseInt(buffer);
    if(Total===0){
        Total=intBuffer;
    }
    else{
       Operation(intBuffer) ;
    }

    previousOperator=value;
    buffer='0';
}

function Operation(intBuffer) {
    switch(previousOperator) {
        case '+':
            Total += intBuffer;
            break;
        case '-':
            Total -= intBuffer; 
            break;
        case 'x':
            Total *= intBuffer;
            break;
        case '÷':
            Total /= intBuffer;
            break;          
    }
}

function handleSymbol(symbol) {
    switch(symbol){
        case 'C': 
            buffer= '0';
            break;
        case '=':
            if(previousOperator === null){
            return;
            }
            Operation(parseInt(buffer));
            previousOperator= null; 
            buffer= "" + Total;
            Total =  0;
            break;
        case '←':
            if(buffer.length === '1') {
               buffer= '0';
            }
            else{
                buffer =  buffer.substring(0 , buffer.length-1);
            }
            break;
        case '+':
        case '-':   
        case '÷':
        case 'x':
            handleMath(symbol);
            break;        
    }
}

function update(){
    screen.innerText = buffer; 
}

function init() {
    document.querySelector('.buttons')
            .addEventListener("click", function(event){
              buttonClick(event.target.innerText)
            }) ;
}

init();