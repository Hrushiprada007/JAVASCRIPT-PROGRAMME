var a="45";
//a=Number.parseInt(a);
console.log(typeof(a));
//conditional sentence

var a=24;
if(a>=18){
    console.log("you are eligible for vote");
}
else{
    console.log("you are not eligible for vote");
}

let mark=75;
if(mark>=90){
    console.log("grade A");
   
}
else if(mark>=80){
    console.log("grade B");
}
else if(mark>=75){
    console.log("Grade C");
}
else{
    console.log("grade D");
}

let day=7;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:console.log("Monday");break;
    case 3:console.log("Tuesday");break; 
    case 4:console.log("wednesday");break;
    case 5:console.log("Thursday");break;
    case 6:console.log("Friday");break;
    case 7:console.log("Saturday");break;
    default:
        console.log("Invalide day number yuu entered");
    
}

//Pratice set

let ageE=28;
if(ageE>=10 && ageE<=20){
    console.log("your age is inbetween 10 and 20");
}
else{
    console.log("Not in here");
}

let number=12;
if(number%2==0 && number%3==0){
    console.log("This number is divisible by 2 and 3");
}
else{
    console.log("Not divisible by 2 and 3");
}

let num=8;
if(num%2==0 || num%3==0){
    console.log("This number is divisible by 2 and 3");
}
else{
    console.log("Not divisible by 2 and 3");
}


//Using Ternary operator
let ageV=20;
let b=(ageV>=18)? "You can drive":"you can't drive"
console.log(b);


