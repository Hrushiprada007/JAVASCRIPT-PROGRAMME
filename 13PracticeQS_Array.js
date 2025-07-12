/* //chapter 5 Practice set
let arr=[6,7,8,9];
let sum=0;
let i=1;
for(let i of arr){
    sum=sum+i;
}
//console.log(sum);

//Filter from a number in array which is divisible by 10

let arr2=[10,20,30,45,46,47,50,43,21];
let arr3=arr2.filter((value)=>{
    return (value%10)==0;
});
//console.log(arr3);

//Create an array of square of given number

let arr4=[2,3,4,6,7,8,9];
let arr5=arr4.map((value)=>{
    return value*value;
})
console.log(arr5);

//use Reduce() to find factorial a number

let arr6=[1,2,3,4,5,6,7,8,9,10,11];
let arr7=arr6.reduce((h1,h2)=>{
    return h1*h2;
})
console.log(arr7); */

let n=prompt("Enter a number:");
let arr10=[];
for(let i=0;i<n;i++){
    arr10[i-1]=i;
}
console.log(arr10);
let arr11=arr10.reduce((r1,current)=>{
    return r1+current;
},0);
console.log(arr11);