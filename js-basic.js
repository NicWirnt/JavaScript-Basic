// alert('ok'); single line comment

/* multi line
comment */

// variable declaration

// var, let, const

// var firstName = 'Nico';
// let lastName = "Smith";
// const dob = 1990;

// firstName = "John";
// lastName = "Doe";


// console.log(firstName, lastName, dob);
// console.log(firstName);
// console.log(lastName);
// console.log(dob);

//Js - operators
// -> Arithmetic

// let val1 = 20;
// let val2 = 3;

// const ans = val1 + val2;
// const ans = val1 - val2;
// const ans = val1 * val2;
// const ans = val1 / val2;
// const ans = val1 % val2;
// const ans = val1 ** val2;
// val1++; //val1 = val1 + 1
// val1--; //val1 = val1 - 1
// val1++; //val1 = val1 + 1

// comparisons
// let val = 20;
// let val2 = "20";

// const ans = val == val2;
// const ans = val < val2;
// const ans = val >= val2;
// const ans = val <= val2;
// const ans = val === val2;


//data types

// let val = 20; //number
// let val2 = "Nico"; //string
// let isIt = true;
// let address; //null;



// console.log(typeof val, typeof val2, typeof address, typeof isIt, typeof null);

// Reference types
// -- objects, array, function

// object
// const person = {
//     firstName: "John", 
//     lastName: "Doe",
//     age: 21,
// };

// array
// const hobbies = ["Movies", "Music", true, 12,[50, "asd"], {name: "John"}
// ];

// Function

// function add(){
//     console.log(5 + 6 + 5);
// }

// ES6
// const add = () => {
//     console.log(5 + 6 + 5);
// };
// const add = (a, b) => console.log(a + b);
// const add = (a, b) => (a + b);

// const ans = add(5, 6);
// console.log(ans);

// Math Object

// const answer = Math.PI;
// 4.7
// const answer = Math.round(4.7);
// const answer = Math.floor(4.9); //4
// const answer = Math.ceil(4.1); //5
// const answer = Math.pow(5, 3);
// const answer = Math.sqrt(64);
// const answer = Math.min(0, 123, 72, 599, 535, -22, -58, 19);
// const answer = Math.max(0, 123, 72, 599, 535, -22, -58, 19);
// const answer = Math.random(); // 0 - 0.9

// console.log(answer);

// const hungry = false;

// if(hungry){
//     //run
//     console.log("Eat Pizza");
// }

// const age = 17;
// const gender = "female";

// If Condition

// if(age >= 18){
//     console.log("Welcome to the Pub");
// }

// logical operation -> &&, ||, |, tenary

// if else condition

// if(age >= 18 && gender === "female"){
// if(age >= 18 || gender === "female"){
//     console.log("Welcome to the Pub");
// }else{
//     console.log("You are not allowed to enter, go home");
// }

// const age = 17;
// const gender = "Cat";

// if(gender !== "female"){
//     console.log("Welcome to the park");
// }




// ELSE IF CONDITION

// const animal = "bird"; //dog, cow, bird

// if(animal == "cat"){
//     console.log("Meow");
// } else if(animal == "dog"){
//     console.log("woof");
// } else if(animal == "cow"){
//     console.log("Mooooo");
// } else if(animal == "bird"){
//     console.log("Cacawww");
// } else{
//     console.log("Unrecognised");
// }




// TENARY OPERATOR
// const type ="human";

// if(type == "human"){
//     console.log("Allowed in the Park");
// } else {
//     console.log("Not allowed to enter");
// }

// type == "human"
//     ? console.log("Allowed in the Park")
//     : console.log("Not allowed to enter");




// SWITCH

// const animal = "bird"; //dog, cow, bird

// switch(animal){
//     case "cat" :
//          console.log("Meow");
//          break;

//     case "dog" :
//          console.log("woof");
//          break;

//     case "cow" :
//          console.log("moooo");
//          break;

//     case "bird" :
//          console.log("twit");
//          break;

//     default:
//         console.log("Unrecognised");
// }




// ERROR HANDLING
// try{
//     // code
//     const fName = "John";
//     // fName = "John Doe";

//     // throw new Error("Something went wrong");

//     console.log(fName);
// } catch(error){
//     // catch if you get error
//     console.log(error);
// }finally{
//     // always run at the end
//     console.log("code execution time", Date());
// }




