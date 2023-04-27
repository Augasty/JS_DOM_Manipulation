

//Traverse the DOM

//parent node traversal

let ul = document.querySelector('ul')
console.log(ul.parentNode.parentNode)
console.log(ul.parentElement.parentElement)

//child node traversal

let element = document.querySelector('ul')
console.log(element.childNodes)
console.log(element.firstChild)

element.childNodes[1].style.backgroundColor = 'blue'

//sibling node traversal

let elem = document.querySelector('ul')

console.log(elem.previousSibling)
console.log(elem.previousElementSibling)
console.log(elem.nextSibling)
console.log(elem.nextElementSibling)