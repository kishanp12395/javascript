//splice method

// start index, delete count , insert item

const myArray = ['val1', 'val2', 'val3', 'val4', 'val5'];

// //delete
// myArray.splice(1, 2);//index no 1 ae start karo or 2 items ko delete karpo
// console.log(myArray);// ['val1', 'val4', 'val5']
// //it also return deleted item


//insert
myArray.splice(1,1,'kishan');
console.log(myArray);

//it also return inserted items