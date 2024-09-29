function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
      return arr; // Si el array está vacío, retornamos el mismo array
    }
  
    // Encontramos el valor máximo para determinar el número de cubetas
    const maxVal = Math.max(...arr);
    const buckets = new Array(Math.ceil((maxVal + 1) / bucketSize)).fill().map(() => []);
  
    // Distribuimos los elementos en las cubetas
    for (let num of arr) {
      const bucketIndex = Math.floor(num / bucketSize); // Calculamos el índice de la cubeta
      buckets[bucketIndex].push(num); // Añadimos el número a la cubeta correspondiente
    }
  
    // Ordenamos cada cubeta y las concatenamos
    return [].concat(...buckets.map(bucket => bucket.sort((a, b) => a - b)));
  }
  
  // Ejemplo de uso
  let array = [5, 3, 8, 4, 2];
  console.log(bucketSort(array));
  