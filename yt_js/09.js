//object destructuring


// //old way

// const person={
//     name:'kishan',
//     age:'23'
// }

// // const stuName = person.name;
// // const stuAge = person.age;
// // console.log(stuName,stuAge);





//new way

const person = {
        myName:'kishan',
        age:'23',
        course:'b.tech',
        
        year:'2023',
        roll:'123'
    };

const { myName, age, course, ...rest } = person;

console.log(myName);
console.log(age);
console.log(course);
console.log(rest);




// //access by pseudo name

// const person = {
//             name:'kishan',
//             age:23,
//             course:'b.tech'
//         };
        
// const { name:myName, age:myAge, course:myCourse } = person;
    
// console.log(myName);
// console.log(myAge);
// console.log(myCourse);