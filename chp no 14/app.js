// Question no 1 //

let password = prompt("Enter your password:");


if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// Question no 2 //


let a = 1;
let c = "Max";

if (a === 1) { 
if (c === "Max") { 
alert("OK"); 
} 
} 

// Question no 3 //

if (a === 1 && c === "Max") {
  alert("OK");
}

// Question no 4 //

let num1 = 10;
let num2 = 10;

if (num1 === num2) {
    if (num1 <= num2) {

        alert("Both conditions are true: num1 equals num2 and is less than or equal to num2.");
    }
}
