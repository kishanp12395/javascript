// this with arrow function


const user3={
    firstName:'kishan',
    age:8,
    about:()=>{
        console.log(this.firstName,this.age)
    }
}

user3.about();//undefined undefined
user3.about(user3);
user3.about.call(user3);
