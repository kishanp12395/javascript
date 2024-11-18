// callback function

// function myFunc(a){
//     console.log(a);
//     // console.log('hello world');

// }
// myFunc('kishan');
// myFunc(23);
// myFunc([1,2.6,'hi']);
// myFunc({fname : 'kishan'});




// ///callback function 
// //no

// function callbackFunc(){
//     console.log("Inside the callback function...");
// }


// function normalFunc(){

// }
// normalFunc(callbackFunc());






//** imp/
function callbackFunc(){
    console.log("Inside the callback function...");
}


function normalFunc(callback){
    callback();
}
normalFunc(callbackFunc);




//** imp/
function callbackFunc(myName){
    console.log("Inside the callback function...");
    console.log(`My name is ${myName}`);
}


function normalFunc(callback){
    callback('Kishan Prajapati');
}
normalFunc(callbackFunc);