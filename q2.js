/*Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.
*/


const input = require("readline-sync")
let a = input.questionInt("enter the number")
let b = input.questionInt("enter the number")
let c,d;
c=Math.floor(a/b);
d=a%b;

console.log(c,d);