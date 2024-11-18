function factorial(num){
    if(num > 1){
        return num*factorial(num-1)
    }else{
        return 1;
    }
}

let x = 5;

let res = factorial(x);
console.log(`Factorial of ${x} = ${res}`);