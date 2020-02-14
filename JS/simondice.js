//Simón dice II

// Replicar el juego de Simón dice. El programa debe mostrar una secuencia de colores, agregando por cada ronda que pase otro color más. El usuario debe ingresar los colores de la secuencia uno por uno. Si erra la secuencia (es decir, si ingresa algún color mal), el programa debe terminar. Los colores posibles son: rojo, azul, verde y amarillo. Hay dos variantes posibles: o el juego continúa indefinidamente hasta que se erra la secuencia, y muestra cuántas rondas se sobrevivió, o el programa permite elegir al principio cuántas rondas se desea hacer, y mostrar un mensaje de victoria si se llega a esa cantidad de rondas sin errarle a la secuencia.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max)) + min;
  }

const colores = ["rojo", "azul", "verde", "amarillo"];

let indiceRandom = 0;

let secuencia = [];
let gano = true;
let coloresUsuario = [];
let vueltas = 0;

while(gano){
    indiceRandom = getRandomInt(0,(colores.length-1));
    secuencia.push(colores[indiceRandom]);
    alert(`Simon dice ${secuencia.join(' ')}`);
    for(let i = 0; i<secuencia.length; i++){
        jugador = prompt("Ingrese los colores de a uno");
        coloresUsuario.push(jugador);
    }
    gano = secuencia.join(' ')===coloresUsuario.join(' ');
    if(gano){
        alert(`Felicitaciones!!! acerto los colores ${secuencia.join(' ')}`);
    } else{
        alert("Perdio");
    }
    coloresUsuario = [];
}
