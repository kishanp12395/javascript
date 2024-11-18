let map1 = new Map();
map1.set('name','kishan');
map1.set('age','24');

//looping map
//for loop

for(let[key,value] of map1){
    console.log(key + '- ' + value);
}

//iterates keys 
for(let key of map1.keys()){
    console.log(key);
}

// iterates values

for(let value of map1.values()){
    console.log(value);
}

//forEach lop
// map1.forEach(function(value,key){
//     console.log(key + '- ' + value);
// })




// map2

// let map2 = new Map();

// //insert item in map
// map2.set('info',{name:'kkp', age:24, roll:45, address:'ayodhya'});
// map2.set('marks',{maths:90, english:80, science:89});
// console.log(map2);

// // lopping map2
// for(let k of map2){
//     console.log(k+'- '+v);
// }