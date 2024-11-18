// function inside function

// const inside = () => {
    
//     const myFunc = () => {
//         console.log('hello my func');
//     }

//     const add = (num1, num2) => {
//         return num1+num2;
//     }

//     const mul = (num1, num2) => {
//         return num1*num2;
//     }

    
//     console.log('inside function');
//     myFunc();
//     console.log(add(6,4));
//     console.log(mul(6,4));
// };
// inside();





// // lexical scope
// function myApp(){

//     const myVar = 'value1';
    


//     function myFunc(){
//         // const myVar = 'value677664376';
//         console.log('this is myFunc', myVar);
//     }



//     console.log(myVar)
//     myFunc();
// }

// myApp();









// block scope vs function scope
// let and const are block scope , can't accesed outside the block
// var is function scope


// {
//     let fName = 'Kishan';
//     console.log(fName);
// }
// // console.log(fName);// try to access outside the scope it show error

// {
//     const fName = 'aman';
//     console.log(fName)
// }

// const fName = 'sakshi';
// console.log(fName);




// //concept of block using var
// //using var we access variable anywhere in the programm

// {
//     var firstName = 'karan';
//     console.log(firstName);
// }
// console.log(firstName);

// {
//     console.log(firstName);
   
// }





// if(true){
//     var firstName = 'krati';
//     // let firstName = 'krati';//can't access let name variable outside the scope it show error
//     console.log(firstName);
// }
// console.log(firstName);//show error





// // block using function

// function myApp(){
//     if(true){
//         let age = 23;
//         // var age = 23;//using var it accesss outside the block not by let or const
//         console.log(age);
//     }
//     // console.log(age); // can't access here outside the if block
// }
// myApp()