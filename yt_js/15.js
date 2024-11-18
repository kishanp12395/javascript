// default parameter
//rest parameter


// // old way
// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b=0;
//     }
//     return a+b;
// }
// const ans = addTwo(4,5)
// console.log(ans);





// // new way introduced in ES6
// // default paramater

// function addTwo(a,b=0){
//     return a+b;
// }
// const ans = addTwo(4)
// console.log(ans);




// //rest parameter
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`,c);
// }

// myFunc(1,2,3,4,5,6,7,8,9,0);  // a ki value 1, b ki 1,   baki rest ki c me in form of array




// //rest parameter

// function addAll(...numbers){

//     let total = 0;
//     for(number of numbers){
//         total = total + number;
//     }
//     return total;
// }
// const ans = addAll(1,2,3,4,5);
// console.log(ans)




// param destructuring
const person = {
    firstName : 'kishan',
    gender : 'male'
}


// function personDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
// personDetails(person);




function personDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
personDetails(person);
