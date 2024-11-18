//iterate object 


const person = {
    name:"kishan",
    age:24,
    'person hobbies':['book reading','listning music']
}; 

//for in loop

for (let key in person){
    // console.log(key);// iss key ke under sari keys ayangi
    // console.log(person.key)// it show undefined
    // console.log(person[key]); //yaha hume value dega
    console.log(`${key}:${person[key]}`)
};



// object.keys
console.log(Object.keys(person));//it gives array


let value = Object.keys(person);

for (let key of value){
    // console.log(key);//only keys
    console.log(person[key]);//only values
}