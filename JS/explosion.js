// Crear un programa que permita ingresar una serie de números separados por espacio. El programa debe disminuyendo cada número en 1 por ronda e ir mostrando el resultado (en consola, o en un string concatenado) hasta que todos lleguen a 0 (cuando lleguen a no deben seguir disminuyendo) y se produzca la explosión. Ejemplo
// ⏱ 3 1 0 2
// ⏱ 2 0 0 1
// ⏱ 1 0 0 0
// 💥💥💥💥💥

const numeros = prompt("Ingrese numeros separados por espacios").split(" ");
let explosion = true;
let suma = 0;
while(explosion){
for(let i = 0; i<numeros.length; i++){
        suma+=Number(numeros[i]); 
        numeros[i]--;
        if(numeros[i]<0){
            numeros[i] = 0;
        }  
    }
    
    if(suma === 1){
        explosion = false;
    } else{
        alert(`⏱  ${numeros.join(' ')}`);  
    }
    
    suma = 0;    
}
alert("💥💥💥💥💥");