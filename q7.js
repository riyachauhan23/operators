const input=require("readline-sync")
let n=input.questionInt("enter the number")
a=[];
let i= 0;
let j=0;

while (i<n) {
    a[i]=[];
    j=0;
    while (j<n) {
        a[i][j]=input.questionInt("enter the value")
        j++;
    }
    i++;
}
b=[]
i= 0;
j=0;

while (i<n) {
    b[i]=[];
    j=0;
    while (j<n) {
        b[i][j]=input.questionInt("enter the value")
        j++;
    }
    i++;
}console.log("a:",a," \nb:",b);
