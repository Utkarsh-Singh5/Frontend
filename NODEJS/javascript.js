
/*console.log(a)
//var a= 20;  // function declaration and var ka case me 'undefined' ho jata hai...
console.log(20)
console.log(21)
console.log(23)
var a  // sabse upar chala jaega....
*/

//temporant red-zone:



//let a=20 (upar wali lino ke liye ye lagbhag exist nhii karta hai)


/*let a=20
let b="20"
console.log(a==b)  // type coerhsation
console.log(a===b)
*/


// for of loop:-
let arr=[10,20,30];
// class me length naam ki property hai jsko system call kar leta hai aur wo arr me pehle se hii hota hai...
for(let i of arr)  // direct value access karega
{
    console.log(i);
}


let n=5;
for(let i=0;i<n;i++)
{
    let str="";
    for(let j=n;j>i;j--)
    {
        str=str+"* ";
    }
    console.log(str);
}