## **1. JavaScript Basics**

### **1.1 Variables and Constants**
- **Description**: Learn how to declare variables using `var`, `let`, and `const`, and understand the differences between their scopes (`function`, `block`, and `global`) and behavior during execution (hoisting). `const` is especially important in React for immutable values.
- **Use in React**: Managing state and props often involves constants and block-scoped variables.

**Example:**
```javascript
let userName = "John"; // Block-scoped, can be reassigned
const age = 30; // Block-scoped, cannot be reassigned
var city = "New York"; // Function-scoped, can be reassigned
```

---

### **1.2 Data Types**
- **Description**: Understanding primitive data types (e.g., strings, numbers, booleans) and reference types (e.g., objects, arrays) is essential for managing and manipulating data.
- **Use in React**: React components frequently handle objects and arrays for data representation (e.g., arrays of items in lists).

**Example:**
```javascript
const user = { id: 1, name: "John" }; // Object
const skills = ["JavaScript", "React"]; // Array
console.log(typeof user, typeof skills); // object, object
```

---

### **1.3 Operators**
- **Description**: Operators such as arithmetic (`+`, `-`, `*`, `/`), comparison (`===`, `!==`), logical (`&&`, `||`), and the ternary operator (`condition ? true : false`) are critical for decision-making and computations.
- **Use in React**: The ternary operator is often used in JSX for conditional rendering.

**Example:**
```javascript
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome!" : "Please log in."); // Ternary operator
```

---

## **2. Control Structures**

### **2.1 Conditionals**
- **Description**: Learn how to implement logic with `if`, `else if`, and `else` statements, as well as handle multiple cases using `switch`. 
- **Use in React**: Conditionally render components or execute different logic based on application state.

**Example:**
```javascript
const userRole = "admin";
if (userRole === "admin") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

---

### **2.2 Loops**
- **Description**: Iteration over collections is fundamental. Learn `for`, `while`, and modern loops like `for...of` and `Array.prototype.forEach`.
- **Use in React**: Loops are used to render lists dynamically (e.g., mapping over an array of items).

**Example:**
```javascript
const items = ["Apple", "Banana", "Cherry"];
items.forEach((item) => console.log(item)); // Array iteration
```

---

## **3. Functions**

### **3.1 Function Basics**
- **Description**: Functions are the building blocks of JavaScript. Understand the difference between function declarations, expressions, and arrow functions.
- **Use in React**: React components themselves are functions, and arrow functions are heavily used for concise syntax.

**Example:**
```javascript
const greet = (name) => `Hello, ${name}!`; // Arrow function
console.log(greet("React"));
```

---

### **3.2 Default Parameters**
- **Description**: Default parameters allow you to set default values for function arguments, making your code more robust.
- **Use in React**: Useful in utility functions for handling props with default values.

**Example:**
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"
```

---

### **3.3 Callback Functions**
- **Description**: Functions that are passed as arguments to other functions are called callbacks. This is a foundation for handling events and asynchronous operations.
- **Use in React**: Handling user interactions (e.g., click events) and asynchronous tasks like API calls.

**Example:**
```javascript
function process(callback) {
  callback("React");
}
process((framework) => console.log(`${framework} is awesome!`));
```

---

## **4. Objects and Arrays**

### **4.1 Object Basics**
- **Description**: Learn to create and manipulate objects, access properties, and use destructuring to simplify code.
- **Use in React**: Props and state are often represented as objects.

**Example:**
```javascript
const user = { name: "John", age: 30 };
const { name, age } = user; // Destructuring
console.log(name, age); // John, 30
```

---

### **4.2 Arrays**
- **Description**: Arrays store multiple values. Learn methods like `map`, `filter`, and `reduce` for efficient data manipulation.
- **Use in React**: Commonly used to render lists dynamically.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2); // Transform array
console.log(doubled); // [2, 4, 6, 8]
```

---

## **5. ES6+ Features**

### **5.1 Template Literals**
- **Description**: Simplifies string concatenation using backticks (`) and placeholders (`${expression}`).
- **Use in React**: Creating dynamic content in JSX.

**Example:**
```javascript
const name = "React";
console.log(`Welcome to ${name}!`);
```

---

### **5.2 Destructuring**
- **Description**: Extract values from arrays or objects into distinct variables.
- **Use in React**: Simplifies props and state management.

**Example:**
```javascript
const [first, second] = ["React", "JavaScript"];
console.log(first, second); // React, JavaScript
```

---

### **5.3 Spread and Rest Operators**
- **Description**: The spread operator (`...`) expands arrays or objects, while the rest operator (`...args`) collects items into an array.
- **Use in React**: Managing props and state updates.

**Example:**
```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Spread operator
console.log(newArr);

function sum(...args) {
  return args.reduce((a, b) => a + b, 0); // Rest operator
}
console.log(sum(1, 2, 3)); // 6
```

---

## **6. Asynchronous JavaScript**

### **6.1 Promises**
- **Description**: Promises handle asynchronous operations. Learn `.then` and `.catch` for chaining.
- **Use in React**: Fetching data from APIs.

**Example:**
```javascript
const fetchData = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 1000));
fetchData().then((data) => console.log(data));
```

---

### **6.2 Async/Await**
- **Description**: A modern, cleaner way to handle asynchronous operations.
- **Use in React**: Writing asynchronous functions like API calls in components.

**Example:**
```javascript
async function loadData() {
  const data = await fetchData();
  console.log(data);
}
loadData();
```

---

## **7. DOM Manipulation**

### **7.1 Basics**
- **Description**: Understand how to select and modify HTML elements dynamically using JavaScript.
- **Use in React**: React automates DOM manipulation, but understanding the DOM helps appreciate React's benefits.

**Example:**
```javascript
document.querySelector("body").style.backgroundColor = "lightblue";
```

---

### **7.2 Event Listeners**
- **Description**: Learn how to add interactivity by handling events such as clicks, keypresses, and form submissions.
- **Use in React**: Event handlers are a core part of React components.

**Example:**
```javascript
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked!");
});
```

---

## **8. Modular JavaScript**

### **8.1 Import/Export**
- **Description**: Learn how to modularize your code by exporting and importing functions or variables between files.
- **Use in React**: React applications use ES6 modules extensively.

**Example:**
```javascript
// utils.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./utils";
console.log(add(2, 3)); // 5
```
 