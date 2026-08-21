function greetDeclaration(name) {    
    return "Hello (Declaration), " + name + "!"; 
} // ii. Function Expression (Definition) 

const greetExpression = function (name) {   
     return "Hello (Expression), " + name + "!"; 
    }; // iii. Arrow Function
    
const greetArrow = (name) => {    
    return "Hello (Arrow), " + name + "!"; 
}; // Shorthand arrow function
// 
const greetArrowShort = name => `Hello (Arrow Shorthand), ${name}!`; 
const results = [    
    ["Function Declaration", greetDeclaration("Mounika")],    ["Function Expression", greetExpression("Mounika")],    ["Arrow Function", greetArrow("Mounika")],    ["Arrow Function (Shorthand)", greetArrowShort("Mounika")] ]; const tbody = document.querySelector("#resultTable tbody"); results.forEach(([type, message]) => {    const row = document.createElement("tr");    row.innerHTML = `<td>${type}</td><td>${message}</td>`;    tbody.appendChild(row);    console.log(type + ":", message); });