const kalkulator = document.getElementById('kalkualtor');
let rezultat = document.getElementById('result');
let unos = document.getElementById('unos');
const symbols = ['+','-','/'];

function doCalculation(){
    let calculation = unos.innerText;
    let index = -1;
    let firstNumber, secondNumber, operation;

    symbols.forEach(symbol => {
        if(index === -1){
            index = calculation.indexOf(symbol);
        }
    });
    if(index !== -1){
        firstNumber = parseFloat(calculation.substring(0, index));
        secondNumber = parseFloat(calculation.substring(index+1));
        operation =calculation.substring(index, index+1);
        
        switch(operation){
            case '+': rezultat.innerText = firstNumber + secondNumber;break;
            case '-': rezultat.innerText = firstNumber - secondNumber;break;
            case '/': rezultat.innerText = firstNumber / secondNumber;break;

            default: rezultat.innerText = 'ERR';break;
        }
    }
}

document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event =>{
        if(item.value === '='){
            doCalculation();
        } else if(item.value === 'del'){
            unos.innerText = ' ';
            rezultat.innerText = ' ';
        } else {
            unos.innerText += item.value;
        }
    })
})
