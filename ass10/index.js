//1.What is JavaScript
/*
Javascript is used to create interactive and dynamic webpages.
It is responsible for addinfg functionality to a website and allows for user interaction withnthe websites content. 
*/

//2. Variables and Types:
let userAge = 20;
let userName = "Maha";
console.log("Name : " + userName + " Age : " + userAge);

//3.Comments in JavaScript
/*
function is a block of code used to perform a particular task.
*/

//4.Operations
let num1 = 5,
  num2 = 4;
function add(num1, num2) {
  console.log(num1 + num2);
}
function sub(num1, num2) {
  console.log(num1 - num2);
}
function mul(num1, num2) {
  console.log(num1 * num2);
}
function divi(num1, num2) {
  console.log(num1 / num2);
}
add(num1, num2);
sub(num1, num2);
mul(num1, num2);
divi(num1, num2);

//5.Data Types

let s = "Maha";
console.log(typeof s);
let n = 5;
console.log(typeof n);
let m = true;
console.log(typeof m);
let ar = [2, 3, 4, 5];
console.log(typeof ar);

//6.Functions in Javascript
function greatUser(name) {
  return `Welcome ${name} to Our Website`;
}
const welcome = greatUser("Maha");
console.log(welcome);

//7.If Else in Javascript
let temperature = 45;
if (temperature > 30) {
  console.log("Temperature is greater than 30");
} else {
  console.log("Temperature is Lesser than 30");
}

//8.For Loop
for (let i = 1; i <= 5; i++) {
  console.log(i + " ");
}

//9. Loose vs strict Equality

/*
Loose Equality does not check the datatype,if the given value is same it return true

let no=6;
let s="6"
if(no==s)// return true - Loose Equality

if(no===s)// return false - Strict Equality


Strict Equality check for the same datatype. if the value is same datatype and the values are equal then it returns true.
*/
