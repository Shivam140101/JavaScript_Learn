/*********************************  Advance DataTypes  ***********************************
 * 
 * Numbers
 * 
 * Hex, binary and octal numbers
 * toString(base)
 * Rounding
 * Math.floor
 * Math.ceil
 * Math.round
 * Math.trunc
 * Math.toFixed
 * Imprecise calculations
 * Tests: isFinite and isNaN
 * Math.random()
 * Math.pow(n, power)
 * Math.max(a, b, c...) and Math.min(a, b, c...)
 * parseInt and parseFloat
 */

// * Hex, binary and octal numbers
// * toString(base)

// let a = 10;

// console.log(a.toString(2));
// console.log(a.toString(8));
// console.log(a.toString(16));
// console.log(a.toString(10));

// * Rounding
// * Math.floor
// let a = 10.555;

// console.log(Math.floor(a));

// * Math.ceil
// let a = 10.001;

// console.log(Math.ceil(a));

// * Math.round
// let a = 10.5;

// console.log(Math.round(a));

// * Math.trunc
// let a = 10.555;

// console.log(Math.trunc(a));

// toFixed
// let a = 10.2555;

// console.log(a.toFixed(2));

// Imprecise calculations
// console.log(10 + 30 - false + "fasfsaf");

// Tests: isFinite and NaN 

// isFinite true = number , boolean
// isFinite false = [string] , [10,10,10] , { } , NaN , String , undefined

// let number = [10,20];
// console.log(isFinite(number));

// isNan 
// isNan false = number , boolean
// isNan true = [string] , [10,10,10] , { } , NaN , String , undefined
// let number = "String";
// console.log(isNaN(number) , number);

// Math.random()
// let generateRandomNumber = Math.random() * 100;
// console.log(Math.floor(generateRandomNumber));

// Math.pow(n, power)
// console.log(Math.pow(2,10));

// Math.max(a, b, c ...) and Math.min(a, b, c ...)
// console.log(Math.max(10,50,30,90,20,100));
// console.log(Math.min(10,50,8,1,10));

// ParseInt and ParseFloat
// let number = "10";
// console.log(number , typeof number);
// number = parseInt(number);
// console.log(number , typeof number);


// let number = "10.25";
// console.log(number , typeof number);
// number = parseFloat(number);
// console.log(number , typeof number);


/**
 * Strings
 * 
 * Quotes
 * Special characters
 * String length
 * Accessing characters
 * Strings are immutable
 * 
 * Changing the case
 * toUpperCase
 * toLowerCase
 * 
 * Searching for a 
 * substring
 * indexOf
 * lastIndexOf
 * 
 * includes, startsWith, endsWith
 * 
 * Getting a substring
 * slice
 * substring
 * substr
 * 
 * Comparing strings
 * codePointAt
 * fromCodePoint
 * 
 */

// Strings
// * 
// * Quotes
// let str = 'skbskdbv';
// let str1 = "sjhbsdnxvjhsg";

// let str = "skjbvskskdj\n" + "sjkjsdbvsv\n" + "skbvksdbvs";
// console.log(str); 

// let firstName = "Shivam";
// let str1 = `svnjvs
// svs vskvs
// ${firstName}
// skd v skj
// jsdvgshd`;
// console.log(str1);

// let id = 4;
// let url = `/admin/products/edit/${id}`;
// console.log(url);



// * Special characters


// * String length
// let str = "Shivam Ahlawat";
// console.log(str.length);

// * Accessing characters
// let str = "Shivam Ahlawat";
// console.log(str[0]);
//
// for (const key in str ){
//    console.log(str[key]);
// }


// * Strings are immutable
// let str = "Shivam Ahlawat";
// str[0] = 'w';
// console.log(str[0]);

// Changing the case
// let str = "Shivam Ahlawat";
// // * toUpperCase
// console.log(str.toUpperCase());
// // * toLowerCase
// console.log(str.toLowerCase());

// Searching for a 
// let str = "Shivam Ahlawat";

// //  * indexOf
// console.log(str.indexOf("a"));

// //  * lastIndexOf
// console.log(str.lastIndexOf("a"));

