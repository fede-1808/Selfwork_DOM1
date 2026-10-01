let paragrafi = document.querySelectorAll('p')
let color = document.querySelector('#color')
let bold = document.querySelector('#bold')
let nasc = document.querySelector('#nasc')

color.addEventListener('click', ()=>{
 paragrafi.forEach(paragrafo => {
  let r = Math.floor(Math.random()*256)
  let g = Math.floor(Math.random()*256)
  let b = Math.floor(Math.random()*256)
  paragrafo.style.color=`rgb(${r}, ${g}, ${b})`
 }) 
})

bold.addEventListener('click', ()=>{
  paragrafi.forEach(paragrafo => {
    paragrafo.style.fontWeight=`bold`

 })
})  

nasc.addEventListener('click', ()=>{
  paragrafi.forEach(paragrafo => {
    if(paragrafo.style.display ==`block`){
      paragrafo.style.display = `none`
    }else {
      paragrafo.style.display = `block`
    }
 })
})  