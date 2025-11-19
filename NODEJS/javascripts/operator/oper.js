// ternary operator:-

// let age=10;

// let result= age >= 18?"right to vote":"no right to vote";


//  //Alert:-
//  alert("hello");// one-time pop-up deta hai...

//  //prompt:-
//   let n=prompt("Enter a number:");
//   if(n%5==0)
//   {
//     console.log(n,"number is multiple of 5");
//   }
//   else
//   {
//     console.log(n,"number is not a multiple of 5");
//   }


// grades:-JS Program....

let n= prompt("Enter the number:");
let Grade;
if(n>=80&&n<=100)
{
    Grade="A";
}
else if(n>=70&&n<=79)
{
   Grade="B"; 
}
else if(n>=60&&n<=69)
{
   Grade="C"; 
}
else if(n>=50&&n<=59)
{
   Grade="D"; 
}
else
{
    Grade="F"; 
}

console.log("Grade is=",Grade);