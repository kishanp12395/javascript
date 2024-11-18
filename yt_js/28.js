// iterables
// jispe hum for of loop laha sakein
// dtring , array are iterable

//string
const fName = 'Kishan';
for(let char of fName){
    console.log(char);
}


//array
const items = ['1','2.4','kkp','true'];

for(let item of items){
    console.log(item);
}


// //object
// const persons = {
//     pname:'kishan',
//     age:24,
//     gender:'male'
// }
// for(let person of persons){
//     console.log(person) //Uncaught TypeError: persons is not iterable
// }



//array like object
// jinke pass lenght property ho
// aur jinko hum index se access kar sakte ho

const myName = 'Kishan';
console.log(myName.length);
console.log(myName[3]);