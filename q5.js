/*Write a program to take two inputs from the user and swap them without using a temporary or third variable.
*/


const input=require("readline-sync")
let a = input.questionInt("enter the number")
let b = input.questionInt("enter the number")
a=a+b;
b=a-b;
a=a-b;

console.log(a,b);