// includes
// console.log(str.includes('AK'));

// startsWith
// console.log(str.startsWith("WEE"));

//  endsWith
// console.log(str.endsWith("WIN"));

// * Getting a substring
// * slice
// let name = "deepak singh gusain";
// console.log(name.slice(2, -6));

// * substring
// console.log(name.substring(0, -6));

// * substr
// console.log(name.substr(0, -6));


// * Comparing strings
// let str1 = "Hello world";
// let str2 = "hello";

// console.log(str1 < str2);


// * codePointAt
// let a = 'a';

// console.log(a.codePointAt());

// let fullName  = "deepak singh gusain";

// for (const value of fullName) {
    
//     console.log(value.codePointAt() - 32);
// }


// * fromCodePoint
// console.log(String.fromCodePoint(32 - 32));

// let fullName  = "deepak singh gusain";

// function uppercase(str) {
//     let char = '';

//     for (const value of str) {
        
//         char += String.fromCodePoint(value.codePointAt() - 32)
    
//     }

//     return char;
// }

// let string = uppercase(fullName);

// console.log(string);


/** 
 ****************************** Arrays ****************************************
 * 
 * Declaration
 * Methods pop/push, shift/unshift
 * new Array()
 * Multidimensional arrays
 * toString
 * 
 * Array methods
 * 
 * Add/remove items
 * arr.push(...items) – adds items to the end,
 * arr.pop() – extracts an item from the end,
 * arr.shift() – extracts an item from the beginning,
 * arr.unshift(...items) – adds items to the beginning.
 * 
 * splice
 * 
 * slice
 * 
 * concat
 * 
 * Iterate: forEach
 * 
 * Searching in array
 * indexOf/lastIndexOf and includes
 * find and findIndex/findLastIndex
 * filter
 * 
 * Transform an array
 * map
 * sort(fn)
 * reverse
 * split and join
 * reduce/reduceRight
 * 
 * Array.isArray
 */

// []
// let array = [10,20,30,40];
// console.log(array);

// new Array()
// let array = new Array(10);
// console.log(array);

// Array.of

// let array = Array.of(10);
// console.log(array);

// Array.from

// let array = Array.from([10,20,30,40])
// console.log(array);

// Add/remove items
//  * arr.push(...items) – adds items to the end,

//   let array = [10,20,30,40];
// array[array.length] = 100;
// array[array.length] = 100;
// console.log(array);

// let returnValue =  array.push(10,20,30,40);
// console.log(returnValue);

//  * arr.pop() – extracts an item from the end,
 //let array = [10,20,30,40];

 //let returnValue = array.pop();

 //console.log(returnValue);

//  * arr.shift() – extracts an item from the beginning,
// let array = [10,20,30,40];
// let returnValue =  array.shift();
// console.log(returnValue);

//  * arr.unshift(...items) – adds items to the beginning.
//let array = [10,20,30,40];

//let returnValue = array.unshift(10,20,30,40);
//console.log(returnValue);

//  * splice
//remove 
// let array = [10,20,30,40,50,60];
// // let returnValue =  array.splice(3,2);
// // console.log(returnValue);
// 
// array.splice(-2,1);
// console.log(array);

//update
// let array = [10,20,30,40,50,60];
// array.splice(3,1,100,100)
// console.log(array);
   
// Add
// let array = [10,20,30,40,50,60];
// array.splice(3,1,100,120);
// console.log(array);


//  * slice
// let array = [10,20,30,40,50,60];
// console.log(array.slice(0,2));
   
//  * concat
// let array = [10,20,30,40,50,60];
// let array2 = [70,80,90,100,110,120];
// let array4 = ["name"]
// 
// let array3 = array.concat(array2,array4);
// console.log(array3);

   
//  * Iterate: forEach
// let array = [10,20,30,40,50,60];
// 
// let returnValue = array.forEach((value,index,arr) => {
//     console.log(value , index , arr);
// })
// console.log(returnValue);  //undefined

