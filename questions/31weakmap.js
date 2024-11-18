const weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, 'hello');// contain only object as key

console.log(weakMap); //WeakMap { <items unknown> }

console.log(weakMap.get(obj));// hello
console.log(weakMap.has(obj));// true
console.log(weakMap.delete(obj));// true

console.log(weakMap.get(obj)); // undefined



// Note: WeakMap are not iterable


