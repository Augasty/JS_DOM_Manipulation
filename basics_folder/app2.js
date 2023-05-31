
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


const firstListItem = document.querySelector('.list-items')
console.log(firstListItem)
console.log(firstListItem.textContent)  //gives the text inside the tag
console.log(firstListItem.innerHTML)    //gives the html inside the tag


//modifying the text
list.innerText = 'X-Men'

//modifying attributes and classes
// list.setAttribute('id','main-heading');
// list.removeAttribute('id')

console.log(title.getAttribute('id'))


// classList lets us add, remove and manipulate classes in an element
list.classList.add('list-items')

// list.classList.remove('list-items')




//remove elements
// list.remove()
