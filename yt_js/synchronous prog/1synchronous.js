

//synchronous programming🚫

// console.log("script start");

// for(let i = 1; i<1000; i++){
//     console.log("inside loop")
// }

// console.log("script end")  




//asynshronous programming ❤️

//1

// console.log("start")

// setTimeout(()=>{
//     console.log("inside setTimeout")
// },1000)

// console.log("end")

//2

// console.log("start")

// setTimeout(()=>{
//     console.log("inside setTimeout")
// },1000)

// for(let i = 1; i<1000; i++){
//     console.log("Non Block");
// }

// console.log("end")

// for(let i = 1; i<1000; i++){
//     console.log("Non Block");
// }
 


//3

console.log("start")

const id = setTimeout(()=>{
    console.log("inside setTimeout")
},1000)

for(let i = 1; i<1000; i++){
    console.log("Non Block");
}

console.log("setTimeout id",id);
clearTimeout(id);
console.log("end")

