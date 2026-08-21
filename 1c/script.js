const button = document.getElementById("clickBtn"); 
const input = document.getElementById("nameInput"); 
const select = document.getElementById("colorSelect"); 
const output = document.getElementById("output"); // Event listener for click event 
button.addEventListener("click", function () {    
    output.textContent = "Button was clicked!";
 }); // Event listener for input (keyup) event 
 input.addEventListener("keyup", function (event) {    
    output.textContent = "You typed: " + event.target.value; 
}); // Event listener for change event on 

select.addEventListener("change", function (event) {    
    output.textContent = "Favourite colour: " + event.target.value;    
    output.style.color = event.target.value || "#2c3e50"; 
}); // Event listener for mouseover event 
button.addEventListener("mouseover", function () {    
    button.style.backgroundColor = "#1abc9c"; 
}); // Event listener for mouseout event 
// 
button.addEventListener("mouseout", function () {    
    button.style.backgroundColor = "#16a085"; 
});