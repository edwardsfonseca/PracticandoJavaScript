import React from 'react'
// utilizando un bucle , mostrar la suma , la media de los numeros introducidos ,hasta introducir un numero negativo y ahi mostrar el resultado
var num1 = parseInt(prompt("Escribe un numero"));
for (var i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
        console.log("Divisor :" + i)

    }
}
export default function Ejercicios02() {
  return (
    <div>Ejercicios02</div>
  )
}



