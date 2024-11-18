


//callback in synchronous prog


// function myFunc(callback) {
//     console.log("Function is doing some task");
//     callback();
// }


 
// // function demo() {
// //     console.log("Function doing demo..........");
// // }

// // myFunc(demo)


// //instead of doint that


// myFunc(()=>{
//     console.log("Function doing demo..........");
// })











//


// //1
// function getTwoNumbersAndAdd(number1, number2, callback){
//     console.log(number1, number2)
//     callback(number1,number2)

// }

// function addTwoNumber(num1, num2){
//     console.log(num1+num2)

// }
// getTwoNumbersAndAdd(4,5,addTwoNumber)






// //2
// function getTwoNumbersAndAdd(number1, number2, callback){
//     if(typeof number1 === "number" && typeof number2 === "number"){

//         callback(number1,number2)
//     }
//     else{
//         console.log("wrong datatype");
//     }

// }

// function addTwoNumber(num1, num2){
//     console.log(num1+num2)

// }
// getTwoNumbersAndAdd(4,5,addTwoNumber)





//3 ✔️✔️✔️✔️✔️✔️✔️

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
    if(typeof number1 === "number" && typeof number2 === "number"){

        onSuccess(number1,number2)
    }
    else{
        onFailure();
    }

}

// getTwoNumbersAndAdd(4,5,(num1,num2)=>{
//     console.log(num1+num2)
// },()=>{
//    console.log("Wrong data type...") 
//    console.log("Please pass number only...")
// })


function addTwoNumber(num1, num2){
    console.log(num1+num2)
}
function onFail(){
    console.log("Wrong data type...") 
    console.log("Please pass number only...")
}


getTwoNumbersAndAdd(4,5,addTwoNumber, onFail)
