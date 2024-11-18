// learning this keyword

// const person = {
//     firstName:'karan',
//     age:19,
//     about:function(){
//         console.log(`person name is ${this.firstName} and his age is ${this.age}`)
//         console.log(this)
//     }
// }

// person.about();


function personInfo(){
    console.log(`person name is ${this.firstName} and his age is ${this.age}`)
}

const person1 = {
    firstName:'kishan',
    age:23,
    about:personInfo
}

const person2 = {
    firstName:'karan',
    age:19,
    about:personInfo
}

const person3 = {
    firstName:'suman',
    age:12,
    about:personInfo
}

person1.about()
person2.about()
person3.about()