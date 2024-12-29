function myFunction(a, b) {
  return a + b;
}

console.log(myFunction(5, "5")); //Output: 55

function myFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input. Both parameters must be numbers.";
  }
  return a + b;
}

console.log(myFunction(5, "5")); //Output: Invalid input. Both parameters must be numbers.