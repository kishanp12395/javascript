// function returning promise

function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetables', 'ice', 'salt'];

    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice")
    
        }else{
            reject("Couldn't to do it...")
        }
    })
}



ricePromise()
    .then((myFriedRice)=>{console.log("Let's eat ", myFriedRice)})
    .catch((error)=>{console.log(error)
})