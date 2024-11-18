const addNum = (a,b) => a + b;//single line statament

const result = addNum(9,8);
console.log(`Sum of num = ${result}`);

//arrow function syntax

// ()=>{

// }

let myFun = (a,b,c)=>{
    //multiple line statemet
}



let sum = (a,b) =>{
    let result = a + b;
    return result;
}
console.log(sum(10,90));


//regular function

let multiply = function(x,y){
    return x * y;
};

let multiple = (x,y)=> x*y;


//arrow function with no argument

const hello = () => "hello wprld!!!";
console.log(hello());


//arrow function with one argument
const square = x => x*x;
console.log(square(5));