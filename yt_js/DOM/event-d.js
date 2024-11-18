const grandParent = document.querySelector(".grandparent");

//event deligation
grandParent.addEventListener("click",(e)=>{
    console.log(e.target)
})