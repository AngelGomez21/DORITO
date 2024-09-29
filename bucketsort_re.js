function insertionSort(arr) {
    // Función de ordenamiento por inserción
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
  
      // Mover los elementos de arr[0..i-1] que son mayores que key
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key; // Insertar el elemento en su posición correcta
    }
    return arr; // Retornar el array ordenado
  }
  
  function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
      return arr; // Si el array está vacío, retornar el mismo array
    }
  
    // Encontrar el valor máximo para determinar el número de cubetas
    const maxVal = Math.max(...arr);
    const buckets = new Array(Math.ceil((maxVal + 1) / bucketSize)).fill().map(() => []);
  
    // Distribuir los elementos en las cubetas
    for (let num of arr) {
      const bucketIndex = Math.floor(num / bucketSize); // Calcular el índice de la cubeta
      buckets[bucketIndex].push(num); // Añadir el número a la cubeta correspondiente
    }
  
    // Ordenar cada cubeta recursivamente y concatenar los resultados
    let sortedArray = [];
    for (let bucket of buckets) {
      if (bucket.length > 0) {
        // Llamar a insertionSort de manera recursiva
        sortedArray = sortedArray.concat(insertionSort(bucket));
      }
    }
  
    return sortedArray; // Retornar el array ordenado
  }
  
  // Ejemplo de uso
  let array = [5, 3, 8, 4, 2];
  console.log(bucketSort(array));
  