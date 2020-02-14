//Crear un programa para llevar la cuenta del puntaje de un partido de tenis. Debe pedir inicialmente por los nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, y mostrando el puntaje actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora

const jugadora1 = prompt("Ingrese el nombre de la primer jugadora");
const jugadora2 = prompt("Ingrese el nombre de la segunda jugadora");

let puntosJugadora1 = 0;
let puntosJugadora2 = 0;
let quienGano = " ";
while(puntosJugadora1<3 && puntosJugadora2<3){    
    quienGano = prompt("Quien gano el set?");
    if(quienGano === jugadora1){
        
            puntosJugadora1++;
        
    } else {
            puntosJugadora2++;
        
    }
   alert(`Parcial: ${jugadora1}: ${puntosJugadora1} puntos y ${jugadora2}: ${puntosJugadora2} puntos`)  

}


if(puntosJugadora1 === 3){
    alert(`Ganadora ${jugadora1}`);
} else if(puntosJugadora2===3){
    alert(`Ganadora ${jugadora2}`);
}