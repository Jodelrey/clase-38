//Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max)) + min;
  }
const conjuntoPalabras = ["ADA", "LOVELACE", "JAVASCRIPT", "REACT", "VUE", "PHP"];
let indiceRandom = getRandomInt(0,conjuntoPalabras.length-1);
let palabraRandom = conjuntoPalabras[indiceRandom];
let palabraUsuario = "";
let vueltas = 0;
let pista;

while(palabraRandom!==palabraUsuario){    
    palabraUsuario = prompt("Intente adivinar la palabra");
    vueltas++;
    if(palabraRandom!==palabraUsuario){
    pista = palabraRandom.slice(0, -(palabraRandom.length - vueltas));
    alert(`Pista: la palabra comienza con: ${pista}`);
    }
}

alert(`Adivino`);