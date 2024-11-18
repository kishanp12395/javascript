//set()

// const numbers = new Set([1,2,3,4,5]);
// console.log(numbers);//{1, 2, 3, 4, 5}




const items = ['1','2.4','kkp','true'];

const numbers = new Set(); //empty set
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
numbers.add(items);
// numbers.add(items);//not added because duplicate is not allowed

//but

numbers.add([1,2]);
numbers.add([1,2]);//add these two array because in memeory each array has different address
console.log(numbers);

console.log(numbers.has(1));//true
console.log(numbers.has(9));//false

console.log('for of loop');


for(let number of numbers){
    console.log(number)
}


// example

const myArray=[1,2,3,4,4,5,5,1,3,6,7,6,8,8,9,3];
const uniqueElements = new Set(myArray);

console.log(uniqueElements); 
// console.log(uniqueElements.length); //undefined


//to find length
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length)
