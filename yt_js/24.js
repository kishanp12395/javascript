//every()


const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>{
    return number%2===0;
})
console.log(ans);//true




// check price less than 30000
const userCart = [
    {productId:1, productName:'mobile', price: 20000},
    {productId:2, productName:'laptop', price: 90000},
    {productId:3, productName:'mouse', price: 200},
    {productId:4, productName:'charger', price: 700},
    {productId:5, productName:'keyboard', price: 1500},
    {productId:6, productName:'usbcable', price: 400},
    {productId:7, productName:'cover', price:250},
    {productId:8, productName:'glass', price: 20},
    {productId:9, productName:'earbud', price:30000},
    {productId:10, productName:'pendrive', price:700},
];

const prodPrice =  userCart.every((cartItem)=>{
    return cartItem.price<50000;
});

console.log(prodPrice);