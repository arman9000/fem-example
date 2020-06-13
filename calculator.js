let runningTotal = 0;
console.log('insideScript')
let current = "0";
let operation = "";
let clear = true;

function reset(){
    clear = true;
    current = "0";
    runningTotal = 0;
}

function subtract(num){
    runningTotal-= parseInt(current)
    current = "0";
}
function add(num){
    runningTotal+= parseInt(current)
    current = "0";
}
function multiply(num){
    runningTotal*= parseInt(current)
    current = "0";
}
function divide(num){
    runningTotal/= parseInt(current)
    current = "0";
}


function handleNumber(input){
    if (current === "0"){
        current = input;
    }
    else{
        current += input;        
    }
    document.querySelector('.answer').innerText = current;
}

function handleOperation(input){
    
    if (input === "C"){
        reset();
        document.querySelector('.answer').innerText = current;
    }
    else if(input === "←"){
        if (document.querySelector('.answer').innerText.length === 1)
            current = 0;
        else
            current = current.substr(0, (current.length-1));
        document.querySelector('.answer').innerText = current;
    }
    else{
        if (operation !== "" && current !== "0"){
            if(operation === "-"){
                subtract(current);
            }
            else if(operation === "/"){
                divide(current);
            }
            else if(operation === "x"){
                multiply(current);
            }
            else if(operation === "+"){
                add(current);
            }
            operation = "";   
        }    
        
        if(input === "="){        
            document.querySelector('.answer').innerText = (runningTotal + "");
            current = '0';
            clear = false;
        } 
        else{
            if (clear)
                runningTotal = parseInt(current);
            current = "0";
            document.querySelector('.answer').innerText = input;
            operation = input;
            clear = false;
        }
    }
    console.log(runningTotal)
    
}


function handleButton(input) {
    if (isNaN(parseInt(input)))
        handleOperation(input)
    else
        handleNumber(input)
}

document.querySelector('.calculator').addEventListener('click', function(event) {
    
    if(event.target.tagName === 'BUTTON'){
        let button = event.target.innerText;
        handleButton(button);
    }
  });


