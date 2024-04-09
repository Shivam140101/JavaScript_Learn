// let heading  = document.getElementById('heading');
// console.log(heading);

/* ****************************Get Elements **************************** */
// by id.....................

// element select by id:- 
// let heading  = document.getElementById('heading');
// 
// // change the context of element:-
// // heading.innerText = "Hello <button> ClickMe</button>";
// heading.innerHTML = "Hello <button> ClickMe</button>";
// 
// // Change the id of element:-
// heading.id = 'heading1';
// 
// // add/change the class of element:- 
// heading.className = 'red';
// 
// // add/change inline Styling:- 
// // heading.style.backgroundColor = 'red';
// // heading.style.color = 'white';
// // heading.style.padding = '10px';
// 
// // remove the element from DOM:-
// heading.remove();
// 
// console.log(heading);

// BY CLASSS............................

//  let heading = document.getElementsByClassName("heading");
//  console.log(heading);
//  
//  // heading[0].className = "heading red";
//  // heading[1].className = "heading red";
//  
//  for(const element of heading){
//      console.log(element);
//      element.innerHTML = "Heading Change";
//      element.className = "heading red";
//  }

// BY TAGSS..................................

// let heading = document.getElementsByTagName("h1");
// console.log(heading);
// 
//  // heading[0].className = "heading red";
//  // heading[1].className = "heading red";
//  // heading[2].className = "heading red";
// 
//  for(const element of heading){
//     console.log(element);
//     element.innerHTML = "Heading change";
//     element.className = "heading red";
//  }

// Query Selector....................................
 
 // by id
 //  let heading = document.querySelector('#heading');
// 
 // // by Class
 // let heading = document.querySelector('.heading');
// 
 // // by tags
 // let heading = document.querySelector('h1');

 // console.log(heading);

// Query SelectorAll................................

// by id
 //  let heading = document.querySelectorAll('#heading');
// 
 // // by Class
 // let heading = document.querySelectorAll('.heading');
// 
 // // by tags
  //let heading = document.querySelectorAll('h1');

 // console.log(heading);

// for(const element of heading){
//     console.log(heading);
//     element.innerHTML = "Heading Change";
//     element.className = "red";
// }

/* ************************* Create Element ************************ */

// let root = document.getElementById('root');
// 
// let div = document.createElement('div');
// div.innerText = "Hello from createElement";
// div.className = "red";
// console.log(div);
// 
// // root.append(div);
// 
// root.prepend(div);


/* ********************************* traversing ******************************/

// parent 
let heading = document.getElementById("heading");

// parent element 
//console.log(heading.parentElement);

//parentNode
//console.log(heading.parentNode );

//console.log(heading.parentElement);


// Children 
//let list = document.getElementById('list');

//textnode + tag
//console.log(list.childNodes);

// tag
//console.log(list.children);

// previous Siblings
//let anchor = document.getElementById('anchor');

//console.log(anchor.previousSibling);

//console.log(anchor.previousElementSibling);

// Next Siblings
// let anchor = document.getElementById('anchor');
// console.log(anchor.nextSibling);
// console.log(anchor.nextElementSibling );

//anchor.nextElementSibling.style.color = "red";












