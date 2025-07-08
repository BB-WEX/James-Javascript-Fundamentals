const passengers = document.getElementById('passengerCount');
const incrementBtn = document.getElementById('increment');
const saveBtn = document.getElementById('save');
const saveLocation = document.getElementById('entriesLocation');
const clearBtn = document.getElementById('clear');

let count = 0;

incrementBtn.addEventListener('click',()=>{
    count++;
    passengers.innerHTML = count;
});

saveBtn.addEventListener('click',()=>{
    saveLocation.textContent += count + " - ";
    count = 0;
    passengers.innerHTML = count;
})

clearBtn.addEventListener('click',()=>{
    count = 0;
    passengers.innerHTML = count;
    saveLocation.innerHTML = "";
})