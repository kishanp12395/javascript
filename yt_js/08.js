//spread operater  in case of array

const arr1 = ['1','2','3'];
const arr2 = ['4','5','6'];

const newArray1 = [arr1,arr2]; //(2) [Array(3), Array(3)]
//0: (3) ['1', '2', '3']
//1: (3) ['4', '5', '6']
console.log(newArray1);

const newArray2 = [...arr1,...arr2];
console.log(newArray2); //['1', '2', '3', '4', '5', '6']

const str = 'kishan';
// const str = 12345; //number is not iterable
// const str = "12345"; //this is yes, iterable

// const newArray3 = [str];//['kishan']
const newArray3 = [...str];//['k', 'i', 's', 'h', 'a', 'n']
console.log(newArray3)



//spread operater  in case of object

const person = {
    name:'kishan',
    age:22,
    color:'red'
};

const marks = {
    hindi:90,
    eng:22,
    maths:89,
    science:90,
    sst:78
};

const personDetails = {...person,...marks,sports: 45}
console.log(personDetails);

const str1 = 'kumar' 
console.log({...str1});//index as key : character as value

const arr = ['item1','item2'];
console.log({...arr});//index as key : item as value