// SCHEDULING

// function name(){
//     //code
// }

// const sayHey = () =>{
//     console.log("Hi there");
// }

// console.log("my turn to execute code..1");

// const schedule1 = setTimeout(() => {
//     console.log("hi there 2");
// }, 3000);
// // setTimeout(sayHey, 3000);

// console.log("my turn to execute code..");

// clearTimeout(schedule1);
// console.log(schedule1);


// let i = 0;

// const timer = setInterval(() => {
//     console.log(i++);
//  if (i==5){
//     clearTimeout(timer);
// }
// }, 1000);


// clearInterval(timer);



// ES6
// let, const

// let name = "Nico";

// const sayHey = () => {
//     let name = "jane";
//     console.log(name);
// }
// const sayBye = () => {
//     let name = "Sam";
//     console.log(name);
// }

// sayHey();
// sayBye();

// console.log(name);

// Template Literals

// const sayHey = (name, age) =>{
//     const str = `
//    ${name} say hey, and ${age}  years old
//     `;
//     console.log(str);
//     // console.log(name + " say hey, and " + age + " years old");   
// };

// sayHey("Nico", 20);
// sayHey("John", 25);

// const person = {
//     name: "john",
//     age: 20,
//     mobile: 292929,
//     email: "assdsda"
// };

// const person1 = {
//     name: "sam",
//     age: 30,
//     mobile: 24242424
// };

// const intro = ({name, age, mobile, email = "info@dc.com"}) => {
//     // const {name, age, mobile} = obj;
//     console.log(name, age, mobile, email);
// };

// intro(person);
// intro(person1);

// const {email , ...newPerson} = person;
// console.log(person);
// console.log(email);
// console.log(newPerson);

// const fruits = {
//     best: "banana",
//     worst: "Apple"
// };

// const personWithFruits = {...person1, ...fruits};
// console.log(personWithFruits);



// LOOPS

// const 
// for(let i = 0; i < 10; i++){
//     // Run your Code
//     console.log(i);
// }

// console.log(fruits);
// console.log(fruits[2]);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }



// FOR IN LOPP -> LOPP THROUGH OBJECT

// const person = {
//     name: "John",
//     age: 20,
//     mobile: 51234
// }

// for (const key in person){
//     console.log(key);
// }

// FORM OF FOR IN LOPP IS FOR THE ARRAY
// for (const aaa of fruits){
//     console.log(aaa);
// }

// 



// WHILE LOOP
// let i = 0;
// while (i < 10){
//     //run code
//     console.log("run this code", i++);
// }



// DO WHILE LOOP
// do{
    // run code
    
    // console.log("run this code", i++);

    // i++;
    // if(i % 2 !=0){
    //     continue;
    // }
    // console.log("Run this code", i)

    // if (i == 5){
    //     console.log("...loppp exited");
    //     break;
    // }
// }while(i < 10);



// DATA MANIPULATION

// NUMBER
// const a = "5.5a";
// const b = parseInt(a);
// const c = parseFloat(a);

// const b = Number(a);
// const c = +a;
// const c = +a;
// const c = 345_344_554_334_534;

// SAFE NUMBER
// -2^53-1 to 2^53-1

// const c = isNaN("55a");  // is not a number
// console.log(c, typeof c);



// STRING
// const str = "lorem IINP askdf asid sdsfiisf";
// const val = str.toUpperCase();
// const val = str.toLocaleLowerCase();
// const val = str.length;
// console.log(val);
// const val = str.indexOf("asd");
// const val = str.lastIndexOf("i");
// const val = str.replace("asid", "home");
// const val = str.replaceAll("sid", "home");

// const val = str.slice(6,10) + " add me to the end";
// const val = str.substring(6,10);
// const val = str.charAt(6);

// const val = str.split(" "); //DATA SPLIT TO ARRAY BY THE SYMBOL INSIDE ()

// console.log(str);
// console.log(val);



//ARRAY

// "10-jan", "10-april"];

// const val = fruits.push("Grapes");
// fruits.unshift("Grapes");

// const val = fruits.pop();
// const val = fruits.shift();

// const val = fruits[2];

// fruits[2] = "grapes";

// const val = fruits.splice(2,1,"grapes");
// const val = fruits.slice(1,4);

// fruits.sort();
// fruits.reverse();

