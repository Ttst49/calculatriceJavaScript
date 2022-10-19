const chiffres = document.querySelectorAll(".chiffre")
const operands = document.querySelectorAll(".operateur")
const ecran = document.querySelector("textarea")
const boutonegal = document.querySelector('.egal')
const boutondel = document.querySelector('.del')
ecran.innerHTML= ""
let result= 0

ecran.innerHTML=result

function calculate() {
    result=eval(ecran.innerHTML)
    ecran.innerHTML=result
}

chiffres.forEach((el)=>{
  el.addEventListener('click',()=>{
      if (ecran.innerHTML=="0"){
          ecran.innerHTML =el.id
      }else {
          ecran.innerHTML += el.id
      }
      console.log(el.id)
    })
})
operands.forEach((el)=>{
    el.addEventListener('click',()=>{
        console.log(el.id)
        ecran.innerHTML += el.id
    })
})

boutonegal.addEventListener('click',()=>{
    console.log("on calcule")
    calculate()

})

boutondel.addEventListener('click',()=>{
    console.log("on supprime")
    ecran.innerHTML="0"

})