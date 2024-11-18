//array
// let fruits = ['apple','mango','grapes'];
// let number = ['1','2','3','4'];
// let mixed = ['1','2.4','string','null','undefined'];

// console.log(fruits,number,mixed);
// console.log(fruits[0],number[1],mixed[2]);

// let fruits = ['apple','mango','grapes'];
// console.log(fruits);//original array

// fruits[1] = 'banana';

// console.log(fruits);//updated array
// console.log(typeof fruits);//object

// console.log(Array.isArray(fruits));


// let fruits = ['apple','mango','grapes'];

// // fruits.push('berry')
// addedElement = fruits.push('berry');
// console.log(addedElement);
// console.log(fruits);//add last of array

// // fruits.pop();
// // console.log(fruits.pop());
// removedElement = fruits.pop();
// console.log(removedElement)
// console.log(fruits);//remove last of array



// let fruits = ['apple','mango','grapes'];
// // fruits.unshift('banana');
// console.log(fruits.unshift('banana'));
// console.log(fruits);//add element at start

// // fruits.shift();
// console.log(fruits.shift())
// console.log(fruits);//remove element from start



// let arr1 = ['1','2'];
// let arr2 = ['1','2'];

// console.log(arr1 === arr2);

// console.log(arr1);
// console.log(arr2);

// arr1.push('3');
// console.log(arr1);
// console.log(arr2);



// let arr1 = ['1','2'];
// let arr3 = ['4','5'];

// console.log(arr1);
// console.log(arr3);
// // let arr2 = arr1.slice();
// // let arr2 = [].concat(arr1);
// arr1.push('3');   // change in one variable effect other
// let arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);
// console.log(arr1 === arr2); //false





let arr1 = ['1','2'];
let arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr1.push('3'); //change in one variable effect other
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2); //true





let num1 = 7;
let num2 = num1;
console.log('num1',num1);
console.log('num2',num2);

//change value of num1
num1++;//change in one variable won't effect other
console.log('num1',num1);
console.log('num2',num2);

