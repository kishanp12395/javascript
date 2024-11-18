//object

//how to create object
const person = {
    name:"kishan",
    age:24,
    hobbies:['book reading','listning music']
}
console.log(person);

// //accesss of data form object( dot notation)
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

//access data using [] notation
console.log(person['name']);
console.log(person['age']);
console.log(person['hobbies']);

//how to add data to object
person.gender = 'male';

person['color'] = 'red';

console.log(person);
