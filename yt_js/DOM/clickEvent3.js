

console.log("script Start!!!!")

const allButtons = document.querySelectorAll(".my-buttons button")

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i = 0; i<=1000000000; i++){
            num = num + i;
        }
        console.log(e.currentTarget.textContent, num)
    })
})

let num2 = 0;
for(let i = 0; i<=1000000000; i++){
    num2 = num2 + i;
}


console.log('Value of num2', num2)
console.log("script end!!!!")
