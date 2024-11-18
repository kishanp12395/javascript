// fill method
// value, start index, end index

const myArray = new Array(10).fill(-1);
//const myArray = new Array(length of array).fill(what to fill in array);

console.log(myArray);


const arr = [1,2,3,4,5,6,7,8,9];
arr.fill(0,2,6);
console.log(arr)//[1, 2, 0, 0, 0, 0, 7, 8, 9]

//it change the original array`