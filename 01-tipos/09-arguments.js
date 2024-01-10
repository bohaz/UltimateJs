function sum(a, b) { // a inside the function is a parameter
  console.log(arguments); // arguments is an array-like object
  return a + b;
}

let result = sum(5, 6); // 5 outside the function is an argument
console.log(result);
console.log(typeof sum); // function