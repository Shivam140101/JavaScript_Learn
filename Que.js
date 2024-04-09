// Array largest and second largest:- 

 let array = [26 ,34 ,33 ,30 ,32 ,27 ,31 ,25 ,28 ,29];
 
 let largest = array[0];
 let secondLargest = array[1]; 
 let temp = 0;
 
// let smallest =array[0];
// let secondSmallest = array[1];
// let temp1 = 0;
 
 for (let i = 2; i <= array.length; i++){
 
  if(secondLargest > largest){
    temp = largest;
    largest = secondLargest;
    secondLargest = temp;
  }
     if (array[i] > largest){
        secondLargest = largest;
         largest = array[i];
    }
    
     else if( array[i] > secondLargest && array[i] != largest){
        secondLargest = array[i];
    }
     
 }
 
 console.log("Largest element in array is:- "+largest);
 console.log("Second largest element in array is:- "+secondLargest);
// 
// for (let i = 2; i <= array.length; i++){
// 
//     if(array[i] <  smallest){
//        // secondSmallest = smallest;
//         smallest = array[i];
//     }
//     else if(array[i] < secondSmallest && array[i] != smallest){
//         secondSmallest = array[i];
//     }
//     else if(secondSmallest < smallest){
//        temp1 = smallest;
//        smallest = secondSmallest;
//        secondSmallest = temp1;
//     }    
// }
// console.log("Smallest element in array is:- "+smallest);
// console.log("Second smallest element in array is:- "+secondSmallest);


// Change the case of string without using builder function:- 

  //  let fullName  = "shivam ahlawat";
  //  
  //  function uppercase(str) {
  //           let char = '';
  //        for (const value of str) {
  //               char += String.fromCodePoint(value.codePointAt() - 32)
  //       }
  //        return char;
  //   }
  //    let string = uppercase(fullName);
  //    console.log(string);

  //    let fullName = "SHIVAM AHLAWAT";
    
  //    function lowerCase(str) {
  //      let char = '';
  //      for (const value of str) {
  //          char += String.fromCodePoint(value.codePointAt() + 32)
  //      }
  //      return char;
  //    }
  //    let string = lowerCase(fullName);
  //    console.log(string);

// Sorting in an array 

//   let array = [99,11,3,55,66,70,20,1];
//   for (let i = 0 ; i < array.length ; i++) {
//       console.log(array[i]);
//   }
//   // Sorting
//   let array1 = array;
//   for (let i = 0; i < array1.length; i++) {
//       for(let j = i+1 ; j <array1.length ; j++){
//           if(array1[i] > array1[j] ){
//   
//               let temp = array1[i];
//               array1[i] = array1[j];
//               array1[j] = temp;
//           }
//       }
//   }
//   
//   console.log("After Sorting");
//   for (const value of array1) {
//     console.log(value);
//   }
//    // Searching of the element  :- 
// 
//     let find = 55;
//     let f = 0;
//     for(let i = 0 ; i<array1.length ; i++){
//         
//         if(array1[i]=== find){
//             f=2;
//             console.log(find+" --> Found element at :- array["+i+"]");
//         }
//     } 
//     if(f===0){
//         console.log(find+" --> Element Not Found!!!");
//     } 
//         
//   
//   // Reverse of the Array:- 
//   console.log("Reverse of this Array:- ");
//   let array2 = array1;
//   
//   for(let i = array2.length-1; i >= 0 ; i--){
//     console.log(array2[i]);
//   }

// Concat an Array 

 // let arr1 = [1,2,3,4,5,6,7,8];
 // let arr2 = [9,10,11,12,13,14,];
 // 
 // let arr3=[];
 // let ind3 = 0;
 // 
 // // inserting the elements of arr1 in arr3
 // for(let i = 0 ; i < arr1.length ; i++){
 //   arr3[ind3] = arr1[i];
 //   ind3++;
 // }
 // 
 // // inserting the elements of arr2 in arr3
 // for(let i = 0 ; i < arr2.length ; i++){
 //   arr3[ind3] = arr2[i];
 //   ind3++;
 // }
 // 
 // // After Concat
 // console.log(arr3);

// Multidimensional Array to Single Array

 //  let arr1 = [[10,20,20] , [40,50,60,60] , [90,100]];
 //  
 //  let arr2 = [];
 //  
 //  for(let i = 0 ; i < arr1.length ; i++){
 //    for(let j = 0 ; j < arr1[i].length ; j++){
 //        arr2.push(arr1[i][j]);
 //    }
 //  }
 //  // After Converting......
 //  console.log(arr2);
 //  
 //  // Duplicate :-
 //  let arr3 = []; 
 //  for(let i = 0 ; i < arr2.length ; i++){
 //    let temp = 0;
 //    for(let j = 0 ; j < arr3.length ; j++){
 //      if(arr2[i] === arr3[j]){
 //        temp = 1;
 //        break;
 //      }
 //    }
 //    if(temp === 0){
 //    arr3.push(arr2[i]);
 //    }
 //  }  
 //  
 //  console.log(arr3);


 // Write a function to calculate the age of any Person:- 

 //  function calAge(){
 //  
 //   let name = prompt("Enter your name");
 //   console.log("Your Name:- "+name);
 // 
 //   let dob = prompt("Enter your Date of Birth");
 //   console.log("Your Date of Birth is:- "+dob);
 //  
 //   let now = Date.now(); 
 //   let cnow = Math.floor(now/1000/60/60/24/365);
 //   //console.log(cdob);
 //  
 //   let date = Date.parse(dob);
 //   let cdate = Math.floor(date/1000/60/60/24/365);
 //   //console.log(cdate);
 //  
 //   let Age = cnow - cdate;
 //   console.log("Your Age is:- "+Age);
 //  }
 //  calAge();















 

  





  









