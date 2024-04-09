// promise creation

// let promise = new Promise((resolve, reject)=> {

// })

// console.log(promise);

// let items = ['pen', 'copy']

// let promise = new Promise((resolve, reject) => {
//     if (items.includes('pen')) {
//         resolve("Resolved")
//     } else {
//         // reject('error')
//         throw new Error("item not found")
//     }
// })

// resolved fullfilled
// promise.then((data) => {
//     console.log(data);
// })

// // if error occurs
// promise.catch((error) => {
//     console.log(error);
// })

// chaning
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// callback hell issue
//  let promise = new Promise((resolve, reject)=> {
//      resolve('fsadfasdf')
//  })
//  
//  promise.then((data) => {
//      console.log("T 1");
//  }).then((data) => {
//      console.log("T 2");
//  }).then((data) => {
//      console.log("T 3");
//  }).then((data) => {
//      console.log("T 4");
//  }).then((data) => {
//      console.log("T 5");
//  }).catch((error) => {
//      console.log(error);
//  })

// let promise1 = new Promise((resolve, reject)=> {
//     resolve('fsadfasdf')
// })

// promise1.then(() => {
//     setTimeout(() => {
//         console.log("P 1");
//     }, 4000)
// })

// let promise2 = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log("P 2");
//     }, 2000)
// })

// promise2.then(() => {
//     console.log("P 2");
// })

// let promise3 = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log("P 3");
//     }, 5000)
// })

// promise3.then(() => {
//     console.log("P 3");
// })


// let promise = new Promise((resolve, reject) => {
//     resolve('fsadfasdf')
// })

// promise.then(() => {
//     console.log("promise");
// })

// console.log("after promise");


// for (let index = 1; index <= 10; index++) {
//   console.log(index);
// }

// data transfer from one then block to another block
// let promise = new Promise((resolve, reject)=> {
//     resolve('data')
// })

// promise.then((data) => {
//     console.log(data);

//     return 10;
// }).then((data) => {
//     console.log(data);
// })

// fetch 

// let data = fetch('https://restcountries.com/v3.1/all');

// data.then((response) => {
//     return response.json();
// }).then((d) => {
//     console.log(d);
// })

// async function getCountries() {
//     let response = 
//         await fetch('https://restcountries.com/v3.1/all');
// 
//     let data = await response.json();
// 
//     console.log(data);
// }
// 
// getCountries();


