function firstEvenNumber(arr) {
  return arr.find(num => num % 2 === 0);
}

// Example:
const numbers = [5, 7, 9, 12, 15, 18];
console.log(firstEvenNumber(numbers)); 

// use of filter function:-

function EvenNumber(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Example:
const number = [5, 7, 9, 12, 15, 18];
console.log(EvenNumber(number)); 


// find prime no.:

function isPrime(num) {
  if (num < 2) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function firstPrimeNumber(arr) {
  return arr.filter(isPrime);
}
const num = [4, 6, 8, 9, 11, 13, 17];
console.log(firstPrimeNumber(num)); 
