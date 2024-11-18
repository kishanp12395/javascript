//function
 
// function decleration

// function welcome(){
//     console.log('Welcome to This Party');
// }
// welcome()
// welcome()
// welcome()
// welcome()

// function add(){
//     return 2+5;
// }
// const returnedValue = add();
// console.log(add())

// function sum(num1, num2, num3){
//     return num1+num2+num3;
// }

// const addedValue = sum(90,10,100);
// console.log(addedValue);




// //isEven
// //true
// //false
// function isEven(num){
//     if(num%2==0){
//         return true;
//     }
//     // else{
//     //     return false;
//     // }
//         return false;
// }
// console.log(isEven(5));
// .
// .
// .
// ⬇️
//make it shorter

function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(5));//false
console.log(isEven(4));//true





// input : String
// output: firstCharacter
function firstchar(str){
    return str[0];
}
console.log(firstchar('kishan'));//k





//function
//input: array, target(num)
//output: index of target if present in array if not return -1

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,5,8,9,4,6,2,7,90,60];
const myTarget = 60;
console.log(findTarget(myArray,myTarget))



//another way to declear function

//function expression
// we can say that an anonmous function stored in variable
const myBirthday = function(){
    console.log("Happy Birthday kishan...")
}
myBirthday();
 //we convert all above functions in function expression.


//  function foo(a, a) {
//     console.log(a);
//  }
//  foo(1, 2);