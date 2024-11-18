// loop

// array like object --> indexing and length


// console.log(navItems); //html-collection


//loping html-collection

// for loop
// for of loop
// forEach
// we can't use forEach method to iterate through HTMLCollection



// const navItems = document.getElementsByTagName("a");
// for(let i = 0; i<navItems.length; i++){
//         // console.log(navItems[i]);
//         const navItem = navItems[i];
//         // console.log(navItem)
//         navItem.style.backgroundColor = 'red'
//         navItem.style.color = 'yellow'
//         navItem.style.fontWeight = 'bold'
//     }


    
// const navItems = document.getElementsByTagName("a");

// for(let navItem of navItems){
//     navItem.style.backgroundColor = 'red'
//     navItem.style.color = 'yellow'
//     navItem.style.fontWeight = 'bold'
// }


// use forEach loop first convert html-collection to array
// use let to create variable

let navItems = document.getElementsByTagName("a");
navItems = Array.from(navItems);

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = 'red'
    navItem.style.color = 'yellow'
    navItem.style.fontWeight = 'bold'
});