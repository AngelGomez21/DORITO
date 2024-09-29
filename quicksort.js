function quicksort(arreglo) {
    // si el array tiene 0 o 1 elementos, ya esta ordenado
    if (arreglo.length <= 1) {
        return arreglo;
    }

    //inicializamos los indices
    let left = 0;
    let right = arreglo.length - 1;

    //funcion para intercambiar elementos en el array
    function swap(arreglo, i, j) {
        let temp = arreglo[i];
        arreglo[i] = arreglo[j];
        arreglo[j] = temp;
    }

    //funcion para particionar el array
    function particion(arreglo, left, right) {
        let pivot = arreglo[Math.floor((left + right)/2)];//elegimos el pivote como el elemento del medio
        while (left <= right){
            //movemos los indices mientras los elementos estan en el lugar correcto
            while (arreglo[left] < pivot) {
                left++;
            }
            while (arreglo[right]>pivot){
                right--;
            }
            if (left <= right ) {
                swap(arreglo, left, right);//intercambiamos elementos
                left++;
                right--;
            }
        }
        return left;//retornamos el indice de particion
    }

    //usamos una pila de trabajo para iterar a traves de las particiones
    let stack = [{left: 0, right: arreglo.length - 1}];

    while (stack.length > 0){
        let {left, right} = stack.pop();

        if (left < right ){
            let index = particion(arreglo, left, right);

            //añadimos las subparticiones a la pila
            stack.push({ left: index, right: right});
            stack.push({ left: left, right: index - 1});
        }
    }
    return arreglo;
}

//ejemplo de uso
let array = [5, 3, 8, 4, 2];
console.log(quicksort(array));
