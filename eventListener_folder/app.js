//Event Listeners
//element.addEventListener("type of event", callback function that will fire off, boolean)
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
const componentToHide = document.querySelector('.hidden')

// if the componentToHide has the class hidden, this function will remove it...and vice versa
function revealContent (){
    if(componentToHide.classList.contains('hidden')){
        componentToHide.classList.remove('hidden')
    } else{
        componentToHide.classList.add('hidden')
    }
}

revealBtn.addEventListener('click',revealContent);