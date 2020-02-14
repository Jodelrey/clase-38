//Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.

let caraOCruz = "";

let maximoRondas = 0;
let contador = 0;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max)) + min;
  }
let computadora = 0;
let resultadoComputadora = "cruz";


while(caraOCruz!=="salir"){
   
    caraOCruz = prompt("Ingrese cara o cruz o salir");
    computadora=getRandomInt(1,2);
    if(computadora === 1){
        resultadoComputadora = "cara";
        
    }else{
        resultadoComputadora = "cruz";
    }
    if(caraOCruz===resultadoComputadora){
        maximoRondas++;
        contador++;
        alert(`Rondas acertadas ${contador} computadora eligio ${resultadoComputadora}`)
    }else if (caraOCruz === "salir"){
        alert(`Nos vemos en Disney, maximo puntaje = ${maximoRondas}`);
    } else{
        contador = 0;
        alert(`Rondas acertadas ${contador} computadora eligio ${resultadoComputadora}`)
    }
    
}


