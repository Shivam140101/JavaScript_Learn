/**
 * Recursion and stack
 * 
 * The execution context and stack
 */

// Recursion

// function test() {
//     test()
// }

// 1 to 10

// let sum = 0;

// for (let index = 1; index <= 11; index++) {
//     sum += index
// }

// console.log(sum)

// sum of 1 to 10

// function sum(value) {
//     let s = 0;

//     if(value > 0) {
//         s = value + sum(value - 1)
//     }

//     return s
// }

// let result = sum(10);

// console.log(result);

// 10
//  s = 10 + sum(9)

// 9
//  s = 10 + 9 + sum(8)

// 8
//  s = 10 + 9 +  8 + sum(7)

// 7
//  s = 10 + 9 +  8 + 7 + sum(6)

// 6
//  s = 10 + 9 +  8 + 7 +  6 + sum(5)

// 5
//  s = 10 + 9 +  8 + 7 +  6 +  5 + sum(4)

// 4
//  s = 10 + 9 +  8 + 7 +  6 +  5 + 4 + sum(3)

// 3
//  s = 10 + 9 +  8 + 7 +  6 +  5 + 4 + 3 + sum(2)

// 2
//  s = 10 + 9 +  8 + 7 +  6 +  5 + 4 + 3 +  2 + sum(1)


// 1
//  s = 10 + 9 +  8 + 7 +  6 +  5 + 4 + 3 +  2 + 1 + sum(0)

// 0
//  s = 10 + 9 +  8 + 7 +  6 +  5 + 4 + 3 +  2 + 1 + 0

// function func1() {
//     func2();
//     console.log("func1")
// }

// function func2() {
//     func3();
//     console.log("func2");
// }

// function func3() {
//     console.log("func3");
// }

// func1()

// console.log(window); // window object

// console.log(this); // window object

// console.log(a); // undefined

// test(); // testing

// var a = 10;

// function test() {
//     console.log("testing");
// }

// console.log(a);

// let a = 10;

// test();

// var test = () =>  {
//     console.log("testing");
// }


/**
 * Rest parameters and spread syntax
 * 
 * Rest parameters ...
 * Spread ...
 * 
 * Copy an array/object via spread operator
 */

// rest parameters

// function sum(...nums) {

//     let sum = 0

//     for (const value of nums) {
//         sum += value
//     }

//     console.log(sum);
// }

// sum(10,25,90);

// spead operator

// array
// let array = [10, 20, 30, 40];
// 
// let array1 = [...array, 50];
// 
// console.log(array1);

// object 
// let object = {
//     firstName : "deepak"
// }

// structureClone

// let object1 = structuredClone(object)
 
// console.log(object == object1);

// rest operator

// let {...object1} = object
// 
// console.log(object === object1);

// spread operator

// let object1 = {...object}
// 
// console.log(object === object1);

/**
 * Variable scope 
 *  
 * 
 * Nested functions
 * 
 * Lexical Environment
 * 
 */

// function testing() {
//     let a = 10;

//     function t(){
//         console.log(a);
//     }

//     t();
// }

// testing();

/**
 * 
 * The old "var"
 * “var” has no block scope
 * “var” tolerates redeclarations
 * “var” variables can be declared below their use
 * 
 * IIFE
 */

// var fullName = "Jhon Doe"

// function testing(a, b,c) {
//     var fullName = "deepak singh gusain"
// }

// testing()

// console.log(fullName);

// let fullName = "deepak singh gusain"
// {
//     let fullName = "Jhon Doe"
// }
// console.log(fullName);

// IIFE
// (function(data) {
//     console.log("testing" +  data);
// })(10);
   

/**
 * The "new Function" syntax
 * 
 * Closure
 */

//  function testing() {
//      let a = 10;
//      let b = 20;
//  
//      return function() {
//         // console.log(a + b);
//  
//          return a+b;
//      }
//  }
//  
//  let t = testing();
//  
//  console.log(t());

/**
 * 
 * Scheduling: setTimeout and setInterval
 * 
 * setTimeout
 * Canceling with clearTimeout
 * 
 * setInterval
 * 
 * Nested setTimeout
 */

// let counter = 0

// let interval = setInterval(()=> {
//     counter++;
//     console.log(counter);
// }, 1000)

// let timeout = setTimeout(()=> {
//     clearInterval(inter  val)
//     console.log("after 5 seconds");
// }, 5000)

// clearTimeout(timeout)

// setTimeout(() => {
//     console.log("testing");

//     setTimeout(() => {
//         console.log("testing 2");
//     }, 5000)
// }, 5000)

/**
 * Decorators and forwarding, call/apply
 * 
 * Using “func.call” for the context
 * 
 * func.apply
 */

// let emp = {
//     firstName: "deepak",
//     lastName: "singh"
// }

// let object = {
//     getDetails: function(age, email) {
//         return this.firstName + "  " + this.lastName +  " " + age + " " + email
//     }
// }

// // call
// console.log(object.getDetails.call(emp, 10, 'deepak@gmail.com'))

// // apply
// console.log(object.getDetails.apply(emp,[10, 'deepak@gmail.com']))

/**
 * 
 * Function binding
 * Losing “this”
 * 
 * Solution 1: a wrapper
 * Solution 2: bind
 */