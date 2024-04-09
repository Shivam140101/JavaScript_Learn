/**
 * 
 * Objects
 * 
 * Literals and properties
 * Square brackets
 * Computed properties
 * Property value shorthand
 * Property names limitations
 * Property existence test, “in” operator
 * The "for..in" loop
 */

// let object = {
//     firstName : "deepak",
//     testing: function () {
//         console.log("testing called");
//     }
// }

// // .
// console.log(object.firstName);
// object.testing()

// // []
// console.log(object["firstName"]);
// object["testing"]()

// Computed properties
// let firstName = prompt("enter first name");

// let index = 0;

// let object = { // [firstName] : firstName,
//     index: index
// }

// console.log(object);
// let firstName =  prompt("enter first name");

// let firstName = "testing";

// let index = 0;

// let object = {
//     [firstName]: firstName,
//     index // index : index
// }

// console.log(object);

// Property names limitations
// let object = {
//     // +firstName: 'John',
//     $firstName: 'John',
//     _firstName: 'John',
//     // 12firstName: 'John',
//     let : 'let',
//     var : 'var',
//     const : 'const',
//     function : 'function',
//     break : 'break',
//     switch : 'switch',
//     if : 'if',
//     else : 'else',
//     elseif : 'elseif'
// }

// console.log(object);


// let array = [
//     {
//         name: 'foo',
//     },
//     {
//         age: 36
//     }
// ]

// Property existence test, “in” operator
// let object = {
//     name1: 'foo'
// };

// console.log("name" in object); // false

//  * The "for..in" loop
// let object = {
//     $firstName: 'John',
//     _firstName: 'John',
//     let: 'let',
//     var: 'var',
//     const: 'const',
//     'first name': 'first name',
// }

// console.log(object['first name']);

// for (const key in object) {
//     console.log(key, object[key]);
// }

// Property value shorthand
// function testing() {
//     return {
//         name: 'test'
//     }
// }

// console.log(testing());

/**
* 
* Object references and copying
* 
* Comparison by reference
* 
* Cloning and merging, Object.assign
* 
* Nested cloning
* 
* structuredClone
*/

// primitive types 
// let number = 10;

// let number1 = number;

// number1 = 20;

// console.log(number);
// console.log(number1);

// reference types

// let array = [10,20,30];

// console.log(array);

// let array2 = array;

// array2[array2.length]  = 40;

// console.log(array);

// console.log(array2);

// comparision

// let obj = {}

// let obj2 = obj

// console.log(obj === obj2);

// merge 

// let object = {
//     firstName: 'John',
//     firstName: 'deepak'
// }

// console.log(object);


// object.age = object2.age

// console.log(object);

// for (const key in object2) {
//     console.log(key, object2[key]);
//     object[key] = object2[key]
// }

// console.log(object);

// let object = {
//     firstName: 'John',
// }

// let object2 = {
//     age: 10,
//     hobbies: ['cricket'],
//     firstName: 'deepak',
// }

// let object4 = Object.assign(object,object2, {testing: "testing"})

// console.log(object4 === object);

// cloning
// var a = {
//     firstName : 'John',
// }

// var b = structuredClone(a);

// b.age = 10;

// console.log(a);
// console.log(b);

// console.log(b === a);


/**
* 
* Garbage collection
* 
*/

/**
* 
* Object methods, "this"
* Method shorthand
* “this” in methods
* “this” is not bound
* Arrow functions have no “this”
*/

// let object = {
//     firstName : 'John',
//     getFirstName : function(){
//         console.log(this.firstName);
//         this.testing()
//     },
//     testing() {
//         console.log(this.firstName); 
//         console.log("testing");
//     }
//     // testing: () => {
//     //     console.log(this);
//     //     console.log(this.firstName); 
//     //     console.log("testing");
//     // }
// }

// object.getFirstName();


/**
* Constructor, operator "new"
* 
* Constructor function
* 
* Constructor mode test: new.target
* 
* Return from constructors
* 
* Methods in constructor
*/

// function Testing(name) {
//     this.name = name;
//     this.getName = () => {
//         return this.name;
//     }

//     return this;
// }

// let d = new Testing("deepak");

// console.log(d);
// console.log(d.getName());

// test function is normal function or a class
// function Testing() {
//     console.log(new.target);
//     return {
//         name: "deepak",
//     }
// }

// let t = new Testing();

// console.log(t);

/**
* 
* Optional chaining '?.'
* 
* The “non-existing property” problem
* 
* Optional chaining
* 
* Short-circuiting
* 
* Other variants: ?.(), ?.[]
*/

// let object = {
//     name1: {
//         firstName: 'John',
//         lastName: 'doe'
//     },
//     num: [10,20,30],
//     testing() {
//         console.log("test");
//     }
// }

// console.log(object.name?.firstName);

// console.log(object.nums?.[0]);

// object.test?.();

/**
* 
* Symbol type
* 
* Symbols 
* “Hidden” properties
* Symbols in an object literal
* Symbols are skipped by for…in
* Global symbols
* Symbol.keyFor
*/

// let sym = Symbol('id');

// console.log(sym);

// console.log(sym.description);


// let sym1 = Symbol('id');

// let sym2 = sym1;

// // sym2 = Symbol('description');
// console.log(sym2);
// console.log(sym1);
// console.log(sym1 === sym2);


// let sym1 = Symbol('id');
// let sym2 = Symbol('id');

// console.log(sym2);
// console.log(sym1);
// console.log(sym1 === sym2);


// let sym1 = Symbol.for('id');
// let sym2 = Symbol.for('id');

// console.log(sym2);
// console.log(sym1);
// console.log(sym1 === sym2); // true


// let sym1 = Symbol.for('id');
// let sym2 = Symbol('id');

// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym2));


// let sym = Symbol('id');

// let object = {
//     dummy : "dummy",
//     [sym]: 10
// }

// console.log(object);

// console.log(object[sym]);

// for (const key in object) {
//     console.log(key, object[key]);
// }


