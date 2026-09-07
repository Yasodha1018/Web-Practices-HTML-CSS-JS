console.log("Hello World!");

console.log("==============================")

console.log("If condition ")
let age=20;
if(age>=18){
    console.log("Eligible for voting")
}

console.log("==============================")

console.log("If else condition")

age =15;
if(age>=18){
console.log("Eligible for voting")
}else{
    console.log("Not Eligible for voting")
}


console.log("==================================")
console.log("else if condition")
marks=80;
 if(marks>=90){
    console.log("A grade")
 }
else if(marks>=80){
    console.log("B grade")
}

console.log("-====================================")
console.log("switch condition")

day=2;
switch(day){
    case 1:
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break

    case 3:
    console.log("Wedesday");
    break
}

console.log("===========================")
console.log(" for loop")
for(i=1;i<=5;i++){
    console.log(i);
}

console.log("===========================")
console.log(" while loop")
i=1;
while(i<=5){
    console.log(i);
    i++;
}

console.log("===========================")
console.log(" do while loop")
i=1;
do{
    console.log(i);
    i++;
}while(i<=5)


console.log("=============================")
console.log(" ========function=====")
function greet(){
    console.log("Hello");
}

greet();

console.log("=============================")
console.log(" ========Parameters function=====")
function add(a,b){
    return a+b;
}

console.log(add(3,4));

console.log("=============================")
console.log(" ========Arrow function=====")
add=(a,b)=>a+b;
console.log(add(4,5))

console.log("=============================")
console.log("Javascript Array")

fruits=[
    "apples",
    "banana",
    "mango"
];

console.log(fruits[0]);
fruits.push("orange");
console.log("After push :",fruits)
fruits.pop();
console.log("After pop:",fruits)
console.log(fruits.length)

console.log("--------------------------")