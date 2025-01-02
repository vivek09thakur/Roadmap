const btn = document.querySelector('.btn');
const dailog = document.querySelector('.dailog')
const close_btn = document.querySelector('.close-dailog')
//  can be written as 
// const btn = document.getElementById('btn');
// const btn = document.getElementByClassName("btn")

console.log("Element = ",btn)
console.log('2nd Element =', dailog)
console.log('3rd Element =',close_btn)

function Open(){
    dailog.style.display ='block'
}

function Close(){
    dailog.style.display ='none'
}
