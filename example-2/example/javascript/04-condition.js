const userRole = "admin";

if (userRole === "admin") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Output: Access granted


const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log(`Your grade is ${grade}`);

// Output: Your grade is B

const day = "Monday";
let isWeekend;

switch (day) {
  case "Saturday":
  case "Sunday":
    isWeekend = true;
    break;
  default:
    isWeekend = false;
}

console.log(`Is it the weekend? ${isWeekend}`);

// Output: Is it the weekend? false
