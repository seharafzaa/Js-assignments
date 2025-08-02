//Question no 1 //

for (let i = 0; i < 10; i++) {
    
}

//Question no 2 //
for (let i = 1; i <= 12; i++) {
    
}


//Question no 3 //
for (var i = 0; i <= 4; i++) {
    
}

//Question no 4 //
for (let count = 0; count < 100; count++) {
    
}

//Question no 5 //
for (let i = 2; i >= 0; i--) {
    // Runs 3 times: i=2,1,0
}


//Question no 6 //

let length = array.length;


//Question no 7 //

let flag = true;  // You can also set it to false

// Example usage
if (flag) {
  console.log("Flag is true — condition met.");
} else {
  console.log("Flag is false — condition not met.");
}


//Question no 8 //
var pets = ["dog", "cat", "ox", "duck", "frog"];

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}


//Question no 9 //

for (let i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;
    }
}


//Question no 10 //
let userNames = ["Alice", "Bob", "Charlie"];
let firstName = prompt("Enter first name");

for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === firstName) {
        alert("Enter");
        break;
    } else if (i === userNames.length - 1) {
        alert("Please write correct user name");
    }
}


//Question no 11 //

var matchFound = false; 
for (var i = 0; i < list.length; i++) { 
    if (userInput === list[i]) { 
        alert("Match found"); 
        matchFound = true; 
        break; 
    } 
} 

if (!matchFound) {
    alert("No match found");
}

//Question no 12 //

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}