//  * Searching in array
//  * indexOf/lastIndexOf and includes
// let array = [10,20,30,40,50,20,60];
// console.log(array.indexOf(20));
// console.log(array.lastIndexOf(20));
// console.log(array.includes(200));

//  * find and findIndex/findLastIndex
// let array = [10,20,30,40,50,60];
//let value =  array.find((value , index , arr) => value===30)
//let value =  array.findIndex((value , index , arr) => value===30)
//let value =  array.findLastIndex((value , inde , arr) => value===30)

//console.log(value);


//  * filter
// let array = [10,20,30,40,50,60];
// let filteredArray = array.filter((value , index , arr) => value ===20);
// console.log(filteredArray);

// * Transform an array
// * map
// let array = [10,20,30,40,50,60];
// 
// let mapedArray = array.map((value,index,arr) => {
//     return value * 2;
// })
// console.log(mapedArray);


// * sort(fn)
// let array = [10 , 50, 40 , 90 , 100 , 20] ;
// console.log(array.sort((a , b) => {
//         if(a < b){
//             return -1;
//         }
//         if(a == b){
//             return 0;
//         }
//         if(a > b){
//             return 1;
//         }
// }));



// * reverse
// let array = [10,50,40,90,100,20];
// console.log(array.reverse());



// toString
// let array = [10,50,40,90,100,20];
// console.log(array.toString());



// * split and join
// let array = [10,50,40,90,100,20];
// let string = array.join('|');
// 
// console.log(string.split('|'));

// * reduce/reduceRight
// let array = [10,20,30,40,50,60]
// let sum = 0;
// for(const value of array) {
//     sum += value;
// }
// console.log(sum);
// let sum = array.reduce((prev , currentValue) => {
//     return prev + currentValue;
// },0)
// 
// console.log(sum);


// * Array.isArray
// let array = null;
// console.log(Array.isArray(array));

// Multidimensional array
// let array = [[10,20],[30,40],[50,60],[70,80],[90,100]];
// console.log(array[0][1])

/* ************* Iterables ************* */

// String is Iterable 

// String 
// let str = ""

// Iterables and array like 


/**
 * 
 * Map and Set 
 * */
//  * 
//  * Map
//  * new Map() – creates the map.
// let map = new Map();

//  * map.set(key, value) – stores the value by the key.
//  map.set(1, 10)
//  map.set(2, 20)
//  map.set(3, 30)
//  map.set(4, 40)
// console.log(map);

//  * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
//  console.log(map.get(1));

//  * map.has(key) – returns true if the key exists, false otherwise.
//   console.log(map.has(10));

//  * map.delete(key) – removes the value by the key.
//   console.log(map.delete(1));
//   console.log(map);

//  * map.clear() – removes everything from the map.
    // map.clear()

//  * map.size – returns the current element count.

//  * 
//  * Iteration over Map
//  * map.keys() – returns an iterable for keys,
// console.log(map.keys());
// 
// for(const value of map.keys()){
//     console.log(value);
// }
// 
// //  * map.values() – returns an iterable for values,
// console.log(map.values());
// for(const value of map.values()){
//     console.log(value);
// }
// 
// //  * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
// console.log(map.entries());
// for(const value of map.entries()){
//     console.log(value[0] , value[1]);
// }
//  * 
//  * 
//  * Set
//  * new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
//       let set = new Set();
//     console.log(set);

//  * set.add(value) – adds a value, returns the set itself.
//    set.add(10);
//    set.add(20);
//    set.add(30);
//    set.add(30);
//    set.add(30);

   // console.log(set);
     
//  * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    // let result = set.delete(100);
    // console.log(result);

//  * set.has(value) – returns true if the value exists in the set, otherwise false.
    // console.log(set.has(10));

//  * set.clear() – removes everything from the set.
    // set.clear();
    // console.log(set);


//  * set.size – is the elements count.
   // set.size;


//  * 
//  * Iteration over Set

   // for(const value of set){
   //     console.log(value);
   // }

/**
 * WeakMap and WeakSet
 * 
 * WeakMap
 * weakMap.get(key)
 * weakMap.set(key, value)
 * weakMap.delete(key)
 * weakMap.has(key)
 * 
 * WeakSet
 * WeakSet.add(value)
 * WeakSet.has(value)
 * WeakSet.delete(value)
 * 
 */

