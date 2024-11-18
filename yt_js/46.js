class Animal{ // parent class, 
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSupercute(){
        return this.age <= 5;
    }

    isCute(){
        return true;
    }
}

//these are child class, sub class , derived class
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }

     

}
class Cat extends Animal{

}



const tommy = new Animal('tommy',3);

const tiger = new Dog('tiger',4,70);  
const kittu = new Cat('kittu',5);

console.log(tommy);
console.log(tommy.eat());
console.log(tiger);
console.log(tiger.run())
console.log(tiger.eat())

console.log(tommy.eat())
console.log(tommy.isSupercute())

console.log(tiger.eat())

console.log(kittu.eat())
console.log(kittu.isSupercute())
 

   