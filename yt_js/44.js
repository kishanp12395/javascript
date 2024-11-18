let numbers = [1,2,3];

// let numbers = new Array(1,2,3);
console.log(Array.prototype);
console.log(Object.getPrototypeOf(numbers));
console.log(numbers);


function hello(){
    console.log('hello');
}

console.log(hello.prototype)

//change prototype 

hello.prototype = [];

console.log(hello.prototype);
hello.prototype.push('kishan')
console.log(hello.prototype);




// internally javascript new keyword ka use kar ke prototype banata hai
