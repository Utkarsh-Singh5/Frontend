//1) variable redeclariation ka problem tha....

/*var score = 0;
 if(true)
 {
    var score =10;
    console.log("inside if",score);
 }

 console.log("outer if",score);

 //2) redeclariation is allowed...
 var name ="utk";
 var name ="stk";
 console.log(name);



function isodd(num)
{
    return num%2 !==0;
}
console .log(isodd(10));

//3) implicit return:-
const isodds=(nums)=> nums%2===1;
console.log(isodds(10));

var great=(name)=>"Hello"+" "+ name+" !";
console.log(great("utk"));

let add=(n1,n2)=> n1+n2;
console.log(add(9,8));
*/


const user="utk";
const point=120;
const message=`hey ${user}, you have ${point} points!`;
console.log(message);


const person={
    firstName:"utk",
    lastName:"Singh",
    age:20,
    introduce:function(){
        console.log(`hi my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old.`);
    },
};
//console.log(person.firstName);
const hisage=21;// bahar wali key ke liye bracket[""] ka use karte hai...
console.log(person["hisage"]);
console.log(person["firstName"]);
console.log(person["lastName"]);
person.introduce();

