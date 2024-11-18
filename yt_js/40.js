// finction --> finction + object

function hello(){
    console.log('hello world')
};

console.log(hello.name)// give the name of function

console.log(hello.prototype);// {} free space

// add property in free space of function which treat as oject

hello.prototype.color = 'black';
hello.prototype.price = 3400;
hello.prototype.brand = function(){
    return 'safari 9 , ultra indian season pack';
}

console.log(hello.prototype);

console.log(hello.prototype.brand());