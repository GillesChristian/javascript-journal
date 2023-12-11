# Chapter Two: Conditional Statements
Conditional statements are used for decision-making in your code. They include;

## 1- If Statement
The basic if statement checks a condition and executes a block of code if the condition is true.eg
```js
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
```
## 2- If Else Statement
If the condition in the if statement is false, you can provide an alternative block of code using the else statement.
```js
let age = 15;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```
## 3- If Else If  Statement
When you have multiple conditions, you can use else if to check additional conditions.
```js
let time = 14;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
```
## 4- Nested If Statement
You can nest conditional statements inside each other for more complex logic
```js
let isRaining = true;
let isCold = false;

if (isRaining) {
  if (isCold) {
    console.log("Bring an umbrella and wear a jacket.");
  } else {
    console.log("Bring an umbrella.");
  }
} else {
  console.log("Enjoy the day!");
}

```
## 5- Switch Statement
The switch statement is useful when you have multiple conditions to check against a single value.
```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}


```
## 6- Tenary Operator
The ternary operator (condition ? expr1 : expr2) provides a concise way to write simple if-else statements.
```js
let age = 20;

let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);
```

## Exercises
 Here are some exercises to practice the concepts covered in this chapter:

### Exercise 1: Age Checker
Write a program that prompts the user to enter their age. Based on the age entered, display different messages:
- If the age is less than 18, display "You are a minor."
- If the age is between 18 and 65 (inclusive), display "You are an adult."
- If the age is greater than 65, display "You are a senior citizen."

### Exercise 2: Temperature Adviser
Create a program that prompts the user to enter the current temperature in Celsius. Based on the temperature, provide the following advice:
- If the temperature is less than 0, display "It's freezing!"
- If the temperature is between 0 and 15, display "It's cold. Dress warmly."
- If the temperature is between 16 and 25, display "The weather is pleasant."
- If the temperature is above 25, display "It's hot. Stay cool!"

### Exercise 3: Grade Classifier
Write a program that takes a student's score as input and assigns a grade:
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: 0-59

### Exercise 4: Day of the Week
Prompt the user to enter a number representing the day of the week (1 for Monday, 2 for Tuesday, etc.). Display the corresponding day.
- Use a `switch` statement for this exercise.

### Exercise 5: Password Checker
Create a simple password checker. Prompt the user to enter a password. If the password is "password123", display "Access granted." Otherwise, display "Access denied."

### Exercise 6: Factorial Calculator
Write a program that prompts the user to enter a non-negative integer. Calculate and display its factorial. Handle the case where the input is not a non-negative integer.

### Exercise 7: Quadratic Equation Solver
Prompt the user to enter the coefficients (a, b, c) of a quadratic equation (ax^2 + bx + c = 0). Determine and display the roots of the equation. Handle cases where the roots are real or complex.

Feel free to customize the exercises, create additional scenarios, and experiment with different conditions. If you have questions or need assistance with any exercise, don't hesitate to ask!