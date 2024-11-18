
//click event

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//     console.log("you clicked me!!!");
// })


// apply on all button using loop

const allButtons = document.querySelectorAll(".my-buttons button")

for(let button of allButtons){
    button.addEventListener("click", function(){
        // console.log("you clicked me")
        console.log(this)
        console.log(this.textContent);//this ke andar sare button alag alag aa rahe hai
    })
}

