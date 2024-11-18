// keypress event

// body me kahi b click karne pr pata chale kon se kiya press kiya gya hai

const body = document.body;

// body.addEventListener("keypress",(e)=>{
//     console.log(e.key)
// })


//mouseover event


const mainButton = document.querySelector(".btn-headline")
mainButton.addEventListener("mouseover",(e)=>{
    console.log('mouseover')
})

mainButton.addEventListener("mouseleave",(e)=>{
    console.log("mouseleave")
})