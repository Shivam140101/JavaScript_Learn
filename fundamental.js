"use strict";

/* Code Structure 

   --> Statements (alert('Hello World');)
   --> Semicolons
   --> Comments 

*/
//alert('Hello World');

/* ****************************** Variables *********************************

   A variable
   
   let (es6)

   const (es6)

   var (old school)

   Variable naming :- The name must contain letter, digits, or the symbols $ and _ .
                      The first character must not be a digit.
                      
*/

// var (old school)
//var firstName = "Shivam";
//firstName = "John";

// document.write
//document.write(firstName)

//console.log
//console.log(firstName)
//console.warn(firstName)
//console.dir(firstName)

//firstName = "Shivam";
//console.log(firstName);

/* The modern mode, "use strict"

  "use strict"

*/ 


// redeclaration
//var firstName = "Shivam";
//var firstName = "Shivam Ahlawat";
//console.log(firstName);


//let(es6)
//let firstName = "Shivam";
//let firstName = "Shivam";


//const(es6)
//const firstName = "Shivam";
//firstName = "sjdhvcsdj";



/* ********************************* Data Types ***********************

   Number
   BigInt
   Boolean (Logical type)
   null
   undefined
   array
   String
   Objects and Symbols 

 */

 // Number
 //let num = 10.25; 
 //num = 10;
 //console.log(num, typeof num);

 //BigInt
 //let num = BigInt('1111111111111111111');
 //let num = 1111111111111111111n;
 //console.log(num, typeof num);

 //Boolean (true/false)
 //let bool = true;
 //console.log(bool, typeof bool);

 //null
 //let num = null;
 //console.log(num, typeof num);

 // Undefined
 //let num;
 //console.log(num, typeof num);

 // array
 //let a = 10;
 //let b = 20;
 //let c = 30;

 //let array = [a, b, c];
 //console.log(array[0]);
 //console.log(array[1]);
 //console.log(array[2]);
 //console.log(array[23]);
 //console.log(array, typeof array)

 // String
 //let str = "skhbwkhbvi7326";
 //let str1 = 'skbvskdbskdbosdhfuhew';
 //let str2 = "skbvskjbsdlnsldnsdkjjbsdbsd\"skjvjksbvsjbvsbvwvw";
 //let str3 = "jdcsdjibdackajncw()_+\\AAAEDSKCBSDHBDLJBCHKADBD";
 //console.log(str, typeof str);
 //console.log(str1, typeof str1);
 //console.log(str2 );
 //console.log(str3);

 //let firstName = "Shivam";
 //console.log(firstName[0]);

 //let array = [10,20]
 //array[0] = 30;
 //console.log(array);

 // Object
 //let array = [
 //    "Shivam",
 //    "Ahlawat"
 //]
 //console.log(array);

 //let obj = {
 //    name: {
 //     firstName: "Shivam",
 //     lastName: "Ahlawat"
 //    },
 //    nums: [10,20],
 //    email: "shivam@gmail.com"
 //}
 //console.log(obj, typeof obj);
 //console.log(obj.name.firstName);
 //console.log(obj.name.lastName);
 //console.log(obj.nums[0]);
 //console.log(obj.email);

 // Symbol
 //let sym = Symbol("id");
 //console.log(sym);
 //console.log(sym.description);


/* ************************** Interaction: alert, prompt, confirm **********************

   alert
   prompt
   confirm

 */
  // alert
  // alert("Hello World")

  // prompt
  // let name = prompt("Enter Your name");
  //let age = prompt("Enter age");
  //console.log(name, typeof name);
  //console.log(age, typeof age);

  // confirm
  //let result = confirm("Are you want to comfirm");
  //console.log(result, typeof result);

  
/* ***************************** Type Conversion  ************************************ 

    String Conversion
    Numeric Conversion
    Boolean Conversion

 */

    // String Conversion
    // Number
    //let num = 10;
    //console.log(num, typeof num);

    //let str = String(num);
    //console.log(str, typeof str);

    // Boolean 
    //let bool = true;
    //console.log(bool, typeof bool);

    //let str1 = String(bool)
    //console.log(str1, typeof str);

    // Numeric Conversion
    //string
    //let str = "10";
    //console.log(str, typeof str);

    //let number = Number(str);
    //console.log(number, typeof number);

    //boolean
    //let bool = true;
    //console.log(bool, typeof bool);

    //let number = Number(bool);
    //console.log(number, typeof number);


    // Boolean Conversion
    //string
    //let str = "abc";
    //console.log(str, typeof str);

    //let bool = Boolean(str);
    //console.log(bool, typeof bool);

    //number
    //let num  =10;
    //console.log(num, typeof num);

    //let bool = Boolean(num)
    //console.log(bool, typeof bool);

