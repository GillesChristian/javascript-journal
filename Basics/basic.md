# Chapter One: Basics
This chapter covers JavaScript's basic concepts:

## 1. JavaScript History:
- JavaScript, created by Brendan Eich in 1995 for Netscape Navigator, was standardized as ECMAScript in 1997, establishing consistency.
- Over the years, JavaScript has become integral to web development, supported by all major browsers.
- Evolving through ECMAScript updates, it continuously adds features and refines language specifications.
- JavaScript expanded its domain with Node.js, enabling server-side development beyond the browser.

## 2. JavaScript in Webpage:
- JavaScript operates primarily on the client-side within web browsers.
- Seamlessly integrated into HTML using `<script>` tags, it enhances user experience by responding to interactions.
- Dynamic manipulation of the Document Object Model (DOM) allows JavaScript to alter webpage content and structure.
- It excels in handling asynchronous operations, crucial for tasks like data fetching.
- Commonly used with libraries (e.g., jQuery) and frameworks (e.g., React, Angular) for efficient and scalable development.
- Modern web practices leverage JavaScript for building Single Page Applications (SPAs) and achieving responsive, interactive web design.

## 3. Identifiers:
An identifier is a name given to a variable, function, or other user-defined items in a program. Identifiers are used to uniquely identify and reference these items within the code. Rules for naming identifiers in JavaScript include:
```js
var firstname;
var class_list;
```

## 4. Reserved Words:
In JavaScript, reserved words are predefined and carry special meaning for the interpreter. These words cannot be used as identifiers. Some reserved keywords are; break, do, in, typeof, case, else, instanceof, var, catch, export, new, void, class, etc.

## 5. Strict Mode:
Strict Mode is a feature introduced in ECMAScript 5 (ES5) that allows you to opt-in to a set of rules and restrictions not enforced by default in normal JavaScript. When strict mode is enabled, the JavaScript interpreter is more strict about certain aspects of the language, helping developers catch common coding mistakes and preventing the use of certain error-prone features.
```js
"use strict";
let greetings = 'Hello World!';  
console.log(greetings);
```
In function:
```js
function function_name() {
    "use strict";
    // function body
}
```

## 6. Comment:
Comments are used to annotate code with information for human readers, ignored by the JavaScript interpreter. They are helpful for explaining code, making notes, or temporarily disabling code.
### Single-line comment:
```js
// This is a single line comment
```
### Multi-line comments:
```js
/*
* This is a multi-line comment
*
*/
```

## 7. Datatypes:
Data types define the nature of the data and the operations that can be performed on it. Common data types in JavaScript include:
### 1- Primitive Datatypes:
Primitive datatypes are immutable and include:
- Number:
```js
var number = 1;
var float_number = 10.3333;
```
- String:
```js
var name = 'Gilles';
var sentence = "My Javascript Journal";
```
- Boolean:
```js
var is_hungry = false;
var developer = true;
```
- Null:
```js
var my_name = null;
```
- Undefined:
```js
var lastname;
```
- Symbol:
```js
// This is a single line comment
```

### 2- Non-Primitive Datatypes:
Non-Primitive datatypes are mutable and include:
- Array:
```js
var myArray = [1, 4, 'javascript'];
```
- Objects:
```js
var myObject = {
    name: "Javascript",
    title: 'My Javascript Journal',
    pages: 10,
    hello: function sayHello() {
        console.log('Say Hello');
    }
};
```

## 8. Variables:
Variables are named memory locations used to store and represent data. There are three ways to declare variables: var, let, and const.
### A- var (Function Scope):
```js
var myvar = 'Hello with var variable declaration';
```
### B- let (Block Scope):
```js
let mylet = 'Hello with let variable declaration';
```
### C- const (Constant Variable):
```js
const myconst = 'Hello with const variable declaration';
```
### D- Scope:
- Global Scope:
```js
var globalScopeVar = '';

if (true) {
  globalScopedVar = "I am accessible in this block";
}

function functionScope() {
  globalScopedVar = "I am accessible in this function";
}
```
- Function Scope:
```js
function functionScope() {
  let functionScopedVar = "I am only accessible in this function";
}
```
- Block Scope (with let and const):
```js
if (true) {
  let blockScopedVar = "I am only accessible in this block";
}
```

## 9. Operators:

