// Exercise 1: Age Checker
let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if(age >=  18 && age <= 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

// Exercise 2: Temperature Adviser
let temperature = 34;

if (temperature < 0) {
    console.log("It's freezing!");
} else if(temperature >=  0 && temperature <= 15) {
    console.log("It's cold. Dress warmly.");
} else if(temperature >=  16 && temperature <= 25) {
    console.log("The weather is pleasant.");
} else {
    console.log("It's hot. Stay cool!");
}

// Exercise 3: Grade Classifier
let score = 80;

if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score < 90) {
  console.log("Grade: B");
} else if (score >= 70 && score < 80) {
  console.log("Grade: C");
} else if (score >= 60 && score < 70) {
  console.log("Grade: D");
} else if (score >= 0 && score < 60) {
  console.log("Grade: F");
} else {
  console.log("Invalid score. Please enter a valid score.");
}

// Exercise 4: Day of the Week
let dayNumber = 5;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number.");
}

// Exercise 5: Password Checker
let password = "password123";

if (password === "password123") {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// Exercise 6: Factorial Calculator
let number = 6;
let result = number >= 0
  ? (function factorial(n) {
      return n > 1 ? n * factorial(n - 1) : 1;
    })(number)
  : "Please enter a non-negative integer.";

console.log(result);

// Exercise 7: Quadratic Equation Solver
let a = 1;
let b = 3;
let c = -4;

const discriminant = b ** 2 - 4 * a * c;

if (discriminant > 0) {
  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`Roots are real and different: ${root1} and ${root2}`);
} else if (discriminant === 0) {
  const root = -b / (2 * a);
  console.log(`Root is real and the same: ${root}`);
} else {
  const realPart = -b / (2 * a);
  const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
  console.log(`Roots are complex: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`);
}