/* ********************************* Basic Operators ************************************

    Terms: "unary", "binary", "operand",
    
    Arithmetic Operators
    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **

    String concatenation with binary +

    Numeric conversion, unary +

    Operator precedence

    Increment, decrement
    ++
    --
*/

    //Arithmetic Operators
    //Addition +,
    //let a=10;
    //let b=20;
    //console.log(a+b);
 
    //Subtraction -,
    //let a=10;
    //let b=20;
    //console.log(a-b);
 
    //Multiplication *,
    //let a=10;
    //let b=20;
    //console.log(a*b);
    
    //Division /,
    //let a=10;
    //let b=20;
    //console.log(a/b);
 
    //Remainder %,
    //let a=10;
    //let b=20;
    //console.log(a%b);
 
    //Exponentiation **
    //let a=2;
    //let b=3;
    //console.log(a**b);

    //String concatenation + 

    //let firstName = "john";
    //let lastName = "doe";

    //let fullName = firstName + " " + lastName; 
    //console.log(fullName);

    //console.log(10 + 10);  // 20
    //console.log(10 - 10);  //0
    //console.log(10 * 10);  //100
    //console.log(10 / 10);  //1
    //console.log(10 % 10);  //0
    //console.log(10 ** 10); //10000000000

    //console.log(10 + "10");  //1010
    //console.log(10 - "10");  //0
    //console.log(10 * "10");  //100
    //console.log(10 / "10");  //1
    //console.log(10 % "10");  //0
    //console.log(10 ** "10"); //10000000000

    //console.log(10 + "a");  // 10a
    //console.log(10 - "a");  // NAN
    //console.log(10 * "a");  // NAN
    //console.log(10 / "a");  // NAN
    //console.log(10 % "a");  // NAN
    //console.log(10 ** "a")  // NAN


    // Numeric Conversion unary operator +
    //let str = "10";
    //console.log(str, typeof str);
    
    //let number = +str;
    //console.log(number, typeof number);


    // increment ++
    // let a = 10;

    // posfix
    //console.log(a++); // output then increment
    //console.log(a);

    // prefix
    //console.log(++a); // increment then output
    //console.log(a);

    //console.log(a + ++a + a++ - a + a++);  //32
   

    // decrement --
    //let a=10;

    // postfix
    //console.log(a--); // output then decrement
    //console.log(a);
    
    //prefix
    //console.log(--a); // decrement then output
    //console.log(a);   


// *********************************** Assignment Operators ********************************

    // =
    //let a = 10 + 20 + 30;

    // +=
    //let a = 10;
    //let b = 10;
    //a += b; // a = a+b;
    //console.log(a);


    // -=
    //let a = 10;
    //let b = 10;
    //a -= b; // a = a-b;
    //console.log(a);


    // *=
    //let a = 10;
    //let b = 10;
    //a *= b; // a = a * b;
    //console.log(a);

    // /=
    //let a = 10;
    //let b = 10;
    //a /= b; // a = a / b;
    //console.log(a);


    // %=
    //let a = 10;
    //let b = 10;
    //a %= b; // a = a % b;
    //console.log(a);

    // **=
    //let a = 10;
    //let b = 10;
    //a **= b; // a = a ** b;
    //console.log(a);

/* ******************************* Comparison Operators ******************************* */
   // == equal to
   //let a = "10";
   //let b = 10;
   //console.log(a==b);


   // === equal value and equal type
   //let a = "10";
   //let b = 10;
   //console.log(a===b);

   // != not equal
   //let a = 10;
   //let b = 10;
   //console.log(a!=b);


   // !== not equal or equal type
   //let a = "10";
   //let b = 10;
   //console.log(a!==b);


   // > greater than
   //let a = 10;
   //let b = 10;
   //console.log(a>b);


   // < less than
   //let a = 10;
   //let b = 10;
   //console.log(a<b);


   // >= greater than or equal
   //let a = 10;
   //let b = 10;
   //console.log(a>=b);


   // <= less than or equal
   //let a = 10;
   //let b = 10;
   //console.log(a<=b);

   // ? ternary operator
   //let number = 10;
   ////condition ? value : value
   //console.log(number%2);
   //let result = (number % 2 === 0) ? "Even" : "Odd";
   //console.log(result);

/* *********************************** Logical operator ******************************** */
  
    // && (AND)
    //let a = 10;
    //let b = 10;
    //console.log(a===10 && b===10);
    //             true      true      true
    //             false     true      false
    //             true      false     false
    //             false     false     false


    // || (OR)
    //let a = 10;
    //let b = 10;
    //console.log(a===10 || b===10); result
    //             true      true      true
    //             false     true      true
    //             true      false     true
    //             false     false     false
    


    // ! (NOT)
    //let a = true ;
    //console.log(!a, !!a);


