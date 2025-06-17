// FIRST YT VIDEO

// to check script in index is working or not alert("retry");

// learning array 
// foreach map filter find indexof 
// array -> var arr = [1,2,"hey",function(){},array]

var arr = [1,2,3,4];

// 1. for each 
// arr.forEach(function(val){
 
//  console.log(val + " hello");
// })

// 2. MAP (to create new array from existing array)
// existing array work with blank array(same spaces) and gives 
// new array (where for each donot give new array)
 
//  var new_arr = arr.map(function(val){
//   return (val + 12) ;
//  })
//  console.log(new_arr);

// 3.FILTER 
// to create new array which can be bigger than or 
// less than existing array
 
//  var new_arr = arr.filter(function(val){
//     if (val>=2){
//         return true;}
//     else{
//       return false;
//     }
//  })
// console.log(new_arr);

// 4. FIND (no new array is formed)
// var new_arr = arr.find(function(val){
//     if (val === 2)
//     return true;
// })
// console.log(new_arr);

// 5. INDEX OF 
// arr.indexOf();


// OBJECT (Any thing inside curly braces )

// can be accessed as obj.name and obj['name']
// var obj = {
//   name: "Arjun",
//   age: 22

// }
// Object.freeze(obj); // fix declare garna ko lagii 
// obj.age = 21;


// FUNCTION

 // we can find length of object same as like arrray 
 // because func is also array in js 
//  function abcd(x,y,z){

//  }

//function call 
// function abcd(){
//     return "hello world";
// }

// abcd(); // control moves to line 71


// ASYNC 
// sync = which run line by line 
// first sync code are run by putting them in main stack 
// where as at the same time async code are kept in side stack 
// and when sync code is executed then async code is put into 
// main stack from side stack 

// anything return by fetch is blob 
// and blob is converted as blob.json()

// async function abcd(){
//    await fetch(``)

// }