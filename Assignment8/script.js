/*
1 - Age Category Message  - Ask User for thier Age , If they are under 18, print "You ar minor "

and if they are between 18 to 60 print " You are an adult " if they are above 60 then print 
" You are senior citizen."
 */

let age = prompt("Please enter your age ");

if (age < 18) {
  console.log("You are minor");
} else if (age > 18 && age < 60) {
  console.log("You are an adult ");
} else {
  console.log("You are an adult");
}

/*
2 - Even or Odd Sum 
Take Two number from user using prompt (). If the sum of the both the numbr is even is then print "Even Sum" or otherwise print "Odd Sum"
*/

let numb1 = prompt("Please enter number 1 ");
let numb2 = prompt("Please enter number 2 ");

let sum = numb1 + numb2;

if (sum % 2 == 0) {
  console.log("EVEN SUM");
} else {
  console.log("Odd Sum");
}

/*
3 - Character Case Checker - Ask the use for a single character Check if it's uppercase, lowercasem or neither (not a letter)
*/

let char = prompt("Enter a character ");
let charCode = char.charCodeAt(0); // Get ASCII value of the character

if (charCode >= 65 && charCode <= 90) {
  console.log("Character is UPPERCASE Letter");
} else if (charCode >= 97 && charCode <= 120) {
  console.log("Charactr is LOWERCASE letter");
} else {
  console.log("Character is not a letter");
}

/*

4 -  Largest of 3 Numbers - Take three numbers as input and print the largest
number among them withiut using Math.max();
*/

let num1 = prompt("Enter number 1");
let num2 = prompt("Enter number 2");
let num3 = prompt("Enter number 3");

if (num1 > num2 && num1 > num3) {
  console.log("Number1 is largest");
} else if (num2 > num1 && num2 > num3) {
  console.log("Number 2 is largest");
} else {
  console.log("Number 3 is largest");
}

/*
5 - Leap Year checker - Ask the user for a year and determine if it's leap year or not.

*/

let year = prompt("Enter a year");

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

/*
6 - Simple Calculator - Ask the use for two numbers and an operator (+,-,*,/). Perform the operation and display the result 

*/
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

let result;

switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    if (number2 !== 0) {
      result = number1 / number2;
    } else {
      result = "Error: Division by zero";
    }
    break;
  default:
    result = "Invalid operator";
}

console.log(`The result is: ${result}`);

/*
7 -  Positive , Negative, or Zero  - Take A number input and check if the number is positive negativer or zero
*/

var number = parseInt(prompt("Enter a number "));

if (number > 0) {
  console.log(`${number} is positive number `);
} else if (number < 0) {
  console.log(`${number} is negative`);
} else {
  console.log(`${number} is zero`);
}

/*
8 - User Greeting - Ask for the user's name and time (24-hour time format). Greet them accordingly


5AM - 12PM : "Good Morning , [NAME] !"

12PM - 5PM : "Good Afternoon" , [Name]!;

5PM - 9PM : "Good Evening , [NAME] !"

9PM - 5AM : "Good Night, [NAME] !"
*/

let name = prompt("Enter your name");

let time = parseInt(prompt("Enter the time (24-hour format):"));

if (time >= 5 && time < 12) {
  console.log(`Good Morning, ${name}!`);
} else if (time >= 12 && time < 17) {
  console.log(`Good Afternoon, ${name}!`);
} else if (time >= 17 && time < 21) {
  console.log(`Good Evening, ${name}!`);
} else {
  console.log(`Good Night, ${name}!`);
}

/*
9 - Traffic Light System -  Ask the user for a traffic light color (red, yellow, green). Print appropriate messages:

Red : "Stop!"

Yellow : "Get Ready!"

Green : "Go!"
*/

let color = prompt("Enter the color (Red, Yellow, Green)");

if (color === "Red") {
  console.log("Stop!");
} else if (color === "Yellow") {
  console.log("Get Ready!");
} else if (color === "Go!") {
  console.log("Go!");
} else {
  console.log("Kindly Enter valid color only");
}

/*
 10 -  Multiplication Table- Ask the user for a number and print its multiplication table up to 10
 */

