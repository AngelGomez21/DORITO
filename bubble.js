function bubbleSort(arreglo) {
    //primer bucle: recorrer el array entero tantas veces como sea necesaria
    for (let i = 0; i < arreglo.length; i++) {
        //segundo bucle: compara cada par de elementos adyacentes
        for (let j = 0; j < arreglo.length - 1; j++) {
            //si el elemento actual es mayor que el siguiente, intercambiamos
            if (arreglo[j] > arreglo[j + 1]) {
                //guardamos temporalmente el valor de arreglo[j] para hacer el intercambio
                let temp = arreglo[j];
                
                //intercambiamos los valores
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }
    //retornamos el array ya ordenado
    return arreglo;
}

//ejemplo de uso: probamos la funcion con array desordenado
let array = [5, 3, 8, 4, 2];

//mostramos el array ordenado en la consola
console.log(bubbleSort(array));
