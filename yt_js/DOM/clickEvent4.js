const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
        e.target.style.border = "2px solid blue";
        e.target.style.borderRadius = "10px";


    })
})