// const val = fruits.indexOf("banana");
// console.log(val,fruits);




// ARRAY LOOPS
// map, forEach, filter, some, reduce, every, find

// 


// map return new array

// const mapFruits = fruits.map((item, i) => {
//     console.log(i, item);
//     if (item == "banana"){
//         return "monkey";
//     }
//     return item.toUpperCase;
// })

// console.log(mapFruits);



//for each does not return new arg

// const newArg = fruits.forEach((fruit, i) => {
//     console.log(fruit, i);
// });
// console.log(fruits,newArg);



//filter returns new array of items that pass the test

// 
// const filterArg = fruits.filter((item, i) =>{
//     return item.includes("p");
// });
// console.log(fruits, filterArg);

//find
// const findArg = fruits.find(item => item.includes("p"));
// const findArg = fruits.some(item => item.includes("p"));
// const findArg = fruits.every(item => item.includes("a"));

// const money = [445, 54,2 ,6, 86, 4, 77, 3, 9, 10];


// const totalBalance = money.reduce((subTotal, number) => {
//     console.log(subTotal, number);
//     return subTotal+ number;
// }, 100);

// console.log(totalBalance);



// OBJECT

// 

// console.log(fruits);

// const newArg =[...fruits];
// newArg[2] = "grapes";

// console.log(newArg);
// console.log(fruits);

// const person = {
//     name: "john",
//     age: 20,
//     mobile: 231231,
//     // //     say : "hi"
// };

// person.lastName = "sam";
// delete person.fruits;

// const {fruits,...newArg} = person;

// const numarg = [1, 2, 3, 4, 5];

// console.log(person, newArg);

// const speak = ({name, say, ...rest}) =>{
//     console.log("Unused data" , rest);
//     const str = `${name} like to say ${say}`;
//     return str;
// }

// const answer = speak(person);

// const p2 = {...person, add: "Sydney"};

// console.log(person, p2);

//DATE

// const today = Date.now();
// const today = new Date();

// console.log(today.toISOString());
// console.log(today.toDateString());

// const year = today.getFullYear();
// const month = today.getMonth();
// const day = today.getDate();
// const hour = today.getHours();
// const min = today.getMinutes();
// const sec = today.getSeconds();


// console.log(year, month, day, hour, min, sec);
// console.log(today.toLocaleDateString());
// console.log(today);

// challenges
// 1. create an array of numbers from 1 to 100, Dynamically
// 2. sort the array in ascending order
// 3. get the total value of the array
// 4. create array for odd and even numbers out of the original array

// const randomArray = [];
// const randGen = () => {
//    return Math.ceil(Math.random() * 100);
// }
// //1.
// for (let i=0; i < 50; i++){
//     const ranVal = randGen();
//     randomArray.push(ranVal);
// }
// //2.
// randomArray.sort((a, b) => b - a);

// //3.
// const totalVal = randomArray.reduce((acc, n) => acc + n);


// //4
// const odd = randomArray.filter(n => n % 2 !== 0);
// const even = randomArray.filter(n => n % 2 === 0);


// console.log("sorted array ",randomArray);
// console.log("total Value " + totalVal);
// console.log("odd number ", odd);
// console.log("even number ", even);

//1.create an array of 50 random numbers from 1 to 100
//2. remove the duplicate value


const randomArray = [];
const ranGen = () =>{
    return Math.ceil(Math.random() * 100);
}
//1.
for(let i=0; i<50; i++){
    const ranVal = ranGen();
    randomArray.push(ranVal);
}


randomArray.sort((a,b) => a - b);
//2.

const uniqueArray = [...new Set(randomArray)]; //remove duplicate

// Find duplicates Values, reverse condition for eliminates duplicates

let uniqueNo = randomArray.filter((c, index) => {
    return randomArray.indexOf(c) !== index;
})

let uniqueNo1 = [];
randomArray.forEach((c) => {
    if(!uniqueNo1.includes(c)){
        uniqueNo1.push(c);
    }
})

const randomUnique =[];
while(randomUnique.length < 50){
    let r = Math.floor(Math.random() * 100) + 1;
    if(randomUnique.indexOf(r) === -1) randomUnique.push(r);
}

randomUnique.sort((a,b) => a-b);
console.log(randomUnique);

console.log(randomArray);
console.log(uniqueNo);
console.log(uniqueArray);
console.log(uniqueNo1);


