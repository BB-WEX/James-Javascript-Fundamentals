// Declaring all of the necessary const's

const startBtn = document.getElementById("start");
const hitBtn = document.getElementById("hit");
const standBtn = document.getElementById("stand");
const dealerCards = document.getElementById("dealersCardsLocation");
const dealerSum = document.getElementById("dealersSumLocation");
const playerText = document.getElementById("topText");
const playerCards = document.getElementById("cardsLocation");
const playerSum = document.getElementById("sumsLocation");
const playerMoney = document.getElementById("money");
const inputAmount = document.getElementById("bet");

// Declaring all of the vars

var playerNum1;
var playerNum2; 
var playerNum3; 
var playerTotal; 
var moneyAmount = 200;
var dealerNum1;
var dealerNum2;
var dealerNum3;
var dealerTotal;
var dealerHitChoice;

// Declaring all of the lets

let inputValue = Number(inputAmount.value);

// Function that checks if the money is lower than 0 and disables the game if it is
function moneyCheck(){
    if (moneyAmount <= 0) {
        playerText.innerHTML = "You've ran out of money."
        startBtn.disabled = true;
        hitBtn.disabled = true;
        standBtn.disabled = true;
        startBtn.classList.add('disabledBtn');
        hitBtn.classList.add('disabledBtn');
        standBtn.classList.add('disabledBtn');
    }
}

// this function checks the sum of the players cards to see if they have gotten blackjack or have gone bust
function playerCheck() {
    if (playerTotal > 21) {
        playerText.innerHTML = "You've gone bust.";
        hitBtn.disabled = true;
        standBtn.disabled = true;
        hitBtn.classList.add('disabledBtn');
        standBtn.classList.add('disabledBtn');
        moneyAmount = moneyAmount - inputValue;
        playerMoney.innerHTML = moneyAmount;
        inputAmount.setAttribute("max", moneyAmount);
        moneyCheck();

    } else if (playerTotal == "21") {
        playerText.innerHTML = "Blackjack!!!"
        moneyAmount = moneyAmount + inputValue;
        hitBtn.disabled = true;
        standBtn.disabled = true;
        hitBtn.classList.add('disabledBtn');
        standBtn.classList.add('disabledBtn');
        moneyAmount = moneyAmount - inputValue;
        playerMoney.innerHTML = moneyAmount;
        inputAmount.setAttribute("max", moneyAmount);
        moneyCheck();
    } else {
        playerText.innerHTML = "Do you want another card?";
    }
}

// This function is used after the player stands. It allows the dealer to hit if they need/want to. It then decides which route to take based on the users and dealers final amount. It then changes the money of the player based on their bet and if they won or lost.

function playerStand() {
    dealerHit();
    if (playerTotal > dealerTotal && playerTotal < 21) {
        playerText.innerHTML = "You win!!!";
        hitBtn.disabled = true;
        standBtn.disabled = true;
        hitBtn.classList.add('disabledBtn');
        standBtn.classList.add('disabledBtn');
        moneyAmount = moneyAmount + inputValue;
        playerMoney.innerHTML = moneyAmount;
        inputAmount.setAttribute("max", moneyAmount);
    } else if (playerTotal < dealerTotal && dealerTotal < 21) {
        playerText.innerHTML = "You lose.";
        hitBtn.disabled = true;
        standBtn.disabled = true;
        hitBtn.classList.add('disabledBtn');
        standBtn.classList.add('disabledBtn');
        moneyAmount = moneyAmount - inputValue;
        playerMoney.innerHTML = moneyAmount;
        inputAmount.setAttribute("max", moneyAmount);
        moneyCheck();
    } else if (playerTotal == dealerTotal) {
        playerText.innerHTML = "You draw."
        hitBtn.disabled = true;
        standBtn.disabled = true;
        hitBtn.classList.add('disabledBtn');
        standBtn.classList.add('disabledBtn');
        inputAmount.setAttribute("max", moneyAmount);
    } else if (dealerTotal == '21') {
        playerText.innerHTML = "Dealer has blackjack.";
        hitBtn.disabled = true;
        standBtn.disabled = true;
        hitBtn.classList.add('disabledBtn');
        standBtn.classList.add('disabledBtn');
        moneyAmount = moneyAmount - inputValue;
        playerMoney.innerHTML = moneyAmount;
        inputAmount.setAttribute("max", moneyAmount);
        moneyCheck();
    }
}

