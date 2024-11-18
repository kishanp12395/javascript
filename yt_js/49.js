// How javaScript works

// console.log(this);//{window}
// console.log(window);//{window}
// console.log(firstName);//undefined
// var firstName = 'kishan';
// console.log(firstName);//kishan



console.log(this);//{window}
console.log(window);//{window}
console.log(myFunction);//pura function jisa likha hai waisa hi
console.log(fullName); //undefined
console.log(firstName);//undefined 
console.log(lastName);//undefined

function myFunction(){
    console.log('this is myFunction');
};

var firstName = 'kishan';
var lastName = 'kumar';
var fullName = firstName+" "+lastName;

console.log(firstName);//kishan 
console.log(lastName);//kumar
console.log(fullName);//kishan kumar