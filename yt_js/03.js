//array destructuring

// //old method of array destructuring
// const arr = ['v1','v2'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);


// new array destructuring
const myArr = ['v1','v2','45','78','334','67','437'];

myArr[0] ='kishan'

let [var1,var2,var3,...var4]= myArr;

console.log(myArr);
console.log(var1,var2,var3,var4);


//default value

let a,b;
[a = 12,b = 5] = [10,45];  //a = 10 b = 5 
console.log(a);
console.log(b);


//swaping

let c = 20, d = 30;

[c,d] = [d,c]

console.log('c: '+c); //30
console.log('d: '+d); //20