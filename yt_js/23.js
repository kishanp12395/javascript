
//find()

const myArray = ['hello', 'kkp', 'aman', 'sakshi'];

// function isLength3(string){
//     return string.length === 3;
// }

const ans = myArray.find((string)=>{
    return string.length===3;
});
console.log(ans);//it matches that which string has length three in array
//it shows only first occurence




const users = [
    {userId:1, userName:'kishankumar'},
    {userId:2, userName:'ankit'},
    {userId:3, userName:'summmit'},
    {userId:4, userName:'prrtikii'},
];

const res = users.find((user)=>{
    return user.userId===3;
})
console.log(res);