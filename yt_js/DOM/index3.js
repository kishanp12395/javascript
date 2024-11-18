//reach h1 parent and changestyle

// const h1 = document.querySelector("h1");
// const div = h1.parentNode;

// div.style.color = '#fff';
// div.style.backgroundColor = '#333';




// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;

// body.style.color = '#fff';
// body.style.backgroundColor = '#333';






//directly select element

const body = document.body;

body.style.color = '#fff';
body.style.backgroundColor = '#333';




//
const head = document.querySelector('head');// document ke andar head search kiya
const title = head.querySelector('title');// head ke andar title search kiya
console.log(title)



//

const container = document.querySelector('.container');
console.log(container)
console.log(container.childNodes)// show text node or child node both
console.log(container.children)// this show only element child nodes