//Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max)) + min;
  }

let numero = 0;
let resultadoComputadora = getRandomInt(1, 10)

while(numero!==resultadoComputadora){
    numero = Number(prompt("Ingrese un numero"));
    
    if(numero>resultadoComputadora){
        alert('El numero ingresado es mayor al de la computadora');
    }else if (numero<resultadoComputadora){
        alert(`El numero ingresado es menor al de la computadora`);
    }



}
alert("ADIVINO!");