/* **********************************Bitwise operator ******************************** */

   // AND ( & )
   //let a = 10; // 1010
   //let b = 5;  // 0101
   //console.log(a & b);
   
   //let a = 65; // 1000001
   //let b = 64; // 1000000
   //console.log(a & b);


   // OR ( | )
   //let a = 10; // 1010
   //let b = 5;  // 0101
   //console.log(a | b);
   
   //let a = 65; // 1000001
   //let b = 64; // 1000000
   //console.log(a | b);


   //XOR ( ^ )
   //let a = 10; // 1010
   //let b = 5;  // 0101
   //console.log(a ^ b);
   
   //let a = 128; // 1000001
   //let b = 65; // 1000000
   //console.log(a ^ b);


   //NOT ( ~ )
   //let a = -100;
   //console.log(~a);

   //LEFT SHIFT ( << )
   //let a =5;
   //console.log(a << 4);

   //RIGHT SHIFT ( >> )
   //let a =5;
   //console.log(a >> 1);

   //ZERO-FILL RIGHT SHIFT ( >>> )
   //let a =5;
   //console.log(a >>> 1);

/* ********************************* Conditional Branching ******************************** */ 

    // the "if" statement
    //let number = 19;
    //if(number % 2 === 0){
    //  console.log("Number is Even");
    //}
    //// the "else" clause
    //else{
    //  console.log("Number is Odd");
    //}

    // Several conditions: "else if"
    // if else Ladder 
    
    //let number  = 7;
    //if(number % 2 === 0 && number % 2 === 5){
    //  console.log("Number is divisible by 2 and 5");
    //} else if(number % 5 === 0){
    //  console.log("Number is divisible by 5");
    //} else if(number % 2  === 0){
    //  console.log("Number is divisible by 2");
    //} else{
    //  console.log("Number is neither divisible by 2 nor 5");
    //}

    // Nested if-else 
    //let number = 10
    //if(number>0){
    //  if(number%2===0){
    //     console.log("Number is Even");
    //  }
    //  else{
    //     console.log("Number is Odd");
    //  }
    //} else{
    //  console.log("Number is not greater then zero");
    //}
     

    // Conditional operator '?' 
    // Alternative of if-else 
    //let number = 10;
    //
    //let result = (number % 2 === 0 ? "Number is even" : "Number is odd");
    //console.log(result);

    // let a = 10;
    // let b = 10;
    // let operator = "+"; //

    // if(operator === "+"){
    //   console.log("Sum:" + (a+b));
    // } else if(operator === "-") {
    //   console.log("Subtract:" + (a-b));
    // } else if(operator === "*") {
    //  console.log("Multiply:" + (a * b)); 
    // } else if(operator === "/"){
    //   console.log("Divide:" + (a/b));
    // } else if(operator === "%"){
    //   console.log("Remainder:" + (a % b));
    // } else {
    //   console.log("Enter valid operator");
    // }

    // The Switch Statement 
    // Grouping of case 

    // switch (key) {
    //   case value:
    //      break;
 
    //   default:
    //      break;
    // }

    // let number = 10;
    // switch(number) {
    //   case 10:
    //      console.log("10");
    //      break;
    //   
    //   case 11:
    //      console.log("11");
    //      break;
 
    //   default:
    //      console.log("No Case Match");
    //      break;
    // }
    

    //let a = 10;
    //let b = 10;

//    //let operator = "+";
    //   switch(operator) {
    //     case "+":
    //        console.log("Sum: " + (a + b));
    //        break
    //     
    //     case "-":
    //        console.log("Subtract: " + (a - b));
    //        break
    //     
    //     case "*":
    //        console.log("Multiply: " + (a * b));
    //        break;
    //     
    //     case "/":
    //        console.log("Divide: " + (a / b));
    //        break

//    //     case "%":
    //        console.log("Remainder: " + (a % b));
    //        break

//    //     case "**":
    //        console.log("Power: " + (a ** b));
    //        break

//    //     default:
    //        console.log("Enter valid Operator");
    //        break;
    //   }


    /* ********************** Nullish coalescing operator '??' **************** */

     // let price = 10;
     // console.log(price ?? 0);

