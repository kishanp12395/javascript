// event object


// const firstButton = document.querySelector('#one');

// firstButton.addEventListener('click', function(abc){
//     console.log(this)
//     console.log(abc)
// })





const allButtons = document.querySelectorAll(".my-buttons button")

for(let button of allButtons){
    button.addEventListener("click", function(e){
        // console.log("you clicked me")
        console.log(e.currentTarget)
    })
}

