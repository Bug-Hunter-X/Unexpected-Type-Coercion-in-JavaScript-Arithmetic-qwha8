function myFunction(a, b) {
  return a + b;
}

console.log(myFunction(5, "5")); // Output: "55"

//This will cause unexpected string concatenation instead of addition because one operand is a string.