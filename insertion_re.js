function insertionSort(arr) {
    // Función recursiva para insertar el último elemento en su lugar
    function recursiveInsert(arr, n) {
      // Caso base: si hay un solo elemento, ya está ordenado
      if (n <= 1) return;
  
      // Llamada recursiva para ordenar los primeros n-1 elementos
      recursiveInsert(arr, n - 1);
  
      // Tomar el último elemento
      const last = arr[n - 1];
      let j = n - 2;
  
      // Mover los elementos que son mayores que last una posición hacia adelante
      while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j]; // Desplazar el elemento
        j--;
      }
      // Colocar last en su posición correcta
      arr[j + 1] = last;
    }
  
    recursiveInsert(arr, arr.length); // Llamar a la función auxiliar
    return arr; // Retornar el array ordenado
  }
  
  // Ejemplo de uso
  let array = [5, 3, 8, 4, 2];
  console.log(insertionSort(array));
  