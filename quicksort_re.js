function quicksort(arreglo) {
    if (arreglo.length <= 1) {
        return arreglo; // caso base: si el array tiene 0 o 1 elementos, esta ordenado
    }

    //elegimos el primer elemento como pivote
    let pivot = arreglo[0];

    //filtramos los elementos menores y mayores al pivote
    let left = arreglo.slice(1).filter(item => item < pivot);//menores que el pivote
    let right = arreglo.slice(1).filter(item => item >= pivot);//mayores o iguales al pivote

    //llamamos recursivamente y concatenamos
    return [...quicksort(left), pivot, ...quicksort(right)];
}

//ejemplo de uso
let array = [5, 3, 8, 4, 2];
console.log(quicksort(array));
