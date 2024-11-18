// //....................hoisting....................



// hoisting in function
hello();
function hello(){
    console.log('hello');//hello
}



hi();
const hi = function(){
    console.log('hi');//error

}


// hi();
// const hi = () => {
//     console.log('hi');//error

// }





// //hoisting in variable

console.log(age)// undefined but show error in case of let or const
// var age = 24;//undefined
// let age = 24;//error
// const age = 24;//error