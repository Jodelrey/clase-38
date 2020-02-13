//Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

const  usuario = "ADA";
const contrasenia = "1452";
let vueltas = 1;

let usuarioIngresado = "";
let constraseniaIngresada = "";

while(usuario!==usuarioIngresado && contrasenia!==constraseniaIngresada && vueltas <=3){
    usuarioIngresado = prompt("Ingrese usuario");
    constraseniaIngresada = prompt("Ingrese contraseña");
    vueltas++;
}

if(usuarioIngresado===usuario&&contrasenia===constraseniaIngresada){
    alert(`Bienvenida ${usuario}`);
}else{
    alert("ERROR");
}