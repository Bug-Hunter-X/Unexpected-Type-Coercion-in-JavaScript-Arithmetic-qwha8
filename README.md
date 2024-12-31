# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common JavaScript bug related to type coercion during arithmetic operations.  JavaScript's loose typing can lead to unexpected results when mixing different data types.

## Bug Description

The `bug.js` file contains a function that adds two numbers. However, if one of the inputs is a string, JavaScript will perform string concatenation instead of numerical addition.  This can lead to incorrect results and unexpected behavior in your programs.

## Solution

The `bugSolution.js` file shows how to fix this issue by explicitly converting the inputs to numbers using `parseInt()` or `parseFloat()` before performing the addition.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (e.g., Node.js, a browser's console).
3. Observe the unexpected output.
4. Open `bugSolution.js` and observe the correct output.