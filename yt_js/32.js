//optional chaining

const user = {
    firstName:'kishan',
    // address:{houseNumber: '1234'}
}

console.log(user?.firstName);
// console.log(user.address.houseNumber);
console.log(user?.address?.houseNumber);
