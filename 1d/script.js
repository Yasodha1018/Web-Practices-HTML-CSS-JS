let count = 0; 
const countDisplay = document.getElementById("count"); 
const status = document.getElementById("status"); 
const incrementBtn = document.getElementById("incrementBtn"); 
const decrementBtn = document.getElementById("decrementBtn"); 
const resetBtn = document.getElementById("resetBtn"); // Handle click event - increment 

incrementBtn.addEventListener("click", function () {    
    count++;    
    countDisplay.textContent = count;    
    status.textContent = "Status: Incremented"; 
}); 
// Handle click event - decrement 

decrementBtn.addEventListener("click", function () {    
    count--;    
    countDisplay.textContent = count;    
    status.textContent = "Status: Decremented"; 
}); 
// Handle click event - reset 

resetBtn.addEventListener("click", function () {    
    count = 0;    
    countDisplay.textContent = count;    
    status.textContent = "Status: Reset"; 
});