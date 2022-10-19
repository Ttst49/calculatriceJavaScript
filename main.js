const chiffres = document.querySelectorAll(".chiffre")
const ecran = document.querySelector("textarea")
const boutonegal = document.querySelector('.egal')
ecran.innerHTML= 0
let result="0"

ecran.innerHTML=result

chiffres.forEach((el)=>{
  el.addEventListener('click',()=>{
      console.log(el.id)
      ecran.innerHTML += el.id
    })
})

function calculate() {

}

boutonegal.addEventListener('click',()=>{
    calculate();
})