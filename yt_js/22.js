//sort()


const users = ['kishan', 'aman', 'sunny', 'KKP','ALP'];
users.sort();
console.log(users) //['ALP', 'KKP', 'aman', 'kishan', 'sunny']


const numbers = [5,9,1200,400,3000];
// numbers.sort();
// console.log(numbers)//[1200, 3000, 400, 5, 9] not properly


numbers.sort((a,b)=>{
    return a-b;
});
console.log(numbers); // ascending order [5, 9, 400, 1200, 3000]




numbers.sort((a,b)=>{
    return b-a;
});
console.log(numbers); // descending order [3000, 1200, 400, 9, 5]




//price low to high

const products = [
    {productId:1, productName:'mobile', price: 300},
    {productId:2, productName:'mouse', price: 500},
    {productId:3, productName:'pc', price: 9000},
    {productId:4, productName:'charger', price: 200},
    {productId:5, productName:'tv', price: 3000}
]

// products.sort((a,b)=>{
//     return a.price - b.price;
// })
// console.log(products);

// store in new variable
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})
console.log(lowToHigh);


const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
})
console.log(highToLow);