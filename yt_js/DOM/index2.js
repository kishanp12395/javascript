//root node

const rootNode = document.getRootNode();
// console.log(rootNode);



//child node of root node

// console.log(rootNode.childNodes);
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.dir(htmlElementNode);


//child node of html
// console.log(htmlElementNode.childNodes)
const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode)
// console.log(textElementNode)
// console.log(bodyElementNode)

console.log(headElementNode.childNodes)
console.log(bodyElementNode.childNodes)


//parent node 
console.log(headElementNode.parentNode)
console.log(htmlElementNode.parentNode)


//sibling relationship

console.log(headElementNode.nextSibling)
console.log(headElementNode.nextSibling.nextSibling)

console.log(headElementNode.nextElementSibling)