function selectionSort(arr, startIndex = 0) {
    // Caso base: si hemos recorrido todo el array, ya está ordenado
    if (startIndex >= arr.length - 1) {
      return arr;
    }
  
    // Suponemos que el primer elemento es el más pequeño
    let minIndex = startIndex;
  
    // Buscamos el elemento más pequeño en el resto del array
    for (let j = startIndex + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Actualizamos el índice del elemento más pequeño
      }
    }
  
    // Intercambiamos el elemento actual con el más pequeño encontrado
    if (minIndex !== startIndex) {
      let temp = arr[startIndex];
      arr[startIndex] = arr[minIndex];
      arr[minIndex] = temp;
    }
  
    // Llamada recursiva para ordenar el siguiente índice
    return selectionSort(arr, startIndex + 1);
  }
  
  // Ejemplo de uso
  let array = [5, 3, 8, 4, 2];
  console.log(selectionSort(array));
  