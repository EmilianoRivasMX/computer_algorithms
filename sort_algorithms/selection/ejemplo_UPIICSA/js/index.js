const tabla = document.getElementById("alumnos_y_calificaciones");
const filas = tabla.getElementsByTagName("tr");
const sortButton = document.getElementById("sortButton");

/**
 * Esta funcion ordena las filas de la tabla con base en la columna que se le pase como parametro
 * 
 * @param {string} columnaAOrdenar 
 */
function ordenarPorSeleccion(columnaAOrdenar) {
    const numFilas = filas.length;

    for (let i = 1; i < numFilas; i++) {
        let filaMenor = i;

        // Busca el indice de la fila que contiene el elemento de menor en la columna que se le pasa como parametro
        for (let j = i + 1; j < numFilas; j++) {
            let valor1 = filas[j].querySelector("td." + columnaAOrdenar).innerText;
            let valor2 = filas[filaMenor].querySelector("td." + columnaAOrdenar).innerText;

            // Si la columna es de tipo numerico, se convierte a entero para poder comparar
            if(columnaAOrdenar == "por_defecto" || columnaAOrdenar == "primer_parcial" || columnaAOrdenar == "segundo_parcial" || columnaAOrdenar == "tercer_parcial" || columnaAOrdenar == "calificacion_final") {
                valor1 = parseInt(valor1);
                valor2 = parseInt(valor2);
            }

            if (valor1 < valor2) {
                filaMenor = j;
            }
        }

        // Si la fila con el menor valor no es la misma que la fila actual, se intercambian
        if (filaMenor != i) {
            // Se obtienen los padres de las filas a intercambiar
            let parent1 = filas[i].parentNode;
            let parent2 = filas[filaMenor].parentNode;

            // Se intercambian las filas
            parent2.insertBefore(filas[i], filas[filaMenor]);
            parent1.insertBefore(filas[filaMenor], filas[i]);
        }
    }
}


// Evento que se ejecuta cuando se cambia el valor del select
sortButton.addEventListener("change", () => {
    const columnaAOrdenar = sortButton.value;
    ordenarPorSeleccion(columnaAOrdenar);
});
