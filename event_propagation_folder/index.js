// event propagation


// the third optional parameter in the addEventListener dictates whether we 
// want event capture or event bubbling

// true = eventCapture true, 
// false = eventCapture false (event bubbling, true)
// it is by default false 
window.addEventListener('click',function(){
    console.log('window')
},true)
document.addEventListener('click',function(){
    console.log('document')
},true)

document.querySelector('.div2').addEventListener('click',function(){
    console.log('div2')
},true)
document.querySelector('.div1').addEventListener('click',function(){
    console.log('div1')
},true)

// the parameter e inside the function is the event object
document.querySelector('button').addEventListener('click',function(e){
    console.log(e)
},true)

// as eventcapture is true... events will start capturing from the top of the dom tree
// output:
// window
// document
// div2
// div1
// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

// if evenCapture was false, output would have been from the bottom of the dom tree to the top
// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
// div1
// div2
// document
// window