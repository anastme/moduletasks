"use strict";

function calculateFactorial(number) {
  if (number < 0) {
    return 'Ошибка: факториал отрицательного числа не существует.';
  }
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(calculateFactorial(5)); 
