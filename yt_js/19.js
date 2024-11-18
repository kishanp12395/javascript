// map method

const numbers = [2,4,3,5];



////with saprate function

// const square = function(number){
//     return number*number;
// }
// const squareNum = numbers.map(square);
// console.log(squareNum);



// //with function keyword
// const squareNumber = numbers.map(function(number){
//     return number*number;
// });
// console.log(squareNumber);


// //with arrow function

// const squareNumber = numbers.map((number)=>{
//     return number*number;
// });
// console.log(squareNumber);




const users = [
    {firstName:'kishan',age:'23'},
    {firstName:'aman',age:'22'},
    {firstName:'pwan',age:'34'},
    {firstName:'saman',age:'45'},
];


const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames);
