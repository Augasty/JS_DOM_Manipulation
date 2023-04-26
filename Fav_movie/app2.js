//DOM manipulation

//now we wanna change the styling of this element
const title = document.querySelector('#main-heading')
title.style.color = 'red'

const listItems = document.querySelectorAll('.list-items')
for (i = 0; i < listItems.length; i++){
    listItems[i].style.color = 'blue'
    
}
console.log(listItems)


//creating new elements using DOM
const ul = document.querySelector('ul')

const list = document.createElement('li')

//adding elements
ul.append(list)


// const firstListItem = document.querySelector('.list-items')
// console.log(firstListItem)
// console.log(firstListItem.textContent)
// console.log(firstListItem.innerHTML)


//modifying the text
list.innerText = 'X-Men'

//modifying attributes and classes
list.setAttribute('id','main-heading');

console.log(title.getAttribute('id'))

list.classList.add('list-items')

// list.classList.remove('list-items')




//remove elements
list.remove()
