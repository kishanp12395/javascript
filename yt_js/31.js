
//cloning
const obj = {
    key1:'value1',
    key2:'value2'
}

// const obj2 = obj; //memeory ( heap) both obj and obj2 point object stored in heap

// const obj2 = {...obj};
const obj2 = Object.assign({},obj);
obj.key3 = 'value3';  

console.log(obj)
console.log(obj2)


// to avoid this use spread operater or Object.assign({},obj)