/* ********************************** Loops: while and for *********************************** */

     // The "while" loop 

     // print 1 to 10
     // let num = 1;
     // while(num <= 10) {
     //    console.log(num);
     //    num++;
     // }

     // array
     // let array = [10,20,30,40,50];
 
     // let i = 0;
     // while(i < array.length) {
     //        console.log(array[i]);
     //        i++;
     //      }

     // String
     // let first = "Shivam";

     // let i = 0;
     // while(i < first.length) {
     //   console.log(first[i]);
     //   i++;
     // } 



     // The "do-while" loop

     // let num = 10;
     // do{
     //     console.log("number: " + num);
     // } while(num > 10)

     // number = 123456789

     //let num = 123456789;
     //let count = 0;

     //while(num != 0){
     //   count++;

     //   num = parseInt(num/10);
     //   console.log(num);
     //}
     


     // The "for" loop
     // for(initializer ; condition ; update){
     //    block
     // }
     // Print 1 to 10
     // for(let i =1 ; i<=10 ; i++){
     //    console.log(i);
     // }
     // array 
     // let array = [10,20,30,40,50];
     // for(let i = 0 ; i < array.length ; i++){
     //   console.log(array[i]);
     // }
     // String
     // let firstName = "Shivam";
     // for(let i=0 ; i<firstName.length ; i++){
     //    console.log(firstName[i]);
     // }



     // The "for in" loop"
     // let array = [10,20,30,40,50];
  
     // for (const key in array) {
     //     console.log(key, array[key]);
     // }

     // String
     // let firstName = "Shivam";
     // for(const key in firstName) {
     //    console.log(key, firstName[key]);
     // }

     // object
     // let obj = {
     //    firstName: "Shivam",
     //    lastName: "Ahlawat",
     // }
     // for(const key in obj) {
     //   console.log(key, obj[key]);
     // }


     // The "for of" loop
     // let array = [10,20,30,40,50];
     // for(const value of array) {
     //    console.log(value);
     // }

     // String
     // let firstName = "Shivam";
     // for(const value of firstName) {
     //        console.log(value);
     //      }

     // Pattern 
     // for(let row = 1 ; row <= 3 ; row++) {
     //    for(let col = 1 ; col <= 3 ; col++) {
     //        if(col <= row) {
     //            document.write("*")
     //        }
     //    }
     //    document.write("<br>")
     // }







     // Breaking the loop
     // Continue to the next iteration



/* ********************************** Functions ******************************** */

     // Function Declaration
     // Local Variables
     // Outer Variables
     // Parameters
     // Default values
     // Returning values
     // Function expression
     // Callback functions
     // Arrow functions

     // Function Declaration and definition
     // function add() {
     //    let a = 10;
     //    let b = 20;
     //    console.log(a + b);
     // }
     // call function
     // add();

     // function parameter and arguments
        // function add(num1, num2) {
        //     console.log(a + b);
        // }
        // 
        //  add(10,20);


        // Local Variables
        //   function add(num1, num2) {
        //       let sum = num1 + num2;
        //       console.log(sum);
        //   }
        // console.log(sum);
        // console.log(num1 , num2);
        // add(10,20);

        // Outer Variables
        // function test(){
        //     let a = 10; // Outer Variable

        //     function t(){
        //         console.log(a);
        //     }
        //     t();
        // }
        // test();
                    

        // Global Variables
        //   let sum = 0;

        //   function add(a, b){
        //       sum = a + b;
        //   }
        //   console.log(sum);
        //   add(10,20);
        //   console.log(sum);


        // default value
        //    function add(num1, num2, num3 = 0){
        //        console.log(num1 + num2 + num3);
        //    }
        //    add(10, 20,);

        // returning a value from a function
        //     function add(num1, num2,){
        //         return num1 + num2;
        //     }
        //     let sum = add(10, 20);
        //     console.log(sum);


        // function expression 
        //    let add = function(num1, num2){
        //        console.log(num1 + num2);
        //    }
        //    add(10, 20);
        //    add(20,20)

        // arrow function 
        //  let func1 = () => {
        //    
        //  }

        // let add = (num1, num2) => {
        //     console.log(num1 + num2);
        // }

        // add(10, 20);

        // remove curly braces from an arrow function if there is only one statement
        // let add = (num1, num2) => num1 + num2;
        // let sum = add(20,20)
        // console.log(sum);

        // remove parentheses from an arrow function if there is only one parameter
        // let squareOfNumber = num => num * num;
        // let result = squareOfNumber(10);
        // console.log(result);


        // Call back function

        //  function Multiply(a,b){
        //      console.log(a * b);
        //  }

        //  function add(num1, num2){
        //      console.log(num1 + num2);
        //  }

        //  function calculate (a,b,func){
        //      func(a,b);
        //  }

        //  calculate(10,20,Multiply);
        //  calculate(20,20,add);

         