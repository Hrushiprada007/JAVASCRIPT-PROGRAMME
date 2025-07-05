 let a1=[23,24,25];
let b=a1.map((value)=>{
    //return value+1;
    return value*5;
})
//console.log(b);

//in this map function you can take index, value,array

let c=[78,45,23,25,27];
let d1=c.map((item,index,array)=>{
    console.log(item,index,array);
    return item*item;
   
})
//console.log(d1); 

//Filter Method
 let arr1=[5,6,7,89,90,74,75,34,23,45,67,43,21,70,41,48];
let arr21=arr1.filter((number)=>{
    //return number>50;
    return number>20 && number<50;
})
//console.log(arr21); 

const a=[1,2,3,4,5];
let d=a.filter((item)=>{
    return item>=0 && item <=3;
});
//console.log(d);

//Reduce method
let t1=[4,5,6];
let t2=t1.reduce((h1,h2)=>{
    return h1+h2;
});
console.log(t2);