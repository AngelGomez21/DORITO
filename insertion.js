function insertionSort(arr) {
    // Recorremos el array desde el segundo elemento
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i]; // El elemento actual que queremos colocar en su posición
      let j = i - 1; // Índice para recorrer los elementos anteriores
  
      // Mover los elementos que son mayores que key una posición hacia adelante
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; // Desplazar el elemento
        j--; // Mover al siguiente elemento
      }
  
      // Colocar el elemento actual en su posición correcta
      arr[j + 1] = key;
    }
  
    return arr; // Retornar el array ordenado
  }
  
  // Ejemplo de uso
  let array = [5, 3, 8, 4, 2];
  console.log(insertionSort(array));
  