### A. Arithmetic Operators:
Used for performing mathematical operations on numeric operands.
```js
let sum = 5 + 3;
let difference = 10 - 4;
let product = 3 * 7;
let quotient = 15 / 3;
let remainder = 17 % 5;
let fullName = "John" + ' ' + "Doe";
```
### B. Comparison Operators:
Used for comparing two values and return a Boolean result.
```js
if (true) {
  console.log(5 == '5'); // true (loose equality)
  console.log(5 === '5'); // false (strict equality)
  console.log(5 != '5'); // false (loose inequality)
  console.log(5 !== '5'); // true (strict inequality)
  console.log(8 > 5); // true
  console.log(10 < 5); // false
  console.log(5 >= 5); // true
  console.log(4 <= 3); // false
}
```
### C. Logical Operators:
Used for performing logical operations on Boolean values.
```js
if (true) {
  console.log(true && false); // false
  console.log(true || false); // true
  console.log(!true); // false
}
```
### D. Assignment Operators:
Used for assigning values to variables.
```js
if (true) {
  let x = 10;
  let y = 5;
  y += 3; // Equivalent to y = y + 3; // y is now 8
  y -= 3; // Equivalent to y = y - 3; // y is now 2
  y *= 3; // Equivalent to y = y * 3; // y is now 24
  y /= 3; // Equivalent to y = y / 3; // y is now 2.666666667
}
```
### E. Bitwise Operators:
Used for performing operations at the bit level on binary representations of numbers.
```js
let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

console.log(a & b);  // Bitwise AND: 0001 (decimal 1)
console.log(a | b);  // Bitwise OR: 0111 (decimal 7)
console.log(a ^ b);  // Bitwise XOR: 0110 (decimal 6)
console.log(~a);     // Bitwise NOT: 1010 (decimal -6)

let num = 5;  // Binary: 0101

console.log(num << 1);   // Left shift by 1: 1010 (decimal 10)
console.log(num >> 1);   // Right shift by 1: 0010 (decimal 2)
console.log(num >>> 1);  // Zero-fill right shift by 1: 0010 (decimal 2)
```
### F. Ternary Operators:
The ternary operator, also known as the conditional operator, provides a concise way to write conditional statements in a single line. It is often used as a shorthand for simple conditions.
```js
// Syntax
condition ? expressionIfTrue : expressionIfFalse;

// Example
let age = 20;
let message = (age >= 18) ? 'Adult' : 'Minor';
```

## 10. Window Method:
The `window` object in a browser environment has key aspects and commonly used methods:

### A. alert():
The `alert()` method displays a dialog box with a specified message and an OK button.
```js
window.alert("Hello, World!");
```

### B. confirm():
The `confirm()` method displays a dialog box with a specified message, an OK button, and a Cancel button.
```js
let userResponse = window.confirm("Are you sure you want to proceed?");
```
The value of `userResponse` will be `true` if the user clicks OK and `false` if they click Cancel.

### C. prompt():
The `prompt()` method displays a dialog box with a specified message, an input field, and OK/Cancel buttons.
```js
let userInput = window.prompt("Please enter your name:", "John Doe");
```
The value of `userInput` will be the text entered by the user or `null` if they click Cancel.

### D. setTimeout():
The `setTimeout()` method sets a delay (in milliseconds) and executes a function or evaluates an expression after that delay.
```js
function showMessage() {
  alert("Time's up!");
}

setTimeout(showMessage, 3000); // Show alert after 3 seconds
```

### E. setInterval():
The `setInterval()` method repeatedly executes a function or evaluates an expression at specified intervals.
```js
function updateTime() {
  console.log(new Date());
}

setInterval(updateTime, 1000); // Log current time every second
```

## Exercises:
Certainly! Here are some exercises based on what you've learned in the provided JavaScript basics:

### Exercise 1: Variables and Data Types
1. Declare variables for your first name, last name, age, and country. Assign values to these variables.
2. Create a variable to calculate the total length of your first name and last name.
3. Display a message like "John Doe is 25 years old and lives in Canada" using the variables.
Certainly! Here are a few more exercises to practice variables, data types, and operators:

### Exercise 2: Working with Numbers

1. Declare two variables, `num1` and `num2`, and assign them any numeric values.
2. Calculate and display the sum, difference, product, and quotient of `num1` and `num2`.
3. Use the modulus operator to find and display the remainder when dividing `num1` by `num2`.

### Exercise 3: String Manipulation

1. Declare a variable `sentence` and assign it a string value.
2. Extract and display the length of the string.
3. Convert the string to uppercase and display the result.
4. Extract a substring from the 5th to the 10th character and display it.
5. Check if the string includes the word "JavaScript" and display the result.

### Exercise 4: Boolean Operations

1. Declare two boolean variables, `isTrue` and `isFalse`, and assign them values.
2. Use logical operators (`&&`, `||`, `!`) to perform boolean operations and display the results.

### Exercise 5: Comparison Operators

1. Declare two variables, `x` and `y`, and assign them values.
2. Use comparison operators (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`) to compare `x` and `y` and display the results.

### Exercise 6: Ternary Operator

1. Declare a variable `isAdult` and assign it a boolean value.
2. Use the ternary operator to create a message like "You are an adult" or "You are a minor" based on the value of `isAdult`.
3. Display the resulting message.

Feel free to try these exercises and experiment with different values to reinforce your understanding of variables, data types, and operators!