"use strict";
// const myName = "your name";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var arrays_1 = __importDefault(require("./utilties/arrays"));
var numbers_1 = __importDefault(require("./utilties/numbers"));
var string_1 = __importDefault(require("./utilties/string"));
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = arrays_1.default.addArr(numArr);
var mixArr = arrays_1.default.concatArr(numArr, wordArr);
var myNum = '15' % 2;
var five = parseInt('5');
// results of function calls
console.log(arrays_1.default.cut3(mixArr));
console.log(numbers_1.default.sum(arrSum, myNum));
console.log(string_1.default.capitalize('the quick brown fox'));
console.log(numbers_1.default.multiply(five, 8));
console.log(arrays_1.default.lgNum(mixArr));
