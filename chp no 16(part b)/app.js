   //Chapter no 16 (array 3) // 

 // Question no 1 //

 var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();  
console.log(sizes); 

 // Question no 2 //

 var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes); 

// Question no 3 //
var arr = ["Second"];
arr.unshift("First");
alert(arr[0]);  

// Question no 4 //
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); 
console.log(sizes)

// Question no 5 //

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);  // from index 0 up to but not including 3
console.log(regSizes); 

// Question no 6 //
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "parrot", "hamster");  

console.log(pets); 

// Question no 7 //

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);  
console.log(pets); 

// Question no 8 //
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var newPets = pets.slice(3, 5); 
console.log(newPets); 


