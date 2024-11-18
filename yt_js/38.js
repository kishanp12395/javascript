// const obj1 = {
//     key1:'kkp',
//     key2:23
// }
//  const obj2 = {
//     key3: 'kumar'
//  }
//  console.log(obj1.key1)//kkp
//  console.log(obj2.key3)//kumar
//  console.log(obj2.key1)//undefined

// // obj2 ke help se key1 jo obj1 me hai usko access nahi kar paa raha hu
// //isko karna k liya ek new way se empty object banayange




const obj1 = {
    key1:'kkp',
    key2:23
}

//new way to create empty object
const obj2 = Object.create(obj1); //yaha obj2 ka __proto__ obj1 set ho raha hai

//  console.log(obj2); //{}

// obj2.key2 = 'val2';
obj2.key3 = 'val3';

console.log(obj2.key3); //val3
console.log(obj2.key1); //kkp
//iss method se hum obj1 ke key1 ko obj2 se bhe accesss kar sakte hai
console.log(obj2.key2); //val2

//yaha javaScript sabse phele obj3 me check karege ke koi key2 hai k nahi agar 
//hogi to wahi access karage
//agar nahi hogi to obj1 me check karagi or key2 ko access karage 

// console.log(obj1)
// console.log(obj2)

//{key3: 'val3'}
/*[[Prototype]]: Object
key1: "kkp"
key2: 23 */

// in official ecmaScript documentation 
// __proto__  is same  [[prototype]] also called dunder bur prototype is different used in function

console.log(obj2.__proto__);//{key1: 'kkp', key2: 23}