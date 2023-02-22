import React from 'react'

var num1 = parseInt(prompt('Ingresa tu primer numero', 0));
var num2 = parseInt(prompt('Ingresa tu segundo numero', 0));
while (isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt('Tu Primer numero debe ser un numero', 0));
    num2 = parseInt(prompt('Tu Segundo numero debe ser un numero', 0));


}
var suma = (num1 + num2);
var resta= (num1-num2);
var x= (num1*num2);
var Division=(num1/num2);
var resultadototal= 'La suma es '+(num1+num2)+'\n'+
'La resta es'+(num1-num2)+'\n'+
'La Multiplicacion es'+(num1*num2)+'\n'+
'La Division es'+(num1/num2)+'\n';
alert(resultadototal)
export default function Ejercios() {
    return (
        <div>
            
            <h1>La Suma de los numeros es : {suma}</h1>
            <h1>La Resta de los numeros es : {resta}</h1>
            <h1>La Multiplicacion de los numeros es : {x}</h1>
            <h1>La Division de los numeros es : {Division}</h1>
        </div>
    )
}
