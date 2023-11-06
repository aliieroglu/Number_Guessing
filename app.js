const form = document.querySelector(".form");
const inputNumber = document.querySelector(".guessField");
const submitBtn = document.querySelector(".guessSibmit");
const resultParas = document.querySelector(".resultParas");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
let inputRights = 8;

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);
eventListenars();

function eventListenars(){
    form.addEventListener("click",checkNumber);
}

function checkNumber(e){
    const guessInput = inputNumber.value;
    console.log(guessInput);

    if(inputRights === 8){
        guesses.textContent = "Previous number : ";
    }

    if(inputRights < 0){
        lastResult.textContent = "Game over";
        lowOrHi.textContent = '';
        gameOver();
    }


    guesses.textContent += guessInput + ' ';

    if(guessInput > randomNumber){
        lowOrHi.textContent = "Daha kucuk bir deger girin";
        lowOrHi.style.backgroundColor = 'red';
        lowOrHi.style.padding = '10px';
    }
    else if(guessInput < randomNumber){
        lowOrHi.textContent = "Daha buyuk bir deger girin";
        lowOrHi.style.backgroundColor = 'red';
        lowOrHi.style.padding = '10px';
    }
    else{
        lastResult.innerHTML = "Tebrikler DOGRU BILDINIZ";
        lastResult.style.backgroundColor = 'green';
        lastResult.padding = '15px';
        lowOrHi.textContent = '';
        gameOver();
    }
    inputRights--;
    inputNumber.value = '';
    inputNumber.focus();

    e.preventDefault();
}

function gameOver() {
    inputNumber.disabled = true;
    submitBtn.disabled = true;
    resetBtn = document.createElement("button");
    resetBtn.textContent = 'Start new game';
    resetBtn.style.width = '10rem';
    resetBtn.style.height = '32px';
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener("click",newGame);
}

function newGame(){
    inputRights = 8;

    const resetParas = document.querySelectorAll(".resultParas p");
    for(const resetPara of resetParas){
        resetPara.textContent = '';
    }

    resetBtn.parentNode.removeChild(resetBtn);
    inputNumber.disabled = false;
    inputNumber.disabled = false;
    inputNumber.value = '';
    inputNumber.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;



}