let number = parseInt(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {
  console.table(`${number} * ${i} = ${number * i}`);
}

/*
11 - Grade Calculator - Ask the user for their marks (0-100). Assign graded based on the range:

90 - 100: A
80 - 89 : B
70 - 79 : C
60 - 69 : D
Below 60 : F
*/

let marks = parseInt(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
  console.log("Your Grade is A");
} else if (marks >= 80 && marks <= 89) {
  console.log("Your Grade is B");
} else if (marks >= 70 && marks <= 79) {
  console.log("Your Grade is C");
} else if (marks >= 60 && marks <= 69) {
  console.log("Your Grade is D");
} else {
  console.log("Your Grade is F");
}

/*
12 - Simple Login System - Set a predefined username ad password. Ask the user to enter theri credentials using prompt(). If correc, print "LoginSuccessful";
otherwise , print "Incorrct username or password"
*/

const username = "xyz";
const password = "12345";

let userName = prompt("Enter the username");
let passWord = prompt("Enter the password");

if (userName === username && passWord === password)
  console.log("Login Successful");
else {
  console.log("Incorrect username or password");
}

/*
13 - Swapping without Third Variable - Take two nmbers from the user and swap their values without using a third variable
 */

// Swapping without using a third variable (using arithmetic operations)
let number_1 = prompt("Enter number 1");
let number_2 = prompt("Enter number 2");

console.log(`Before Swapping: number_1 = ${number_1}, number_2 = ${number_2}`);
number_1 = number_1 - number_2;
number_2 = number_1 + number_2;
number_1 = number_2 - number_1;
console.log(`After Swapping: number_1 = ${number_1}, number_2 = ${number_2}`);

// Swapping using destructuring assignment
let a = prompt("Enter number 1");
let b = prompt("Enter number 2");

console.log(`Before Swapping: a = ${a}, b = ${b}`);
[a, b] = [b, a];
console.log(`After Swapping: a = ${a}, b = ${b}`);

// Swapping using XOR operator
let x = prompt("Enter number 1");
let y = prompt("Enter number 2");
console.log(`Before Swapping: x = ${x}, y = ${y}`);
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(`After Swapping: x = ${x}, y = ${y}`);

/*
14 - FizzBuzz(Multiple of Both 3 and 5) -  Ask the use for a number. If it's a  multiple of bot 3 and 5, print "FizzBuzz" ; If only 3, print "Fizz" ; if only 5 , print "Buzz" ; otherwise ,print the number itself
*/

let anyNumber = parseInt(prompt("Enter a number"));

if (anyNumber % 3 == 0 && anyNumber % 5 == 0) {
  console.log("FizzBuzz");
} else if (anyNumber % 3 == 0) {
  console.log("Fizz");
} else if (anyNumber % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(anyNumber);
}

/*
15 - Number Reversal - Take three- digit number from the user and print its reverse(Example 123 -> 321)
*/

// Using String and its  Array Method( Convert the number -> string -> convert the string -> Array -> then reverse)

let numberTobereverse = parseInt(prompt("Enter a number "));

console.log(`Before Reversal ${numberTobereverse}`);
let reversalNumber = parseInt(
  numberTobereverse.toString().split("").reverse().join("")
);

console.log(`After Reversal ${reversalNumber}`);

// Reversing the number without string method
let num = parseInt(prompt("Enter a number"));

console.log(`Before Reversing the number ${num}`);

let reverseNumber = 0;

let remiander = 0;

while (num > 0) {
  remiander = num % 10;
  reverseNumber = reverseNumber * 10 + remiander;
  num = parseInt(num / 10);
}
console.log(`After Reversing the number ${reverseNumber}`);

/*
16 - Sum of Digits  - Take a number from the user and prin the sum of its digits (Example 123 -> 1 + 2 + 3  = 6 )
*/

let numm = parseInt(prompt("Enter a number"));

console.log(`Number is : ${numm}`);

let sumOfDigits = 0;
let rem = 0;

while (numm > 0) {
  remiander = numm % 10;
  sumOfDigits = sumOfDigits + remiander;
  numm = parseInt(numm / 10);
}
console.log(`Sum of the digits is : ${sumOfDigits}`);

/*
 17 - Palindrome Checker - Ask the user for a word. Check if it reads the same forward and backward. Print "Palindrome" or  " Not a paliandrome"

 perform the reverse of string by own (without split join and reverse)

*/
//Convert the word into the array using split and then reverse the array and again convert the array into the string using join

let word = prompt("Enter a word");

let paliandromeWord = word.split("").reverse().join("");
console.log(paliandromeWord);

if (word === paliandromeWord) {
  console.log(`${word} is Paliandrome`);
} else {
  console.log(`${word} is Not a Paliandrome`);
}

/*

18 - Reverse Without String Methods - Ask the user for a number and reverse it without using .split(), .reverse(), .join()
*/
let v = parseInt(prompt("Enter a number"));

console.log(`Before Reversing the number ${v}`);

let reverselNumber = 0;

let remi = 0;

while (v > 0) {
  remiander = num % 10;
  reverselNumber = reverselNumber * 10 + remi;
  v = parseInt(v / 10);
}
console.log(`After Reversing the number ${reverselNumber}`);

/*

19 - Find Second Largest - Take three number as input and find the second largest number(without using sort() or Math.max())
*/

let firstNumber = parseInt(prompt("Enter First Number"));
let secondNumber = parseInt(prompt("Enter Second Number"));
let thirdNumber = parseInt(prompt("Enter Third Number"));

let maxi;
let secondMax;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  maxi = firstNumber;
  secondMax = secondNumber > thirdNumber ? secondNumber : thirdNumber;
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  maxi = secondNumber;
  secondMax = firstNumber > thirdNumber ? firstNumber : thirdNumber;
} else {
  maxi = thirdNumber;
  secondMax = firstNumber > secondNumber ? firstNumber : secondNumber;
}

console.log(`The second largest number is: ${secondMax}`);

/*

20 - Find First Non - Repeating Character  - Ask the user for a word  and first chracter that does not repeat. Example : Hello -> H is the first non repeating 
*/
let str = prompt("Enter a word");
let obj = {};

// Step 1: Store the character counts in the object
for (let char of str) {
  obj[char] = obj[char] ? obj[char] + 1 : 1; // Increment count, or set to 1 if it's the first time
}

// Step 2: Find the first non-repeating character
for (let char of str) {
  if (obj[char] === 1) {
    console.log(`${char} is the first non-repeating character.`);
    break; // Stop once the first non-repeating character is found
  }
}
