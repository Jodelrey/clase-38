while(condicionEsVerdadera){
    //ejecutar codigo
}


let numero = 0;
let quiereContinuar = true;
while(quiereContinuar){
    quiereContinuar = confirm(`El numero actual es ${numero}`);
    numero++;
}

console.log("Termino");
//puedo darle numero maximo de vueltas

//while(quiereContinuar && numero<=5){

//}

let playlist = "";
let canciones = "";

while(canciones!=="salir"){
    canciones = prompt("Ingrese una cancion \n" + playlist);
    playlist+=canciones;
}

console.log(playlist);