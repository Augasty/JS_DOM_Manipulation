// if we want to stop propagation

window.addEventListener('click',function(){
    console.log('window')
})
document.addEventListener('click',function(){
    console.log('document')
})

document.querySelector('.div2').addEventListener('click',function(e){
    // e.stopPropagation() // stops the propagation
    console.log('div2')
})

// if we only want div1 to fire off once,
// we can make the 3rd parameter true once
document.querySelector('.div1').addEventListener('click',function(){
    console.log('div1')
},{once: true}) // div1 will fire only once...then it will be skipped

// the parameter e inside the function is the event object
document.querySelector('button').addEventListener('click',function(e){
    console.log(e)
})

// output will be
// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// div1
// div2