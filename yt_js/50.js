//hoisting
//global execution context

//in case of var keyword

var age;

console.log(age);
// age = 24;

// var age = 24;





// hoisting in function
//function declaration

console.log(myFunction);//f() pura function code
myFunction();//hello
function myFunction(){
    console.log('hello');
}
myFunction();//hello



// //function expression

// console.log(myFunction);//undefined
// // myFunction();//error
// var myFunction = function(){
//     console.log('hello');
// }
// myFunction();//hello




// // arrow function


// console.log(myFunction)//undefined
// // myFunction();//error
// var myFunction = () => {
//     console.log('hello');
// }
// myFunction();//hello

