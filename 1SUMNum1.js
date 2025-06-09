let num=1234;
let r,sum=0;
while(num>0){
    r=num%10;
    sum+=r;
    num=Math.floor(num/=10);
}
console.log("sum is:",sum);


