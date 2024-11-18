//maps()

// // before studying maps() take a glimps of object.
// // object literal
// // key --> string
// // key --> symbol
// const person = {
//     firstName:'kishan',
//     age: 7,
//     1:'one'
// }
// console.log(person.firstName);
// console.log(person['firstName']);
// console.log(person[1]);

// for(let key in person){
//     console.log(typeof key)
// }




//map()
// key value pair
// key can be any type

const person = new Map();

//add values
person.set('fname','kishan');
person.set('age',24);
person.set(1,'one'); //1 as key is not string it is number
person.set([1,2,3], 'one two three');
person.set({gender:'male'},'this is male');

console.log(person)

//access vlaues

console.log(person.get(1))
console.log(person.get('age'))

//print all keys
console.log(person.keys())

//iterate key
for(let key of person.keys()){
    console.log(key, typeof key)
}




console.log('for of loop')
//iterate using for of loop

// for(let key of person){
//     console.log(Array.isArray(key));//true
// }

// using array destructuring
console.log('using array destructuring')
for(let [key,value] of person){
    console.log(key,':',value);
}



const student = new Map([['firstName','kishan'],['age',24]]);
console.log(student)






// real concept

const person1 = {
    id:1,
    firstName:'kishan'
}

const extraInfo  = new Map();
extraInfo.set(person1, {age:8, gender:'male'});
console.log(person1.id);
console.log(extraInfo.get(person1).age);