// WeakMap
// let weakMap = new WeakMap();

// let obj = { key: 1}

// // // add
// weakMap.set(obj, 10)

// // // get
// console.log(weakMap.get(obj))

// // // has
// console.log(weakMap.has(obj));

// // // delete
// weakMap.delete(obj)

// console.log(weakMap);

// weakset
// let weakSet = new WeakSet();

// let obj = {value: 10}

// // add
// weakSet.add(obj)

// // has
// console.log(weakSet.has(obj));

// // delete
// console.log(weakSet.delete(obj));

// console.log(weakSet);


/**
 * 
 * Object.keys, values, entries
 * 
 * Object.keys(obj) – returns an array of keys.
 * Object.values(obj) – returns an array of values.
 * Object.entries(obj) – returns an array of [key, value] pairs.
 */

// keys
// let object = {
//   firstName: "Deepak",
//   age: 10,
//   phone: 123456789
// }

// console.log(Object.keys(object));

// for (const value of Object.keys(object)) {
//   console.log(value);
// }

// values
// let object = {
//   firstName: "Deepak",
//   age: 10,
//   phone: 123456789
// }

// console.log(Object.values(object));

// for (const value of Object.values(object)) {
//   console.log(value);
// }

// entries
// let object = {
//   firstName: "Deepak",
//   age: 10,
//   phone: 123456789
// }

// console.log(Object.entries(object));

// for (const val of Object.entries(object)) {
//   console.log(`Key: ${val[0]}, Value: ${val[1]}`);
// }



/**
 * Destructuring assignment
 * 
 * 
 * Array destructuring
 * 
 * The rest ‘…’
 * 
 * Default values
 * 
 * Object destructuring
 * 
 * The rest pattern “…”
 * 
 * Nested destructuring
 */

// array
// let array = [10,20,40,50,60,70,80,90,100];

// let [a,b,c,...d] = array

// console.log(a, b, c,d);

// function addition(...nums) {

//   let sum = 0

//   for (const value of nums) {
//     sum += value
//   }

//   console.log(sum);
// }

// addition(10,20)

// let array = [10,20, 30]

// let [a,b,c = 0] = array;

// console.log(a,b,c);

// object

// et object = {
//    name: {
//      firstName: "Jhon",
//      lastName: "Doe"
//    },
//    age: 10,
//    hobbies: ['cricket']
//  }
//  
//  // destructuring
//  let { age } = object;
//  
//  // renaming
//  let { age:Age } = object;
//  
//  // nested destructuring
//  let {name:{firstName}} = object; 
//  
//  // subobject with rest operator
//  let { age, ...subObject } = object;
//  
//  console.log( age, subObject);

/***
 * 
 * Date and time
 * 
 * Creation
 * 
 * Access date components
 * getFullYear()
 * getMonth()
 * getDate()
 * getHours()
 * getMinutes() 
 * getSeconds() 
 * getMilliseconds()
 * getDay()
 * 
 * Date.now()
 * 
 * Date.parse from a string
 * 
 */

//  let date = new Date;
//  console.log(date);
//  console.log(date.getFullYear());
//  console.log(date.getMonth()+1);
//  console.log(date.getDay());
//  console.log(date.getDate());
//  console.log(date.getHours());
//  console.log(date.getMinutes());
//  console.log(date.getSeconds());
//  console.log(date.getMilliseconds());

// let now  = Date.now();
// console.log(now/1000/60/60/24/365);
// 
// let parse = Date.parse("10-10-2020");
// 
// console.log(parse);
// console.log(parse/1000/60/60/24/365);

 /** 
  * JSON methods
  * 
  * JSON.stringify
  * 
  * JSON.parse
  */

 // let object = {
 //    firstName: 'Shivam'
 // };
 // let stringObject = JSON.stringify(object);
// 
 // console.log(stringObject, typeof stringObject);
// 
 // let normalObject = JSON.parse(stringObject);
 // console.log(normalObject);

   





