// // console.log(this);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// // console.log(window);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// // // window===this



// function myFunc(){
//     console.log(this);
// };
// // myFunc()
// window.myFunc();

// // window is global object this === window




// function myFun(){
//     "use strict"
//     console.log(this);
// };
// myFun();//due to strict mode // undefined




// console.log(typeof window);// object







// call()

// function hello(){
//     console.log('hello world')
// }
// hello.call();
// hello(); 



// const user1={
//     firstName:'kishan',
//     age:8,
//     about:function(){
//         console.log(this.firstName,this.age)
//     }
// }


// const user2={
//     firstName:'amit',
//     age:22,
   
// }

// user1.about.call(user2)//this indicates user2 
// //about ko user1 se access karo or name ,age user2 se access karo





function about(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}

const user1={
    firstName:'kishan',
    age:8,
   
}


const user2={
    firstName:'amit',
    age:22,
   
}

about.call(user2,'reading book','arjit singh');
about.call(user1,' book',' singh');


//apply()
about.apply(user1,['flute','krishna nand']);











// don't do this mistake

const user3={
    firstName:'kishan',
    age:8,
    about:function(){
        console.log(this.firstName,this.age)
    }
}

const user4={
    firstName:'ankit',
    age:80,
    
}



const ddd = user3.about;//undefined undefined
ddd();
//uper ⬆️ jo undefined aa raha kuch is wajaha se aa raha hai...
//Example
const ddd1=function(){
    console.log(this.firstName,this.age)
};
ddd1();//is case me this , window ko represent kar raha hai na ki user ko


//right way to call method
const myFunc = user3.about.bind(user4);
myFunc();

//user3.about ka matlab hai kewal function ... 
//user3.about.bind(user3) iss traha se function ko user3 se bind kar rahe hai 
//tki user3 me about method property ko access kar sahe or
// ab this , user3 ko represent kar rraha hai