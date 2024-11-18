
//.................learn arrow function.................


// //function decleration

// function myBirthday(){
//     console.log("Happy Birthday kishan...")
// }
// myBirthday();






// // function expression

// const myBirthday = function(){
//     console.log("Happy Birthday kishan...")
// }
// myBirthday();






//arrow function 1
const myBirthday = () => {
    console.log("Happy Birthday kishan...")
}
myBirthday();







//arrow function 2
const sum = (num1, num2, num3) => {
    return num1+num2+num3;
}

const addedValue = sum(90,10,100);
console.log(addedValue);







//arrow function 3 
//skip parenthesies when single parameter
const isEven = num => {  //const isEven = (num) =>  agar 1 hi paramater hai to skip the parenthesies
    return num % 2 === 0;
}
console.log(isEven(5));
console.log(isEven(4));



//another way of writing above function 3 ⬆️
// if single line statement then skip curly braces and return keyword
const evenNum = num => num % 2 === 0;
console.log(evenNum(6));