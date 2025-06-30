/* function kl(a,b){
    console.log("done");
    //return a+b;
    //return a-b;
    return a*b;
   
}
let a=kl(14,25);
let b=kl(56,45);
let c=kl(90,45);
console.log("The value of add two numbers:",a);
console.log("substraction of two number is:",b);
console.log("substraction of two number is:",c);

//some pratice question based on Loops and Functions
//using normal For Loop
let marks={
    harry:98,rohan:70,akash:7,roshan:45,yamaguchhi:56
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("The marks of student"+Object.keys(marks)[i]+"are:"+marks[Object.keys(marks)[i]]);
}

//Using For-in Loop
let data={
    kanha:67,Gudu:45,Rohan:23,Roshan:89,Sila:48
}
for(let a in data){
    console.log("The above student of mark "+a+" is:"+data[a]);
} */

//create a function and to calculate mean of 5 numbers

/*function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
let f=mean(14,15,20,23,47);
console.log("The mean value of above 5 numbers are:",f);
let h=mean(12.5,24.6,85.36,45,36.02);
console.log("The mean value of above 5 numbers are:",h);
*/


//Arrow Function prefer
const Avg=(k,l,m,n)=>{
    return(k+l+m+n)/5
}
let y=Avg(23,12.3,25.8,14.69);
console.log("The Average value of 4 number is:",y);

//In Other way arrow function

const mul=(k,l,m,n)=>k*l*m*n;
let t=mul(10,12,15,25);
console.log("multiplication of all 4 numbers is:",t);