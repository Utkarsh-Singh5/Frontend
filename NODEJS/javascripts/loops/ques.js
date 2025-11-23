// 1. print all even no. from 0 to 100:-

// for(let i=0;i<=100;i++)
// {
//     if(i%2===0)
//     {
//         console.log("even no.= ",i);
//     }
// }

//2. game question

let game_No =25;

let userNumber=prompt("Enter the number= ");

while(userNumber!=game_No)// prompt ke andar jo number hai wo string ke form me aa raha hai. isiliye(!==) nahi karenge...
{
    
  userNumber=prompt("your guess is wrong Enter the number again= ");


}
console.log("Congratulation you guess the correct number");