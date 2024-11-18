//block scope
{
    let num = 10;
    // calling function inside block

    // the (let) num variable is block-scoped and it cannot be accessed outside the block. If we try to access the variable outside the block it throws a reference error.

    console.log(num)
}
//calling function outside block
// console.log(num)  

//it throw an error Uncaught ReferenceError: num is not defined

// if we use var keyword in place of let it can be accessed from anywhere inside or outside the block without throwing any error



//global scope

let num1 = 80;

function fun() {
    console.log(num1);
}
fun();
console.log(num1);//access outside the function



//function scope

function fun() {
    let num2= 50;
    console.log(num2);
}
fun();
console.log(num2); // cannot access outside the function

