// event delegation
// it allows users to append a single event listener to a parent element
// that adds it to all of it's present and future descendants that match
// a selector.
document.querySelector('#sports').addEventListener('click',function(e){
    e.target.matches('li') && console.log(e.target.getAttribute('id') + ' is clicked')
    if (e.target.matches('li')){
        if(e.target.style.backgroundColor == 'lightgrey'){
            e.target.style.backgroundColor = 'white'
        }
        else{
            e.target.style.backgroundColor = 'lightgrey'
        }
    }
})


// because of event delegation, the eventListener will also get added to
// the new rugby item...we don't have to add the eventListener for each
// new list items
const sports = document.querySelector('#sports')
const newSports = document.createElement('li')
newSports.innerHTML = 'rugby'
newSports.setAttribute('id','rugby')
sports.appendChild(newSports)