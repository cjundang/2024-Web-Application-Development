
//Function Declaration:
function greet_1(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet_1("React")); // Output: Hello, React!
  
  //Function Expression:
  const greet_2 = function (name) {
    return `Hello, ${name}!`;
  };
  console.log(greet_2("React")); // Output: Hello, React!
  
  //Arrow Function:
  const greet_3 = (name) => `Hello, ${name}!`;
  console.log(greet_3("React")); // Output: Hello, React!
  
  
function greet_4(name = "Guest") {
    return `Hello, ${name}!`;
}
  console.log(greet_4()); // Output: Hello, Guest!
  console.log(greet_4("React")); // Output: Hello, React!
  