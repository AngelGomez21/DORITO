function selectionSort(arr) {
    // Recorremos todo el array
    for (let i = 0; i < arr.length; i++) {
      // Suponemos que el primer elemento es el más pequeño
      let minIndex = i;
  
      // Buscamos el elemento más pequeño en el resto del array
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j; // Actualizamos el índice del elemento más pequeño
        }
      }
  
      // Intercambiamos el elemento actual con el más pequeño encontrado
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr; // Retornamos el array ordenado
  }
  
  // Ejemplo de uso
  let array = [5, 3, 8, 4, 2];
  console.log(selectionSort(array));
  