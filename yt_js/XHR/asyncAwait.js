const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json()
    return data
}

// const returned = getPosts();
// console.log(returned)

getPosts()
    .then(myData=>{
        console.log(myData)
    })
    .catch(error=>{
        console.log("Something error")
        console.log(error)
    })









// //in case of arrow function
    
// const getPosts = async() {
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json()
//     return data
// }





// getPosts()
//     .then(myData=>{
//         console.log(myData)
//     })
//     .catch(error=>{
//         console.log("Something error")
//         console.log(error)
//     })






 
// fetch(URL)
//     .then(response=>{
//         if(response.ok){
//             return response.json()
//         }else{
//             throw new Error("Something wrong!!!")
//         }
//     })
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(error=>{
//         console.log("Something error")
//         console.log(error)
//     })