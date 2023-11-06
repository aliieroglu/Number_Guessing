const form = document.querySelector(".form");
const inputNumber = document.querySelector(".guessField");
const submitBtn = document.querySelector(".guessSibmit");
const resultParas = document.querySelector(".resultParas");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);
eventListenars();

function eventListenars(){
    form.addEventListener("submit",checkNumber);
}

function checkNumber(e){
    const guessInput = inputNumber.value;
    console.log(guessInput);

    let inputRights = 10;
    
    if(inputRights < 0){
        lowOrHi.textContent = "hakkiniz bitti";
        lowOrHi.style.backgroundColor = 'red';
        resetGame();
    }

    if(inputRights === 10){
        guesses.textContent = "Previous number : ";
    }


    guesses.textContent += guessInput + ' ';

    if(guessInput > randomNumber){
        lowOrHi.textContent = "Daha kucuk bir deger girin";
        lowOrHi.style.backgroundColor = 'red';

    }
    else if(guessInput < randomNumber){
        guesses.innerHTML = guessInput;
        lowOrHi.textContent = "Daha buyuk bir deger girin";
        lowOrHi.style.backgroundColor = 'red';
    }
    else{
        lastResult.innerHTML = "Tebrikler DOGRU BILDINIZ";
        lastResult.style.backgroundColor = 'green';
        lastResult.padding = '15px';
        resetGame();
    }
    inputRights--;
    guessField.value = '';
    guessField.focus();

    e.preventDefault();
}

function resetGame() {
    inputNumber.disabled = true;
    submitBtn.disabled = true;
    resetBtn = document.createElement("button");
    resetBtn.textContent = 'Start new game';
    resetBtn.style.width = '10rem';
    resetBtn.style.height = '32px';
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener("submit",newGame);
}

function newGame(){


}