// Exercise 1: Variables and Data Types

// Declare variables for first name, last name, age, and country
var firstName = "John";
var lastName = "Doe";
var age = 25;
var country = "Canada";

// Create a variable to calculate the total length of the first name and last name
var fullNameLength = firstName.length + lastName.length;

// Display a message using the variables
console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}.`);

// Display the total length of the full name
console.log(`The total length of the full name is ${fullNameLength} characters.`);

// Exercise 2: Working with Numbers
let num1 = 10;
let num2 = 5;

// Calculations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Exercise 3: String Manipulation
let sentence = "Hello, JavaScript!";

// String operations
let length = sentence.length;
let uppercaseSentence = sentence.toUpperCase();
let substring = sentence.substring(5, 11);
let includesJavaScript = sentence.includes("JavaScript");

console.log("Length:", length);
console.log("Uppercase:", uppercaseSentence);
console.log("Substring:", substring);
console.log("Includes 'JavaScript':", includesJavaScript);

// Exercise 5: Comparison Operators
let x = 10;
let y = 5;

// Comparison operations
console.log("Equal:", x == y);
console.log("Strict Equal:", x === y);
console.log("Not Equal:", x != y);
console.log("Strict Not Equal:", x !== y);
console.log("Greater Than:", x > y);
console.log("Less Than:", x < y);
console.log("Greater Than or Equal:", x >= y);
console.log("Less Than or Equal:", x <= y);

// Exercise 6: Ternary Operator
let isAdult = true;

// Ternary operator
let message = isAdult ? "You are an adult" : "You are a minor";

console.log(message);
