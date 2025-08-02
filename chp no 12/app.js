// Question no 1 //

let num1 = 20; 
let num2 = 15; 

if (num1 >= num2) {
  alert("num1 is greater than or equal to num2");
} else {
  alert("num1 is less than num2");
}

// Question no 2 //

const totalSubjects = 5;
const maxMarksPerSubject = 100;
const totalMarks = totalSubjects * maxMarksPerSubject;

let totalObtainedMarks = 0;

for (let i = 1; i <= totalSubjects; i++) {
  let marks = prompt(`Enter marks obtained in subject ${i} (out of 100):`);
  
  marks = Number(marks);
  
  if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Invalid input. Please enter a number between 0 and 100.");
    i--; 
  } else {
    totalObtainedMarks += marks;
  }
}


const percentage = (totalObtainedMarks / totalMarks) * 100;


let grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 75) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else {
  grade = "F";
}

alert(
  `Total Marks Obtained: ${totalObtainedMarks}/${totalMarks}\n` +
  `Percentage: ${percentage.toFixed(2)}%\n` +
  `Grade: ${grade}`
);

// Question no 3 //

let a = prompt("Enter a value for a:"); 
a = Number(a); 

if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is 10");
}

// Question no 4 //

let city = prompt("Enter a city:");

if (city === "Karachi") {
  alert("You entered Karachi.");
} else if (city === "Lahore") {
  alert("You entered Lahore.");
} else {
  alert("This city is not Karachi or Lahore.");
}

