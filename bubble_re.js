function bubbleSortRecursiva(arreglo, n = arreglo.length) {
    //caso base : si el tamaño del array es 1, ya esta ordenado
    if (n == 1) {
        return arreglo;
    }

    //recorremos el array y hacemos los intercambios necesarios
    for (let i = 0; i < n - 1; i++) {
        if (arreglo[i] > arreglo[i + 1]) {
            //intercambiamos si el actual es mayor que el siguiente
            let temp = arreglo[i];
            arreglo[i] = arreglo[i + 1];
            arreglo[i + 1] = temp;
        }
    }
    //llamada recursiva: volvemos a ordenar el array con n-1 elementos
    return bubbleSortRecursiva(arreglo, n - 1);
}

//ejemplo de uso
let array = [5, 3, 8, 4, 2];
console.log(bubbleSortRecursiva(array));
