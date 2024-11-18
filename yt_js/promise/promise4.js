// promise.resolve
// promise.chaining



function myPromise(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

myPromise()
    .then((value)=>{
        console.log(value)
        value += "bar";
        return value;// here js return promise
        // return Promise.resolve(value)
    })
    .then((value)=>{
        console.log(value)
        value += "bazz";
        return value;
    })
    .then((value)=>{
        console.log(value)
       
    })
    








