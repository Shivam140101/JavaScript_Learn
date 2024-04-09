/**
 * 
 * Class basic syntax
 * 
 * The “class” syntax
 * 
 * What is a class?
 * 
 * Class Expression
 * 
 * Getters/setters
 * 
 * Computed names […]
 * 
 * Class fields
 * 
 * Making bound methods with class fields
 */

// class
// class Car {
//     carName = "TATA"

//     getCarName() {
//         console.log("get car name called");
//     }
// }

// object
// let car = new Car();

// access property
// console.log(car.carName);

// access method
// car.getCarName()

// constructor
// class Car {
//     carName = "TATA"
//     carModel = 2024

//     constructor(name, model) {
//         console.log(name);
//         this.carName = name;
//         this.carModel = model
//         console.log("constructor called");
//     }

//     getCarName() {
//         console.log(this.carName);
//     }
// }

// let car = new Car("MARUTI", 2022);

// console.log(car);

// car.getCarName();

//  Class Expression

// let MyCar = class {
//     carName = "TATA"
// }

// let car = new MyCar()

// console.log(car);

// computed names
// let carName = "testing"
// let MyCar = class {
//     ["car" +  "Name"] = "TATA";

//     [carName](){
//         console.log("fasfasdf");
//     }
// }

// let car = new MyCar()

// console.log(car);

// setter / getter
// class Car {
//     carName = "TATA"

//     getCarName(){
//         return this.carName
//     }

//     get getcarname(){
//         return this.carName
//     }
// }

// let car = new Car;

// // . []
// console.log(car.carName);

// // method
// console.log(car.getCarName());

// // getter
// console.log(car.getcarname);

// class Car {
//     carName = "TATA"

//     constructor(name) {
//         this.carName = name
//     }

//     setCarName(value) {
//         this.carName = value
//     }

//     set setCarName(value) {
//         this.carName = value
//     }
// }

// . []
// let car = new Car;

// car.carName = "MARUTI"

// console.log(car);

// constructor
// let car = new Car("MARUTI")
// console.log(car);

// method
// let car = new Car();
// car.setCarName("MARUTI")
// console.log(car);

// setter
// let car = new Car();
// car.setCarName = "MARUTI"
// console.log(car);



/**
 * Class inheritance
 * 
 * The “extends” keyword
 * 
 * Overriding a method
 * 
 * Overriding constructor
 */

// class ParentClass {
//     className = "ParentClass"

//     getClassName() {
//         return this.className
//     }
// }

// class ChildClass extends ParentClass {

// }

// let child = new ChildClass()

// console.log(child);

// console.log(child.className);

// console.log(child.getClassName());

// class A {

// }

// class B extends A {

// }

// class C extends B {

// }

// class C extends A,B {

// }


// class ParentClass {
//     className = "ParentClass"

//     getClassName() {
//         return this.className
//     }
// }

// class ChildClass extends ParentClass {
//     childClassName = "childClassName"

//     getChildClassName() {
//         return this.childClassName;
//     }
// }

// let child = new ChildClass()

// console.log(child);

// class ParentClass {
//     className = "ParentClass"

//     getClassName() {
//         return this.className
//     }
// }

// class ChildClass extends ParentClass {
//     // property overriding
//     className = "childClass"

//     // method overriding
//     getClassName(testing) {
//         return this.className + " Child " + testing
//     }
// }

// let child = new ChildClass()

// // console.log(child);

// console.log(child.getClassName("ffsadfasfasdfasf"));

// method overloading
// class Area {
//     areaOf(radius) {
//         console.log(Math.PI * radius * radius);
//     }

//     areaOf(length, breadth){
//         console.log(length * breadth);
//     }
// }

// let area = new Area();

// console.log(area);

// let object = {
//     firstName: "deepak",
//     firstName: "JHON"
// }

// console.log(object);

// super
  //  class ParentClass {
  //      parentClassName;
  //      testing  = "testing"
  //  
  //      constructor(name) {
  //          this.parentClassName = name
  //      }
  //  
  //      getParentClassName() {
  //          console.log(this.testing);
  //          // console.log("working");
  //          // return this.parentClassName;
  //      }
  //  }

  //  class ChildClass extends ParentClass {
  //  
  //      testing  = "testing child"
  //      constructor(name) {
  //          super(name)
  //      }
  //  
  //      getParentClassName() {
  //          // console.log(super.testing);
  //          console.log(super.getParentClassName());
  //          // return this.parentClassName +  " child";
  //      }
  //  }

  //  let child = new ChildClass("fasdfasfasdf");
  //  
  //  console.log(child.getParentClassName());

  /**
 * Static properties and methods
 * 
 * Static properties
 * 
 * Inheritance of static properties and methods
 */

// class Employee {
//     static counter = 0;

//     constructor() {
//         Employee.counter++
//     }

//     static getTotalInstance() {
//         return this.counter;
//     }
// }

// let emp1 = new Employee()

// let emp2 = new Employee()

// let emp3 = new Employee()

// console.log(Employee.counter);
// console.log(Employee.getTotalInstance());

// class A {
//     static className = "A"

//     static getClassName(){
//         return  this.className
//     }
// }

// class B extends A {

// }

// console.log(B.className);
// console.log(B.getClassName());


/**
 * 
 * Private and protected properties and methods
 * 
 * Private
 * 
 */

// class A {
//     // public property
//     className = "A"

//     // private property
//     #t = 't'

//     // private method
//     #getT = () => {
//         return this.#t
//     }

//     // public method
//     getT = () => {
//         return this.#t
//     }

//     get gett(){
//         return this.#getT();
//     }
// }

// let a = new A;

// console.log(a.gett);

// class A {
//     #className = "a"

//     #getClassName() {
//         return this.#className;
//     }

//     getPName() {
//         return this.#className;
//     }
// }

// class B extends A{
//     getParentClassName() {
//         return this.getPName();
//     }

//     getPName() {
//         return this.#className;
//     }
// }

// let b = new B;

// console.log(b.getPName())


/**
 * 
 * Class checking: "instanceof"
 * 
 * The instanceof operator
 *  
 */
//   class A { }
//   
//   class B { }
//   
//   let a = new A;
//   
//   let b = new A;
//   
//   console.log(b instanceof A);