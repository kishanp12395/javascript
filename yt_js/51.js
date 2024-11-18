// //function execution context

// let foo = 'foo';
// console.log(foo);
// function getFullName(firstName, lastName){
//     console.log(arguments);
//     let myVar = 'var inside func';
//     console.log(myVar);
//     const fullName = firstName+ " " +lastName;
//     return fullName;
// }

// const personName = getFullName('kishan', 'kumar');
// console.log(personName);




//lexical environment / scope chain

const lastName = 'kumar';
const printName =function(){
    const firstName = 'kishan';
    console.log(firstName);
    console.log(lastName);
}
printName();