const startBtn = document.getElementById('start');
const newCardBtn = document.getElementById('newCard');
const cardLocation = document.getElementById('cardsLocation');
const sumLocation = document.getElementById('sumsLocation');
const question = document.getElementById('topText');
const moneyLocation = document.getElementById('money');
const inputAmount = document.getElementById("bet");
const dealerLocation = document.getElementById('dealerOutput');

var rndInt1;
var rndInt2; 
var rndInt3; 
var rndInt4; 
var moneyAmount = 200;
var dealerNum1;
var dealerNum2;
var dealerNum3;
var dealerTotal;

startBtn.addEventListener('click',()=>{
    
    dealerNum1 = Math.floor(Math.random() * 11) + 1;
    dealerNum2 = Math.floor(Math.random() * 11) + 1;
    if (dealerNum1 == "11" && dealerNum2 == "11"){
        dealerNum2 = 1;
    }

    dealerTotal = dealerNum1 + dealerNum2;

    if (dealerTotal <= 16) {
        while (dealerTotal <=16){
            dealerNum3 = Math.floor(Math.random() * 11) + 1;
            if (dealerTotal > 10 && dealerNum3 == "11"){
                dealerNum3 = 1;
                dealerTotal = dealerTotal + dealerNum1;
            } else if (dealerTotal >= 16){
                dealerTotal = dealerTotal + dealerNum1;
                break;
            }
        }
    }
    dealerLocation.innerHTML = dealerTotal;

    let inputValue = inputAmount.value;
    moneyAmount = moneyAmount - inputValue;
    moneyLocation.innerHTML = moneyAmount;
    newCardBtn.disabled = false;
    newCardBtn.classList.remove('disabledBtn');
    cardLocation.innerHTML = "";
    sumLocation.innerHTML = "";
    rndInt1 = Math.floor(Math.random() * 11) + 1;
    rndInt2 = Math.floor(Math.random() * 11) + 1;
    if (rndInt1 == "11" && rndInt2 == "11") {
        rndInt2 = 1;
    } else {
        cardLocation.innerHTML = rndInt1 + ", " + rndInt2;
        rndInt3 = rndInt1 + rndInt2;
        sumLocation.innerHTML = rndInt3;
        if (rndInt3 == "21") {
            question.innerHTML = "Blackjack!!! Click start game to play again.";
            newCardBtn.disabled = true;
            newCardBtn.classList.add('disabledBtn');
            var inputValueAfter = inputValue * 2;
            moneyAmount = moneyAmount + inputValueAfter;
            moneyLocation.innerHTML = moneyAmount;
        } 
        else if (rndInt3 < 21) {
            question.innerHTML = "Do you want to draw another card?";
        } 
        else if (rndInt3 > 21) {
            question.innerHTML = "You've gone bust!";
            if (moneyAmount <= 0) {
                newCardBtn.disabled = true;
                startBtn.disabled = true;
                newCardBtn.classList.add('disabledBtn');
                startBtn.classList.add('disabledBtn');
            } else {
                inputAmount.setAttribute("max", moneyAmount);
            }
        }else if (rndInt3 < 21 && rndInt3 > dealerTotal) {
            question.innerHTML = "You beat the Dealer!!!.";
            newCardBtn.disabled = true;
            newCardBtn.classList.add('disabledBtn');
            var inputValueAfter = inputValue * 2;
            moneyAmount = moneyAmount + inputValueAfter;
            moneyLocation.innerHTML = moneyAmount;
        }else if (rndInt3 == "21" && rndInt3 > dealerTotal) {
            question.innerHTML = "You beat the Dealer!!!.";
            newCardBtn.disabled = true;
            newCardBtn.classList.add('disabledBtn');
            var inputValueAfter = inputValue * 2;
            moneyAmount = moneyAmount + inputValueAfter;
            moneyLocation.innerHTML = moneyAmount;
        }

    }
    
    
})

newCardBtn.addEventListener('click',()=>{
    let inputValue = inputAmount.value;
    rndInt4 = Math.floor(Math.random() * 11) +1;
    if (rndInt3 > 10 && rndInt4 == "11") {
        
    }
    rndInt3 = rndInt3 + rndInt4;
    cardLocation.textContent += ", " + rndInt4;
    console.log(rndInt4);
    sumLocation.innerHTML = rndInt3;
    if (rndInt3 == "21") {
        question.innerHTML = "Blackjack!!! Click start game to play again";
        newCardBtn.disabled = true;
        newCardBtn.classList.add('disabledBtn');
        var inputValueAfter = inputValue * 2;
        moneyAmount = moneyAmount + inputValueAfter;
        moneyLocation.innerHTML = moneyAmount;
    } 
    else if (rndInt3 < 21) {
        question.innerHTML = "Do you want to draw another card?";
    } 
    else if (rndInt3 > 21) {
        question.innerHTML = "You've gone bust!";
        newCardBtn.disabled = true;
        newCardBtn.classList.add('disabledBtn');
        if (moneyAmount <= 0) {
            newCardBtn.disabled = true;
            startBtn.disabled = true;
            newCardBtn.classList.add('disabledBtn');
            startBtn.classList.add('disabledBtn');
        } else {
            inputAmount.setAttribute("max", moneyAmount);
        }
    }
})

