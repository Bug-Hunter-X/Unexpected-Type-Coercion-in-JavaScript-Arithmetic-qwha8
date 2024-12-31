function myFunction(a, b) {
  // Explicit type conversion using parseInt()
  return parseInt(a) + parseInt(b);
}

console.log(myFunction(5, "5")); // Output: 10

//Alternative solution using parseFloat()
function myFunctionFloat(a,b){
  return parseFloat(a) + parseFloat(b);
}
console.log(myFunctionFloat(5, "5.5")); // Output: 10.5