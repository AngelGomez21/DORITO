function mergeSort(arr) {
    // Caso base: Si el array tiene 0 o 1 elementos, ya está ordenado
    if (arr.length <= 1) {
      return arr;
    }
  
    // Dividir el array en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));  // Ordenamos la mitad izquierda
    const right = mergeSort(arr.slice(mid));     // Ordenamos la mitad derecha
  
    // Fusionar las dos mitades ordenadas
    return merge(left, right);
  }
  
  // Función para fusionar dos subarrays ordenados
  function merge(left, right) {
    let result = [];
    let i = 0; // Índice para el array izquierdo
    let j = 0; // Índice para el array derecho
  
    // Comparar y fusionar los elementos de ambos arrays
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]); // Añadimos el menor al resultado
        i++;
      } else {
        result.push(right[j]); // Añadimos el menor al resultado
        j++;
      }
    }
  
    // Añadimos los elementos restantes del array izquierdo (si hay)
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    // Añadimos los elementos restantes del array derecho (si hay)
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result; // Retornamos el array fusionado
  }
  
  // Ejemplo de uso
  let array = [5, 3, 8, 4, 2];
  console.log(mergeSort(array));
  