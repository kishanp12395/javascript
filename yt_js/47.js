// getter and setter

//getter
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

}

const person1 = new Person('kishan' ,'prajapati', 23);
console.log(person1.firstName)

// console.log(person1.fullName()); //here it generate error

//use fullName without () as property
// matlab method ko call karne k liya () na lagana pade
// get ke help se method  property ke taraha trear hoga
console.log(person1.fullName); //use get infront of your method



console.log("------------------------------------------")



//change name
class Student{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    //hume firstName or lastname ko change karna hai
    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

const student1 = new Student('kishan' ,'kumar', 23);
console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.fullName); 

student1.setName('krishna', 'prajapati');
// student1.firstName = 'krishna';//these are same
// student1.lastName = 'prajapati'

console.log(student1.firstName)
console.log(student1.lastName)
console.log(student1.fullName); 


console.log("------------------------------------------")


//setter
class Stu{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" "); //[aman, kumar]
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const stu1 = new Stu('kishan' ,'prajapati', 23);
console.log(stu1.firstName)
console.log(stu1.lastName)

console.log(stu1.fullName); 

stu1.fullName = 'aman kumar';
console.log(stu1);
console.log(stu1.fullName);


console.log("------------------------------------------")
