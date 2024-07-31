/*Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.
*/


const input =require("readline-sync")
let a = input.questionInt("enter the number")
let b = input.questionInt("enter the number")
let c,d,e,f,g,h;
c=a+b;
d=a-b;
e=a*b;
f=a/b;
g=Math.floor(a/b)
h=a%b;

console.log(c,d,e,f,g,h);