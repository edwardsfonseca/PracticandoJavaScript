
import React from 'react'
var numeros = "";
var numero = [];
do{
    numeros=prompt("introduce tu numero");
    numero.push(numeros)
    
    numero.reverse();
}while(numeros != 6);

    console.log(numero)
for(let i in numero){
    document.write("<li>"+ numero[i]+"</li>")
}
document.write("<li>"+ numero.sort()+"</li>")
document.write(numero.length)
var busqueda = numero.find(i =>  i == "5");
console.log(busqueda);
export default function Ejercicios03() {
  return (
    <div>Ejercicios05{numero}</div>
  )
}

/* Falta mostrarlo en la web funcion finalizada 
    Arreglar errores y darle estilo a la web :D

*/