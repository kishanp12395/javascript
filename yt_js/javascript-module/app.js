
import { firstName as fname} from "./utils/fname.js";
import { age } from "./utils/age.js";
import Person, {Person2}  from "./utils/person.js";
import welcome from "./utils/fname.js";


console.log(fname, age) 

const person = new Person2("kishan", "kuamr", 24)
console.log(person)
// person.info()

console.log(welcome)