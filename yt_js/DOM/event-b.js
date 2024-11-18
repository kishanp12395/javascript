const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const body = document.body;


//capturing event

child.addEventListener("click",()=>{
    console.log("you captured!!!! on child...")
},true)

parent.addEventListener("click",()=>{
    console.log("you captured!!!! on parent...")
},true)

grandParent.addEventListener("click",()=>{
    console.log("you captured!!!! on grandparent...")
},true)

body.addEventListener("click",()=>{
    console.log("you captured!!!! on body...")
},true)




//event bubbling

child.addEventListener("click",()=>{
    console.log("you clicked on child...")
})

parent.addEventListener("click",()=>{
    console.log("you clicked on parent...")
})

grandParent.addEventListener("click",()=>{
    console.log("you clicked on grandparent...")
})

body.addEventListener("click",()=>{
    console.log("you clicked on body...")
})