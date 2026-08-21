numbers=[10,23,30,43,50];
numbers.forEach(element => {
    console.log(element);
});

result = numbers.map(function(num){
    return num *2
});

console.log(result);

even=numbers.filter(function(num){
    return num%2===0;
});
console.log(even);

sum=numbers.reduce(function(total, num){
    return total+num;
})
console.log(sum);
// checks whether all element satisfies the condition. If condition satifies by all elements it return true otherwise false 
result1=numbers.find((num)=> num>25);
console.log(result1);
//check wheather the element is present in the array or not 
fruits=["apple","Banana", "mango","guava"];
console.log(fruits.includes("mango"))



/*
set methods:
1. setFullYear()
2.setMonth()
3.setDate()
4.setHourse()
5.setMinutes()
6.setSeconds()
*/

date=new Date();
date.setFullYear(2028);
date.setMonth(10);
console.log(date);

//formatting method
date =new Date();
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())


//object linterals in js:
student={
    name:"lokesh",
    age:23,
    course:"IT"

};

student.college="svcet";//add new property to the object
console.log(student)
console.log(student.name) // to access particular property
console.log(student["course"]) // to access particular property in a course 
delete student.age;
console.log(student)

//feature of ES6
//1.property shorthand
name2="yaso";
age1=21;
person={
    name2,
    age1
};
console.log(person);

//2. method shorthand:
person1={
    greet(){
        return "hello world"
    }
};
console.log(person1)

spread operator('...'
    Allws an terriable like an array or string to be expanded in places where zero or more arguments {for function calls} or elements {for array literal} are expected. Also for used for object literals. 
    cpying array,combination array,adding element to array
    
)