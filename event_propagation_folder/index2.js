
// we can access the button we are clicking by accessing the target property of the event object
// let's change the inner text of the button
document.querySelector('button').addEventListener('click',function(e){
    e.preventDefault()
    if(e.target.innerText == 'changed'){
        e.target.innerText = 'original'
    }
    else{
        e.target.innerText = 'changed'
    }
})


// preventDefault
// The preventDefault() method cancels the event if it is cancelable,
//  meaning that the default action that belongs to the event will not occur.
document.getElementById("myCheckbox").addEventListener("click", function(event){
    event.preventDefault()
  });