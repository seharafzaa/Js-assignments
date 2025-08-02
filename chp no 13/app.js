// Question no 1 //

let a = 5;
let b = 5;
let c = 10;
let d = 10;

if (a === b && c === d) {
  alert("Both conditions are true: a equals b AND c equals d.");
} else {
  alert("One or both conditions are false.");
}

// Question no 2 //

let A = 5;
let B = 5;
let C = 10;
let D = 20;

if (A === B || C !== D) {
  alert("Either 'a equals b' or 'c does not equal d', or both are true.");
} else {
  alert("Neither condition is true.");
}

// Question no 3 //

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

age = Number(age);


if ((name === "Hamza" || name === "Arsalan") && age < 60) {
  alert("Conditions is true");
} else {
  alert("Conditions not met.");
}


// Question no 4 //

let num1 = 10;
let num2 = 20;

if (num1 < num2 || num1 > num2) {
  alert("The first variable is either less than or greater than the second variable.");
}

