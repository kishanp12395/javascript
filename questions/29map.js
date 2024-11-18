//empty map
let map1 = new Map();
console.log(map1);

//insert item in map
map1.set('info',{name:'kkp', age:24, roll:45, address:'ayodhya'});
map1.set('marks',{maths:90, english:80, science:89});
console.log(map1);

//use object and function as key
let map2 = new Map();
let obj = {1:'a', 2:'b'};

map2.set(obj,{name:'kirti', age:'23'});
console.log(map2);


// access map element
console.log(map1.get('info'));
console.log(map2.get(obj));


//check map element
console.log(map1.has('info'));//true

//removing element
// map1.delete('info');
// console.log(map1);

//clear method
// map1.clear();
// console.log(map1);

//map size
console.log(map1.size);  // 2




