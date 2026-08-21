heading = document.getElementById("heading"); 
console.log("By ID:", heading.textContent);

byClass = document.getElementsByClassName("highlight"); 
console.log("By Class Name:", byClass[0].textContent);

byTag = document.getElementsByTagName("p"); 
console.log("By Tag Name, count:", byTag.length);

firstPara = document.querySelector("p"); 
console.log("querySelector:", firstPara.textContent);

allParas = document.querySelectorAll("p"); 
allParas.forEach((p, index) => {   
     console.log(`querySelectorAll[${index}]:`, p.textContent); 
    });

listItems = document.querySelectorAll("#fruitList li"); 
listItems.forEach(item => item.classList.add("selected"));