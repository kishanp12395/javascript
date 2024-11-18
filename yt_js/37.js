

const userMethod = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },

    is18 : function(){
        return this.age >=18
    },
    sing : function(){
        return 'la la la la la la laaaaaaaa laaaaaa'
    }
}


function createUser(firstName, lastName, email, age, address){
    const user = {};

    user.firstName = firstName;  
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
      
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    user.sing = userMethod.sing;

    return user;

}

const user1 = createUser('kishan', 'prajapati', 'kkp12395@gmail.com', 24, "133, vill-ramapur , ayodhya, u.p")
console.log(user1);

const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);


const user2 = createUser('kirti', 'prajapati', 'kirtip12395@gmail.com', 24, "133, vill-ramapur , ayodhya, u.p")
console.log(user2);

const is18k2 = user2.is18();
console.log(is18k2);

const aboutk2 = user2.about();
console.log(aboutk2);
 
// next improvement in 39.js