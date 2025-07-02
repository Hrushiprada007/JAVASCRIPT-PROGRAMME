/* let a=[1,2,3.4,5];
console.log(a);
console.log(a[3]);
a[3]=56;     //changing to the new value in an array
console.log(a.length);
console.log(a);
a[5]=90;
a[4]=89;
console.log(a);
console.log(a.length);
console.log(typeof(a));

let b=[45,46,47,34,23]
for(let i=0;i<b.length;i++){
    console.log(b[i]);
}

let n=[1,2,3,4,5];
console.log(n.toString());
console.log(n.join("-+"));
let r=n.pop();
console.log(r);

let m=[1,5,7,9,12];
var m2=m.push(78);
console.log(m,m2);
console.log(m.shift());
let r1=m.shift();
console.log(r1,m);
let r2=m.unshift(56);
console.log(r2,m);
let m4=[7,8,9,10];
var m2=delete(m4[3]);
console.log(m4);
 */

/* var x=10;
{
    var x=20;
    console.log(x);
}
console.log(x);

console.log("2">"10");
console.log("2">10);
console.log(2>10);
let m=[9,4,5,6,2,1,3];
let m6=delete(m[5]);
console.log(m);
console.log(m.length);

//concat()
let a1=[1,2,3,4]
let a2=[45,46,47,48]
let a3=[12,13,14,24]
let new_array=a1.concat(a3,a2);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(new_array);

//Sort()method
let newC=(a,b)=>{
    return a-b
}
let num1=[13,1,7,4,45,89,34,23,11,14,9]
let n=num1.sort(newC);
console.log(n);

let newD=(a,b)=>{
    return b-a;
}
let num2=[13,1,7,4,45,89,34,23,11,14,9]
console.log(num2.reverse());  //Reverse fun() reversed the original array.
let n1=num2.sort(newD);
console.log(n1);
 */

//Splice and Slice Operator
/* let num1=[12,13,14,15,16,17,18,19,20,21];
let n=num1.splice(1,4,89,56,45,79);
console.log(num1);
console.log(n); */

//slice Operator
let n5=[1,2,5,7,8];
var b=n5.slice(3);
console.log(b);
var b=n5.slice(1,3);
console.log(b);

let n1=[4,5,6,7,8];
let n2=[9,10,11,12];
n1.forEach((k)=>{
    console.log(k*k);
})
n2.forEach((l)=>{
    console.log(l*l);
})