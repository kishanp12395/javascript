//
// callback hell 


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(() => {
//     heading1.textContent = "Heading1"
//     heading1.style.color = "purple"

//     setTimeout(() => {
//         heading2.textContent = "Heading2"
//         heading2.style.color = "green"
//     }, 1000);
// }, 1000);




//here it make callback hell
// this is not readable

//so we use in promises

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");
// const heading11 = document.querySelector(".heading11");

// //callback hell
// setTimeout(() => {
//     heading1.textContent = "Heading1"
//     heading1.style.color = "purple"

//     setTimeout(() => {
//         heading2.textContent = "Heading2"
//         heading2.style.color = "green"

//         setTimeout(() => {
//             heading3.textContent = "Heading3"
//             heading3.style.color = "red"

//             setTimeout(() => {
//                 heading4.textContent = "Heading4"
//                 heading4.style.color = "blue"

//                 setTimeout(() => {
//                     heading5.textContent = "Heading5"
//                     heading5.style.color = "pink"

//                     setTimeout(() => {
//                         heading6.textContent = "Heading6"
//                         heading6.style.color = "orange"

//                         setTimeout(() => {
//                             heading7.textContent = "Heading7"
//                             heading7.style.color = "teal"

//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);



//

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");
const heading11 = document.querySelector(".heading11");

function changeText(element,text,color,time,onSuccess,onFaliure){
    setTimeout(() => {

        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccess){
                onSuccess();
            }
        }else{
            if(onFaliure){
                onFaliure()
            }
        }

    }, time);
}
//callback hell 
//pyramid of doom
changeText(heading1, "one", "red", 2000,()=>{
    changeText(heading2, "two", "green", 1000,()=>{
        changeText(heading3, "three", "blue", 2000,()=>{
            changeText(heading4, "four", "yellow", 1000,()=>{
                changeText(heading5, "five", "pink", 2000,()=>{
                    changeText(heading6, "six", "gold", 1000,()=>{
                        changeText(heading7, "seven", "hotpink", 1000,()=>{
                            changeText(heading8, "eight", "#454856", 2000,()=>{
                                changeText(heading9, "nine", "orange", 1000,()=>{
                                    changeText(heading10, "ten", "purple", 2000,()=>{
                                        changeText(heading11, "eleven", "teal", 1000,()=>{
    
                                        },()=>{console.log("Heading does not exist")})
                                    },()=>{console.log("Heading does not exist")})
                                },()=>{console.log("Heading does not exist")})
                            },()=>{console.log("Heading does not exist")})
                        },()=>{console.log("Heading does not exist")})
                    },()=>{console.log("Heading does not exist")})
                },()=>{console.log("Heading does not exist")})
            },()=>{console.log("Heading does not exist")})
        },()=>{console.log("Heading does not exist")})
    },()=>{console.log("Heading does not exist")}) 
},()=>{console.log("Heading does not exist")}) 



// changeText(heading11, "eleven", "teal", 1000,()=>{
    
// },()=>{console.log("Heading does not exist")})