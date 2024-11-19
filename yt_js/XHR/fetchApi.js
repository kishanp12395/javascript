const URL = "https://jsonplaceholder.typicode.com/posts";
 fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response=>{
        if(response.ok){
            return response.json()
            // console.log(response)
        }else{
            throw new Error("Something wrong")
        }
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log("inside catch")
        console.log(error)
    })