const key = 'email';

const person = {
    name:"kishan",
    age:24,
    'person hobbies':['book reading','listning music']
};

console.log(person['person hobbies']);
person[key] = 'kishanp12395@gmail.com';//do not write like ['key']

console.log(person);
