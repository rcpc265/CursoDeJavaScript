"use strict"
let number = 10;
let factorial = 1;

while (number > 1) {
  factorial *= number;
  number--;
}

console.log(factorial);