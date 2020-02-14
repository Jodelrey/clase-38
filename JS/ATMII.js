//ATM II

// Crear un programa que tenga un dinero inicial
// El programa también deberá contar con un menú con las siguientes opciones:
// EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
// DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
// CONSULTAR SALDO: debe mostrar el saldo actual
// VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
// SALIR: debe terminar la ejecución del programa
// El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder consultarse luego, por ejemplo:
//  ULTIMOS MOVIMIENTOS
//  - Depositado: $550
//  - Extraido: $1000
//  - Consultado saldo: $3400
//  - Depositado: $100

let saldoInicial = 60000;
let noSalir = true;
let ultimosMovimientos = [];
let dineroAExtraer = 0;
let dineroADepositar = 0;

while(noSalir){
    let operacion = prompt(`Que operacion desea realizar: \n - Extraer \n - Depositar \n - Consultar saldo \n - Ver ultimos movimientos \n - Salir`);
    switch(operacion){
        case "Extraer":
            dineroAExtraer = Number(prompt("Ingrese cuando dinero desea extraer"));
            if(dineroAExtraer>saldoInicial){
                alert(`Su saldo es $${saldoInicial}, no puede extraer tanto dinero`);
            } else{
                saldoInicial-=dineroAExtraer;
                ultimosMovimientos.unshift(`\n - Extraido: $${dineroAExtraer}`);
                alert(`Ud extrajo $${dineroAExtraer}, su saldo actual es de $${saldoInicial}`);
            }
            break;
        case "Depositar": 
            dineroADepositar = Number(prompt("Ingrese cuanto dinero desea depositar"));
            saldoInicial+=dineroADepositar;
            ultimosMovimientos.unshift(`\n - Deposito: $${dineroADepositar}`);
            alert(`Ud a depositado $${dineroADepositar}, su saldo actual es de $${saldoInicial}`);
            break;
        case "Consultar saldo":
            alert(`Su saldo es $${saldoInicial}`);
            ultimosMovimientos.unshift(`\n - Consulta de saldo: $${saldoInicial}`);
           
            break;
        case "Ver ultimos movimientos": 
         alert(`Ultimos Movimientos : ${ultimosMovimientos}`);
         break;
        
        case "Salir": 
        noSalir = false;
        break;

        default: 
        alert(`No ha ingresado una operacion valida`);
    }
        
}