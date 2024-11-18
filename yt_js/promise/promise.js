//promise
console.log("script start");

const bucket = ['coffee', 'chips', 'vegetables', 'rice', 'salt'];

const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice")

    }else{
        reject("Couldn't to do it...")
    }
})

//consume

// friedRicePromise.then((myFriedRice)=>{
//     console.log("Let's eat ", myFriedRice)
// },(error)=>{
//     console.log(error)
// })❌


friedRicePromise.then((myFriedRice)=>{
    console.log("Let's eat ", myFriedRice)
}).catch((error)=>{
    console.log(error)
})

setTimeout(()=>{
    console.log("hello settimeout")
},0)

for(let i = 0; i<100; i++){
    console.log(i)
}


console.log("script end")