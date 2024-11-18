
//static method and properties
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

    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 5;
    }

    isCute(){
        return true;
    }

    static classInfo(){
        return 'This is stu info class'
    }

    static color = 'This is static color'
}

const stu1 = new Stu('kishan' ,'prajapati', 23);

console.log(stu1.isSuperCute());

//ststic method ko kewal parent class se access kar sakte hai
const info = Stu.classInfo()//is method ko call karne k liya object banane ke jarurat nahi hai ,class ke name se call ho jyaga
console.log(info)

console.log(Stu.color);