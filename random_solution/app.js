console.log('App JS Run Finally');

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// // (123) 456-7890

// function formatPhoneNumber(numbers) {

//     numbers.splice(0, 0, "(");
//     numbers.splice(4, 0, ")");
//     numbers.splice(5, 0, " ");
//     numbers.splice(9, 0, "-");

//     let str = numbers.join("");

//     return str;


// }

// console.log(formatPhoneNumber(numbers));


// SOCIETY NAME

// const friends = ['Rakib', 'Taskin', 'shomrat', 'Prionty']

// console.log(societyName(['zim', 'zoy', 'shithil', 'akib'])); //zzsa
// console.log(societyName(['Rakib', 'Taskin', 'shomrat', 'Prionty'])); //RTsP
// console.log(societyName(['Ratul', 'Rakib', 'Ritu', 'Taj'])); //RRRT

// function societyName(friends) {

//     let resultStr = '';

//     for (let i = 0; i < friends.length; i++) {

//         let element = friends[i][0];

//         resultStr += element;
//     }

//     return resultStr;
// }

// console.log(societyName(friends))


// const numberIsPrime = (num) => {

//     if (num <= 1) {
//         return false;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false
//         }
//     }

//     return true;
// }

// console.log(numberIsPrime(11));


// function isPowerOfTwo(n) {

//     if (n <= 0) return false

//     while (n % 2 === 0) {
//         n = n / 2;
//     }

//     return n === 1;
// }

// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(18));


// Recursion

// const recursiveFibonacci = (n) => {

//     if (n <= 0) return 0;
//     if (n === 1) return 1;

//     // 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 

//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)

// }

// console.log(recursiveFibonacci(5));

// console.log(recursiveFibonacci(10));

// console.log(recursiveFibonacci(15));


// Factorial

// const findFact = (n) => {

//     if (n == 0) {
//         return 1;
//     }

//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }

//     return fact;


// }

// 1 * 1 = 1;
// 2 * 1 = 2;
// 3 * 2 = 6;
// 4 * 6 = 24


const findFact = (n) => {

    if (n == 0) {
        return 1;
    }

    return n * findFact(n - 1);

}

console.log(findFact(5));


// const findAllPrime = (num) => {

//     let primes = [];

//     for (let i = 2; i <= num; i++) {

//         if (num % i !== 0 && i !== num) {
//             primes.push(i);
//         }
//     }

//     return primes;

// }

// console.log(findAllPrime(10));

// Normal Find All Primes

// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }

//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }

let findPrimesFaster = (target) => {

    // check to see if there can be any primes less than target
    if (target && Number.isInteger(target) && target > 2) {
        // mise en place
        let record = []
        let primes = [2]
        let max = Math.sqrt(target)

        // save a truthy value to record for each number between 2 & target
        for (let number = 0; number < target; number++) {
            record.push(1)
        }

        // sieve time!
        for (let prime = 3; prime <= max; prime += 2) {
            if (record[prime]) {
                for (let multiple = prime * prime; multiple < target; multiple += prime * prime) {
                    record[multiple] = 0
                }
            }
        }

        // save sieved primes to primes array
        for (let sievedNumber = 3; sievedNumber < target; sievedNumber += 2) {
            if (record[sievedNumber]) {
                primes.push(sievedNumber)
            }
        }
        // return the array of primes
        return primes
    }
    // if there can be no primes less than target, return error & prompt for correct input
    return "Please enter an integer greater than two"
}

console.log(findPrimesFaster(10));

// cartesian products of two array

const makeCartesianProduct = (arrA, arrB) => {

    const result = [];

    for (let i = 0; i < arrA.length; i++) {

        for (let j = 0; j < arrB.length; j++) {

            result.push([arrA[i], arrB[j]])

        }
    }

    return result;


}

console.log(makeCartesianProduct([1, 2, 3], ["x", "y", "z"]))