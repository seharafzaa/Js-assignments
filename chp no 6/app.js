// Question no 1 //
 
var x=68;
 
 x++; //++x we can do this also
 
 console.log(x)

// Question no 2 //

var x = 100;
--x; // now x is 99
console.log(x); 

//Question no 3 //
var x = 50; 
var y = x++; 
console.log(y) //Using var y = x++; assigns the current value of x (which is 50) to y before incrementing x to 51, so y remains 50 instead of showing 51. 

//Question no 4 //

var y = 50; 
var z = --y;
console.log(z) //Using var z = --y; decrements y before assigning it, so both y and z end up with the value 49.

//Question no 5 //

var num = 10;

var newNum = num--; // newNum gets 10; num becomes 9

console.log("newNum:", newNum); // newNum: 10
console.log("num:", num);       //  num: 9

//Question no 6 //
var num = 5; 
var originalValue = num++; // originalValue gets 5, then num becomes 6

console.log("originalValue:", originalValue); // Originalvalue : 5
console.log("num:", num); // num: 6

//Question no 7 //

var number = 10;

number++;

alert("The new value is: " + number);