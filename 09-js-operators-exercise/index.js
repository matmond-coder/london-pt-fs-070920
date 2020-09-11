/**
 * Exercise #1
 *
 * Create a function with name {sum} that will take
 * 2 numbers as parameters and return a sum
 *
 * NOTE: additionally you can have console.log() to log the result
 */
let num1 = 1;
let num2 = 2;

const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(num1, num2));
/**
 * Exercise #2
 *
 * Create a function with name {subtract} that will take
 * minuend as a first parameter, subtrahend as a second
 * and should return a difference
 *
 * NOTE: additionally you can have console.log() to log the result
 */
let minuend = 10;
let subtrahend = 3;

const subtract = (minuend, subtrahend) => {
  return minuend - subtrahend;
};

console.log(subtract(minuend, subtrahend));
/**
 * Exercise #3
 *
 * Create a function with name {multiply} that will take
 * 2 factors, and return a product
 *
 * NOTE: additionally you can have console.log() to log the result
 */
let factors1 = 5;
let factors2 = 4;

const multiply = (factors1, factors2) => {
  return factors1 * factors2;
};

console.log(multiply(factors1, factors2));
/**
 * Exercise #4
 *
 * Create a function with name {divide} that will take
 * dividend as a first parameter, divisor as a second parameter
 * and return a quotient
 *
 * NOTE: additionally you can have console.log() to log the result
 */
let dividend = 49;
let divisor = 7;

const divide = (dividend, divisor) => {
  return dividend / divisor;
};

console.log(divide(dividend, divisor));
/**
 * Exercise #5
 *
 * Create a function with name {getRemainder} that will take
 * dividend as a first parameter, divisor as a second parameter
 * and return a remainder
 *
 * NOTE: additionally you can have console.log() to log the result
 */
dividend = 18;
divisor = 8;

const getRemainder = (dividend, divisor) => {
  return dividend % divisor;
};

console.log(getRemainder(dividend, divisor));
/**
 * Exercise #6
 *
 * Create a function with name {increment} that will take
 * a number, increment by 1 and return a result
 *
 * NOTE: additionally you can have console.log() to log the result
 */
let number = 13;

const increment = (number) => {
  return (number += 1);
};

console.log(increment(number));
/**
 * Exercise #7
 *
 * Create a function with name {decrement} that will take
 * a number, decrement by 1 and return a result
 *
 * NOTE: additionally you can have console.log() to log the result
 */
let figure = 13;

const decrement = (figure) => {
  return (figure -= 1);
};

console.log(decrement(figure));
