//Crear un juego de combate contra un monstruo. El juego debe contar con las siguientes variables:
// Vida jugadora
// Vida monstruo
// Cantidad de pociones
// Ataque máximo jugadora
// Ataque máximo monstruo
// Curación máxima poción
// Todos los valores anteriores deben ser números enteros (elijanlos ustedes)
// El juego debe tener las siguientes acciones posibles:
// ATACAR MONSTRUO: genera un número aleatorio entre 1 y Ataque máximo jugadora y lo resta a Vida monstruo
// TOMAR POCION: genera un número aleatorio entre 1 y Curación máxima poción y lo suma a Vida jugadora y resta 1 a Cantidad de pociones
// BUSCAR POCION: genera un número entre 1 y 4, si sale 1 suma una poción, sino no encuentra nada
// SALIR: termina el programa
// En todo momento se debe mostrar un mensaje de lo que está pasando
// Luego de cada acción, el monstruo ataca a la jugadora y le resta a Vida jugadora un número aleatorio entre 1 y Ataque máximo monstruo
// Luego del ataque del monstruo, se debe mostrar la vida de ambos
// El programa termina cuando o la jugadora o el monstruo se quedan con vida igual o menor a 0
// Mostrar un mensaje con el resultado final

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max)) + min;
  }


let vidaJugadora = 10;
let vidaMonstruo = 10;
let cantidadPociones = 10;
let maxJugadora = 4;
let maxMonstruo = 3;
let curacionMaxPocion = 5;
let seguirJugando = true;
let accion = "";

while(accion!=="Salir"&&vidaJugadora>0&&vidaMonstruo>0){
    accion = prompt("Que accion desde ejecutar: Atacar monstruo, Tomar pocion, Buscar pocion o Salir");
    switch(accion){
        case 'Atacar monstruo': 
        pierdeVidasMonstruo = getRandomInt(1, maxJugadora);
        vidaMonstruo-=pierdeVidasMonstruo;
        pierdeVidasJugadora = getRandomInt(1, maxMonstruo);   
        vidaJugadora-=pierdeVidasJugadora 
        alert(`Jugadora ataco a monstruo, le saco ${pierdeVidasMonstruo} vidas. \n Ahora el monstruo tiene ${vidaMonstruo} vidas. \n Jugadora perdio ${pierdeVidasJugadora}, tiene ${vidaJugadora} vidas`);
        break;
        case 'Tomar pocion': 
        if(cantidadPociones>0){
        sumarVidaJugadora = getRandomInt(1, curacionMaxPocion);
        vidaJugadora+=sumarVidaJugadora;
        cantidadPociones--;
        pierdeVidasJugadora = getRandomInt(1, maxMonstruo);
        vidaJugadora-=pierdeVidasJugadora; 
        alert(`Jugadora sumo ${sumarVidaJugadora} vidas por la pocion pero perdio ${pierdeVidasJugadora} por el ataque del monstruo. \n Ahora la jugadora tiene ${vidaJugadora} vidas`);
        } else{
            alert(`No tiene mas pociones, elija otra opcion`);
        }
        break;
        case 'Buscar pocion': 
        aleatorio = getRandomInt(1,4);
        if(aleatorio = 1){
            cantidadPociones++;
            alert(`Has sumado 1 pocion, ahora tienes ${cantidadPociones} pociones`);
        } else{
            alert(`No se ha encontrado ninguna pocion`);
        }
        pierdeVidasJugadora = getRandomInt(1, maxMonstruo);
        vidaJugadora-=pierdeVidasJugadora;   
        alert(`Jugadora perdio ${pierdeVidasJugadora} vida por el ataque del monstruo.\n Ahora la jugadora tiene ${vidaJugadora} vidas`);
        break;
        case "Salir":
            break;
        default: 
        alert(`No ha elegido una opcion valida`);

    }

}