
// reduce()

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0);
console.log(sum);


// /accumulator   ,    currentValue  , return
//     1          ,          2       ,   3
//     3          ,          3       ,   6
//     6          ,          4       ,   10
//     10         ,          5       ,   15



const userCart = [
    {productId:1, productName:'mobile', price: 10000},
    {productId:2, productName:'laptop', price: 30000},
    {productId:3, productName:'tv', price: 20000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
},0);

console.log(totalAmount);