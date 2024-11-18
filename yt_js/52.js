//function return function

// function outerFun(){
//     function innerFun(){
//         // console.log('hello world')
//         return 'hello world';
//     }
//     return innerFun;
// }
// const ans = outerFun();
// console.log(ans); //ƒ innerFun(){
// //     console.log('hello world')
// // }
// console.log(ans());




function printfullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName)
        // return 'hello world';
    }
    return printName;
}

const fullName = printfullName('kishan', 'kumar');
fullName();

console.log('------------------------------------------------------')



function hello(x){
    const a = 'varA';
    const b = 'varB';

    return function(){
        console.log(a,b,x);
    }
}
const ans = hello('arg');
ans();



console.log('------------------------------------------------------')


// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }

// }
// const square = myFunction(2);

// const ans1 = square(3);
// console.log(ans1)

// const cube = myFunction(3);

// const ans2 = cube(3);
// console.log(ans2)



const myFunction = (power) => (number) => number ** power;
 
        
    


const square = myFunction(2);

const ans1 = square(3);
console.log(ans1)

const cube = myFunction(3);

const ans2 = cube(3);
console.log(ans2)



console.log('------------------------------------------------------')



function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log('Hi You Called Me');
            counter++;
        }else{
            console.log('Mai already ek bar call ho chuka hu');
        }
    }
}

const myFunc = func();
myFunc();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();
myFunc2();
