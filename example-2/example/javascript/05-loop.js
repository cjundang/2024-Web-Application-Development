
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
  }
  
  let count = 0;
  
  while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
  }
   
  const items = ["Apple", "Banana", "Cherry"];
  
  for (const item of items) {
    console.log(item);
  }
   
  const numbers = [1, 2, 3];
  
  numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
  });
  
  