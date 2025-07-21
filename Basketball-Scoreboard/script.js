const counterHome = document.getElementById('scoreHome');
const increaseBtnHome1 = document.getElementById('home1');
const increaseBtnHome2 = document.getElementById('home2');
const increaseBtnHome3 = document.getElementById('home3');
const resetBtnHome = document.getElementById('homeReset');

const counterAway = document.getElementById('scoreAway');
const increaseBtnAway1 = document.getElementById('away1');
const increaseBtnAway2 = document.getElementById('away2');
const increaseBtnAway3 = document.getElementById('away3');
const resetBtnAway = document.getElementById('awayReset');

let homeNum = 0;

increaseBtnHome1.addEventListener('click',()=>{
    homeNum++;
    counterHome.innerHTML = homeNum;
});

increaseBtnHome2.addEventListener('click',()=>{
    homeNum += 2;
    counterHome.innerHTML = homeNum;
});

increaseBtnHome3.addEventListener('click',()=>{
    homeNum += 3;
    counterHome.innerHTML = homeNum;
})

resetBtnHome.addEventListener('click',()=>{
    counterHome.innerHTML = 0;
    homeNum = 0;
})

let awayNum = 0;

increaseBtnAway1.addEventListener('click',()=>{
    awayNum++;
    counterAway.innerHTML = awayNum;
});

increaseBtnAway2.addEventListener('click',()=>{
    awayNum += 2;
    counterAway.innerHTML = awayNum;
});

increaseBtnAway3.addEventListener('click',()=>{
    awayNum += 3;
    counterAway.innerHTML = awayNum;
});

resetBtnAway.addEventListener('click',()=>{
    counterAway.innerHTML = 0;
    awayNum = 0;
})