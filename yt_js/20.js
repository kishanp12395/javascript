// filter method

const numbers  = [1,2,3,4,5,6,7,8,9];

// const isEven= function(number){
//     return number%2==0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);



const evenNumbers = numbers.filter((number)=>{
        return number%2==0;

});
console.log(evenNumbers);