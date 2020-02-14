//Crear un programa que tenga un menú con las siguientes opciones:
// AGREGAR TAREA: debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
// MODIFICAR TAREA: debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
// ELIMINAR TAREA: debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
// VER TAREAS: debe listar todas las tareas hasta el momento
// SALIR: debe terminar la ejecución del programa
// El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.

let noSalir = true;
let listadoTareas = [];
let nuevaTarea = " ";
let numeroTarea = 0;
let tareaAModificar = 0;
let tareaModificada = " ";
let tareaAEliminar = 0;
while(noSalir){
    let menu = prompt("Ingrese la opcion deseada: Agregar tarea, Modificar tarea, Eliminar tarea, Ver tareas o Salir");
    switch(menu){
        case "Agregar tarea":
            nuevaTarea = prompt("Ingrese la tarea a agregar");
            
            listadoTareas.push(`\n ${nuevaTarea}`);
            alert(`Ha ingresado una nueva tarea a su listado`);
            break;
        case "Modificar tarea":
            tareaAModificar = Number(prompt(`Ingrese el numero de la tarea que desea modificar ${listadoTareas.join(' ')}`));
            for(let i = 0; i<listadoTareas.length; i++){
                if((i+1)===tareaAModificar){
                    tareaModificada = prompt(`Ud va a modificar ${listadoTareas[i]}, ingrese por favor la nueva tarea`);
                    listadoTareas.splice(listadoTareas[i], 1, tareaModificada);
                }
            }
            break;

        case "Eliminar tarea":
            tareaAEliminar = Number(prompt(`Del siguiente listado de tareas, ingrese el numero de la tarea que desea eliminar: ${listadoTareas.join(' ')}`));
            for(let i = 0; i<listadoTareas.length; i++){
                if((i+1)===tareaAEliminar){
                    listadoTareas.splice(i, 1);
                   
                }
                
            }
            break;
        case "Ver tareas": 
            alert(`El listado de tareas es: \n ${listadoTareas.join(' ')}`);
            break;
        case "Salir":
            noSalir = false;
            break;
        default:
            alert("No ha ingresado una opcion correcta");
    }
}