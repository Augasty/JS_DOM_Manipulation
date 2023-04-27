//Event Listeners

//element.addEventListener("type of event", function that will fire off, boolean)
const button2 = document.querySelector('.btn-2')

function alertBtn(){
    alert('button 2 is clicked')
}

button2.addEventListener('click',alertBtn)

// mouse hover event

const boxHover = document.querySelector('.box-3')
boxHover.addEventListener('mouseover',()=>{
    boxHover.style.backgroundColor = 'red'
})


//reveal event
const revealBtn = document.querySelector('.reveal')
const hidden = document.querySelector('.hidden')

function revealContent (){
    if(hidden.classList.contains('hidden')){
        hidden.classList.remove('hidden')
    } else{
        hidden.classList.add('hidden')
    }
}

revealBtn.addEventListener('click',revealContent);