import React from 'react'
'use strict'
var num = parseInt(prompt("Ingresa un numero",0));

while(num <=0 || isNaN(num))
{
    num = parseInt(prompt("Ingresa un numero no ingreses letras o simbolos",0))
}
if(num%2 !=0){
    alert('Tu numero es impar')
}else{
    alert('Tu numero es par')
}
export default function Ejercicios03() {
  return (
    <div>Ejercicios03</div>
  )
}