// This function is used at the start of every new game and clears all of the inner Htmls of the selectred areas. It also removes any applied classes and re-enables all buttons

function clear() {
    dealerCards.innerHTML = "";
    dealerSum.innerHTML = "";
    playerCards.innerHTML = "";
    playerSum.innerHTML = "";
    hitBtn.disabled = false;
    standBtn.disabled = false;
    hitBtn.classList.remove('disabledBtn');
    standBtn.classList.remove('disabledBtn');
}

// This function allows the dealer to hit depending on their total. If they have 16 there is a 50% chance of the dealer hitting.

function dealerHit() {
    while (dealerTotal < 16) {
        dealerNum3 = Math.floor(Math.random() * 11) + 1;
        if (dealerTotal >= 11 && dealerNum3 == "11") {
            dealerNum3 = 1;
        }
        dealerTotal = dealerTotal + dealerNum3;
        dealerCards.textContent += ", " + dealerNum3;
        dealerSum.innerHTML = dealerTotal;
    }
    while (dealerTotal == "16") {
        dealerHitChoice = Math.floor(Math.random() * 2) + 1;
        switch (dealerHitChoice) {
            case 1:
                dealerNum3 = Math.floor(Math.random() * 11) + 1;
                if (dealerTotal >= 11 && dealerNum3 == "11") {
                    dealerNum3 = 1;
                }
                dealerTotal = dealerTotal + dealerNum3;
                dealerCards.textContent += ", " + dealerNum3;
                dealerSum.innerHTML = dealerTotal;

            case 2:
                dealerCards.textContent += ", " + dealerNum3;
                dealerSum.innerHTML = dealerTotal;
                break;
        }
    }
}

// This function allows the player to hit and adds on the extra card to the list of cards and the sum

function playerHit() {
    playerNum3 = Math.floor(Math.random() * 11) + 0;
    if (playerTotal > 11 && playerNum3 == "11") {
        playerNum3 = 1;
    }
    playerTotal = playerTotal + playerNum3;
    playerCards.textContent += ", " + playerNum3;
    playerSum.innerHTML = playerTotal;

    playerCheck();
}

// This function is played at the start of each game and initialsises the origional 2 cards and sums.

function startGame() {
    clear();
    
    inputValue = Number(inputAmount.value);

    

    dealerNum1 = Math.floor(Math.random() * 11) + 1;
    dealerNum2 = Math.floor(Math.random() * 11) + 1;
    if (dealerNum1 == "11" && dealerNum2 == "11"){
        dealerNum2 = 1;
    }

    playerNum1 = Math.floor(Math.random() * 11) + 1;
    playerNum2 = Math.floor(Math.random() * 11) + 1;
    if (playerNum1 == "11" && playerNum2 == "11"){
        playerNum2 = 1;
    }

    dealerTotal = dealerNum1 + dealerNum2;
    playerTotal = playerNum1 + playerNum2;

    dealerCards.innerHTML = dealerNum1 + ", " + dealerNum2;
    playerCards.innerHTML = playerNum1 + ", " + playerNum2;
    dealerSum.innerHTML = dealerTotal;
    playerSum.innerHTML = playerTotal
    
    if (dealerTotal == "21") {
        playerText.innerHTML = "Dealer has blackjack.";
        hitBtn.disabled = true;
        standBtn.disabled = true;
        hitBtn.classList.add('disabledBtn');
        standBtn.classList.add('disabledBtn');
        moneyAmount = moneyAmount - inputValue;
        playerMoney.innerHTML = moneyAmount;
        inputAmount.setAttribute("max", moneyAmount);
        moneyCheck();
    }


    playerCheck();

    
}