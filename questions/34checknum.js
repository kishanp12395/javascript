let checkNumber = (num)=>{
    if(num === 1) return (`${num} is Odd`);
    if(num === 0) return (`${num} is Even`);
    return checkNumber(num-2);
}
console.log(checkNumber(5));
console.log(checkNumber(30));
console.log(checkNumber(27));
console.log(checkNumber(9));
