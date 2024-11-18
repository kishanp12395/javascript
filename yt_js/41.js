

// const userMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`
//     },

//     is18 : function(){
//         return this.age >=18
//     },
//     sing : function(){
//         return 'la la la la la la laaaaaaaa laaaaaa'
//     }
// }


function createUser(firstName, lastName, email, age, address){

    const user = Object.create(createUser.prototype); // {}

    user.firstName = firstName;  
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    createUser.prototype.about = function(){
        return `${this.firstName} is ${this.age} years old`
    };
    createUser.prototype.is18 = function(){
        return this.age >=18
    };
    createUser.prototype.sing = function(){
        return 'la la la la la la laaaaaaaa laaaaaa'
    }
       
    // user.about = userMethod.about;
    // user.is18 = userMethod.is18;
    // user.sing = userMethod.sing;

    return user;

}

const user1 = createUser('kishan', 'prajapati', 'kkp12395@gmail.com', 24, "133, vill-ramapur , ayodhya, u.p")
const user2 = createUser('kirti', 'prajapati', 'kirtip12395@gmail.com', 7, "133, vill-ramapur , ayodhya, u.p")

console.log(user1);

console.log(user1.is18());
console.log(user2.is18());
console.log(user2.about());


  