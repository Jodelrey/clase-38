//Crear un programa que permita mover un barco hacia una isla. El programa debe permitir ingresar los valores AVANZAR o RETROCEDER, siendo que AVANZAR acerca el barco un espacio hacia la isla y RETROCEDER lo aleja. El programa debe terminar cuando el barco llega a la isla. Ejemplo:
//⛵️🌊🌊🌊🏝
// AVANZAR
//🌊⛵️🌊🌊🏝
// AVANZAR
//🌊🌊⛵️🌊🏝
// RETROCEDER
//🌊⛵️🌊🌊🏝
// AVANZAR
//🌊🌊⛵️🌊🏝
// AVANZAR
//🌊🌊🌊⛵️🏝
//¡Has llegado a la isla!

let noLlego = true;
const ubicacionIsla = ["⛵", "🌊", "🌊", "🌊", "🏝"];
let indexBarco = ubicacionIsla.indexOf("⛵");
let indexIsla = ubicacionIsla.indexOf("🏝");
let movimiento = " "
alert(`${ubicacionIsla.join(' ')}`);
while(indexBarco<(indexIsla-1)){
    
    movimiento = prompt("Desea avanzar o retroceder?");    
    if(movimiento === "avanzar"){
        ubicacionIsla[indexBarco+1] = "⛵";
        ubicacionIsla[indexBarco] = "🌊";
    } else{
        if(indexBarco<=0){
          ubicacionIsla[0] = "⛵";
        } else{
            ubicacionIsla[indexBarco-1] = "⛵";
            ubicacionIsla[indexBarco] = "🌊";
        }
    }
    indexBarco = ubicacionIsla.indexOf("⛵");
    indexIsla = ubicacionIsla.indexOf("🏝");
    alert(`${ubicacionIsla.join(' ')}`);

}

alert(`Alcanzo la isla`);