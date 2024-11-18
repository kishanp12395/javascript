// promise && setTimeout

function myPromise(){
    return new Promise((resolve, reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve()
            }else{
                reject()
            }
        },2000)
    })       
}

myPromise()
.then(()=>{console.log("resolved")})
.catch(()=>{console.log("rejected")})


///////////////////////////

const goodPromise = Promise.resolve(5);
goodPromise.then((value)=>{
    console.log(value)
})

// then()  then method hamesha promise return karta hai