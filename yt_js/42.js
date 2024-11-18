//new keyword

function createUser(firstName,age) {
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}

const user1 = new createUser('kishan', 23);

user1.about();