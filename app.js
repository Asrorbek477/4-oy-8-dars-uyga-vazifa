// function mean(a, b) {
//   let middlearithmetic = (a + b) / 2;
//   let geometric = Math.sqrt(a * b);
//   console.log(middlearithmetic, geometric);
// }
// mean(2, 2);

//function1
// function isPowerN(k, n) {
//     if(n ** 2 == k) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// let daraja = isPowerN(24,5)
// console.log(daraja)
// function sign(n) {
//     if (n > 0) {
//       return 1;
//     }
//     if (n < 0) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }
//   console.log(sign(10));

//FUNCTION

/*
Function sortABC (a,b,c) {   
let min =Math.min(a,b,c)
let max=Math.max(a,b,c)
If(a!=max && a!=min){
console.log(min,a,max)
}else if(b!=min && b!=max){
console.log(min,b,max)
}else if(c!=min && c!=max){
console.log(min,c,max)
}
}
sortABC(10,5,8)

console.log(getRandomNumber(1, 100));
*/

/*
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // Выведет 120 (5! = 5 * 4 * 3 * 2 * 1)
*/

/*
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(17)); // Выведет true
console.log(isPrime(15)); // Выведет false
*/

/*
function mergeArrays(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // Выведет [1, 2, 3, 4, 5]
*/

/*
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // Выведет true
console.log(isLeapYear(2023)); // Выведет false

*/

//ARRAY

/*
const nums = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(nums);
*/

/*
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const maxNum = Math.max(...nums);
console.log(maxNum);
*/

/*
const nums = [1, 2, 3, 4, 5];
const squaredNums = nums.map(num => num * num);
console.log(squaredNums);
*/

/*
const nums = [1, 2, 3, 4, 5];
const reversedNums = nums.reverse();
console.log(reversedNums);
*/

/*
const nums = [1, 2, 3, 2, 4, 3, 5, 5, 6];
const uniqueNums = Array.from(new Set(nums));
console.log(uniqueNums);
*/
//FUNCTION

/*
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 100));
*/

/*
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // Выведет 120 (5! = 5 * 4 * 3 * 2 * 1)
*/

/*
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(17)); // Выведет true
console.log(isPrime(15)); // Выведет false
*/

/*
function mergeArrays(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // Выведет [1, 2, 3, 4, 5]
*/

/*
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // Выведет true
console.log(isLeapYear(2023)); // Выведет false

*/

//ARRAY

/*
const nums = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(nums);
*/

/*
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const maxNum = Math.max(...nums);
console.log(maxNum);
*/

/*
const nums = [1, 2, 3, 4, 5];
const squaredNums = nums.map(num => num * num);
console.log(squaredNums);
*/

/*
const nums = [1, 2, 3, 4, 5];
const reversedNums = nums.reverse();
console.log(reversedNums);
*/

/*
const nums = [1, 2, 3, 2, 4, 3, 5, 5, 6];
const uniqueNums = Array.from(new Set(nums));
console.log(uniqueNums);
*/
//FUNCTION

/*
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 100));
*/

/*
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // Выведет 120 (5! = 5 * 4 * 3 * 2 * 1)
*/

/*
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(17)); // Выведет true
console.log(isPrime(15)); // Выведет false
*/

/*
function mergeArrays(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // Выведет [1, 2, 3, 4, 5]
*/

/*
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // Выведет true
console.log(isLeapYear(2023)); // Выведет false

*/

//ARRAY

/*
const nums = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(nums);
*/

/*
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const maxNum = Math.max(...nums);
console.log(maxNum);
*/

/*
const nums = [1, 2, 3, 4, 5];
const squaredNums = nums.map(num => num * num);
console.log(squaredNums);
*/

/*
const nums = [1, 2, 3, 4, 5];
const reversedNums = nums.reverse();
console.log(reversedNums);
*/

/*
const nums = [1, 2, 3, 2, 4, 3, 5, 5, 6];
const uniqueNums = Array.from(new Set(nums));
console.log(uniqueNums);
*/
