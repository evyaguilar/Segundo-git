let numero1=document.getElementById("numero1")
let numero2=document.getElementById("numero2")
let button=document.getElementById("button")
let contador=document.getElementById("contador")
let suma
button.addEventListener("click",resultado)
function resultado(){


suma=Number(numero1.value)+Number(numero2.value)


contador.textContent=suma
}


