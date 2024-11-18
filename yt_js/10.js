// object inside array

//usefull in real world applicaion

//mostly use for/ for of loop

const users = [
    {userId:1,firstName:'kishan',gender:'male'},
    {userId:2,firstName:'aman',gender:'male'},
    {userId:3,firstName:'preeti',gender:'female'}, 
]
 
// console.log(users)

// for(let user of users){
    
//     // console.log(user)
//     console.log(user.userId)
//     console.log(user.firstName)
// }


// nested destructuring

// const [user1,user2,user3] = users;

// console.log(user1)
// console.log(user2)
// console.log(user3)


const [{firstName, userId}, ,{gender:myGender}] = users;
console.log(firstName,userId);
console.log(myGender);
