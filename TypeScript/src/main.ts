// const myName = "your name";

// const hello = (userName: string): string => `hello, ${userName}`;

// console.log(hello);

// class Student {
//     protected studentGrade: number;
//     studentId: number;
//     public constructor(grade: number, id: number) {
//       this.studentGrade = grade;
//       this.studentId = id;
//     }
//     id(){
//       return this.studentId;
//     }
//   }

//   class Graduate extends Student {
//     studentMajor: string; // public by default
//     public constructor(grade: number, id: number, major: string ){
//         super(grade, id);
//         this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
//         this.studentGrade = grade; // Accessable because parent is protected
//         this.studentMajor = major;
//     }
//   }

//   const myStudent = new Graduate(3, 1234, 'computer science');

//   console.log(myStudent.id()); //  prints 1234
//   myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
//   console.log(myStudent.id()); // prints 1235

// NOTE: This code has not been converted to TypeScript yet

// const arrays = require('./utilities/arrays.js');
// const numbers = require('./utilities/numbers.js');
// const strings = require('./utilities/strings.js');

// const numArr = [3, 4, 5, 6];
// const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// const arrSum = arrays.addArr(numArr);
// const mixArr = arrays.concatArr(numArr, wordArr);
// const myNum = '15' % 2;

// // results of function calls
// console.log(arrays.cut3(mixArr));
// console.log(numbers.sum(arrSum, myNum));
// console.log(strings.capitalize('the quick brown fox'));
// console.log(numbers.multiply('5', 8));
// console.log(arrays.lgNum(mixArr));
import arrays from './utilties/arrays';
import numbers from './utilties/numbers';
import string from './utilties/string';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');

// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(string.capitalize('the quick brown fox'));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));