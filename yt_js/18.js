
// forEach

// const numbers = [4,5,2,6,7,8];

// numbers.forEach(function(num, index){
//     console.log(`The multiplay of ${num}*2 : ${num*2}`); //iterate thus line
// });



const users = [
    {firstName:'kishan',age:'23'},
    {firstName:'aman',age:'22'},
    {firstName:'pwan',age:'34'},
    {firstName:'saman',age:'45'},
];


// 1 forEach
// users.forEach(function(user){
//     console.log(user.firstName);
// });



// //2 for of
// for(let user of users){
//         console.log(user.firstName);
// }



//3 using arrow function
users.forEach((user,i)=>{
    console.log(user.firstName,i);
});