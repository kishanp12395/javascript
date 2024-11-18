//class
//class are fake in javaScript

class CreateUser{
        constructor(firstName, lastName, email, age, address){
            console.log('constructer called')
            this.firstName = firstName;  
            this.lastName = lastName;
            this.email = email;
            this.age = age;
            this.address = address;
        }

        about(){
            return `${this.firstName} is ${this.age} years old`
        }
        is18(){
            return this.age >=18
        }
        sing(){
            return 'la la la la la la laaaaaaaa laaaaaa'
        }
        addNum(a,b){
            return a+b;
        }
}
 



// // /constructor function == the function which create object
// function CreateUser(firstName, lastName, email, age, address){

//     // const user = Object.create(createUser.prototype); // {}


//     this.firstName = firstName;  
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;

//     CreateUser.prototype.about = function(){
//         return `${this.firstName} is ${this.age} years old`
//     };
//     CreateUser.prototype.is18 = function(){
//         return this.age >=18
//     };
//     CreateUser.prototype.sing = function(){
//         return 'la la la la la la laaaaaaaa laaaaaa'
//     }
       
//     // user.about = userMethod.about;
//     // user.is18 = userMethod.is18;
//     // user.sing = userMethod.sing;

//     // return user;

// }



const user1 = new CreateUser('kishan', 'prajapati', 'kkp12395@gmail.com', 24, "133, vill-ramapur , ayodhya, u.p")
const user2 = new CreateUser('kirti', 'prajapati', 'kirtip12395@gmail.com', 7, "133, vill-ramapur , ayodhya, u.p")

// console.log(user1);
console.log(user1.firstName);
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));

console.log(user1.addNum(2,8))






  