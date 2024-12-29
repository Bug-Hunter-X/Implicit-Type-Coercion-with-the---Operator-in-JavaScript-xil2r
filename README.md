# Implicit Type Coercion with the + Operator in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript related to implicit type coercion with the addition operator (+). When adding a number and a string, JavaScript will implicitly convert the number to a string and concatenate them, rather than performing arithmetic addition.

## The Bug
The `bug.js` file showcases the unexpected behavior. The `myFunction` adds two inputs, but fails to handle non-numeric inputs, causing a type-coercion issue. When you run the function, it concatenates the string "5" to the number 5 instead of adding them.

## The Solution
The `bugSolution.js` provides a corrected version of `myFunction`. It explicitly checks the types of the inputs using `typeof` to ensure both are numbers before performing addition.  This prevents unexpected concatenation and provides an error message for invalid inputs.