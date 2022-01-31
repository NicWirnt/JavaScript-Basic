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

const person = {
    name: "john",
    age: 20,
    mobile: 292929,
    email: "assdsda"
};

const person1 = {
    name: "sam",
    age: 30,
    mobile: 24242424
};

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

const fruits = {
    best: "banana",
    worst: "Apple"
};

const personWithFruits = {...person1, ...fruits};
console.log(personWithFruits);

