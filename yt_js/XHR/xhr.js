const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// console.log(xhr)
// console.log(xhr.readyState)

xhr.open("GET",URL)

// console.log(xhr.readyState)

//1️⃣
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState === 4 ){//    👍👍👍👍 yaha har ek state check hogi or hab 4 hoga tab response milega
//         // console.log(xhr.readyState)
//         // console.log(typeof xhr.response)
//         const response = xhr.response;

//         const data = JSON.parse(response)
//         console.log(typeof data)
//         console.log(data)
//     }


// }



//2️⃣  // yaha if condition nahi lagni padgi

//y tabhi chalega jab ready state 4 hogi

xhr.onload = function(){
    // console.log(xhr.readyState)
    const response = xhr.response;

    const data = JSON.parse(response)
    console.log(data)
}


xhr.send()

