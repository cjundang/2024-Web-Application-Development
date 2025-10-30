let userName = "John"; // Block-scoped, can be reassigned
userName = "Jane"; 
console.log(userName); // Output: Jane

const age = 30; // Block-scoped, cannot be reassigned
// age = 35; // Error: Assignment to constant variable

var city = "New York"; // Function-scoped, can be reassigned
city = "Los Angeles";
console.log(city); // Output: Los Angeles
