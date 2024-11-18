//proto, prototype, class

// const user1 = {
//     firstName: 'kishan',
//     lastName: 'prajapati',
//     email: 'kishanp123952gmail.com',
//     age: 23,
//     address: '133, ramapur, 224141, uttar pradesh',
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age >=18;
//     }
// }
// const aboutUser = user1.about()
// console.log(aboutUser);




//suppose we have millions of user so how can we manage

// function ( that function create object)
//add key value pair
//object ko return karega

function createUser(firstName, lastName, email, age, address){
    const user = {};

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    };

    user.is18 = function(){
        return this.age >=18;
    }

    return user;

}

const user1 = createUser('kishan', 'prajapati', 'kkp12395@gmail.com', 24, "133, vill-ramapur , ayodhya, u.p")
console.log(user1);

const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);
//yaha bhaut kamayin hai jise hum next file me dur karne wale hai...37.js