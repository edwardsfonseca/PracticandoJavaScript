import React from 'react'
// Tabla de multiplicar del 1 al 10 pero seleccionada por el usuario
var num =parseInt(prompt('De que numero quieres la tabla',1))
document.write('<h1>Tabla del '+num+'</h1>')

for (var i = 1; i <=10 ; i++){

    document.write(i+' x '+num+' = '+(i*num)+"<br>" )

}
// Todas las tablas de multiplicar sin ingresar un numero 
document.write('<h1>Todas las tablas de multiplicar</h1>')
for(var o = 1; o <=10; o++){
    document.write('<h1>Tabla del numero '+o+'</h1>')
    for (var i = 1; i <=10 ; i++)

        document.write(i+' x '+o+' = '+(i*o)+"<br>" )
}
export default function Ejercicios04() {
  return (
    <div>Tabla de multiplicar
        {i+' x '+o+' = '+(i*o)}
    </div>
  )
}
