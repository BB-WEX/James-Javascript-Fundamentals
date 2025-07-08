const passengers = document.getElementById('passengerCount');
const incrementBtn = document.getElementById('increment');

let count = 0;

incrementBtn.addEventListener('click',()=>{
    count++;
    passengers.innerHTML = count;
})