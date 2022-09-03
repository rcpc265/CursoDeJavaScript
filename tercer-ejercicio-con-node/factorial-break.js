"use strict"
let number = 10;
let factorial = 1;
while (true) {
  factorial *= number
  number--

  if (number <= 0) {
    break
  }
}
console.log(factorial)