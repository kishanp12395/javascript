
// looping node-list


let navItems = document.querySelectorAll("a");

// for(let i = 0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = 'red'
//     navItem.style.color = 'yellow'
//     navItem.style.fontWeight = 'bold'
// }
     


// for(let navItem of navItems){
//     navItem.style.backgroundColor = 'red'
//     navItem.style.color = 'yellow'
//     navItem.style.fontWeight = 'bold'
// }


navItems = Array.from(navItems);

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = 'red'
    navItem.style.color = 'yellow'
    navItem.style.fontWeight = 'bold'
});