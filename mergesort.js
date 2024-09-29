function mergeSort(arr) {
    // Si el array tiene 0 o 1 elementos, ya está ordenado
    if (arr.length <= 1) {
      return arr;
    }
  
    // Creamos un array temporal para almacenar los resultados
    let temp = new Array(arr.length);
    
    // Tamaño de las sublistas a fusionar
    let step = 1;
  
    // Bucle para fusionar subarrays de tamaño `step`
    while (step < arr.length) {
      let index = 0; // Índice para el array temporal
  
      // Recorremos el array en bloques del tamaño `2 * step`
      while (index < arr.length) {
        // Definimos los límites de los subarrays
        let left = index;
        let mid = Math.min(index + step, arr.length); // Mitad del primer subarray
        let right = Math.min(index + 2 * step, arr.length); // Fin del segundo subarray
  
        // Fusionamos los subarrays
        let i = left;
        let j = mid;
        let k = left; // Índice para el array temporal
  
        // Comparamos y fusionamos
        while (i < mid && j < right) {
          if (arr[i] < arr[j]) {
            temp[k++] = arr[i++]; // Añadimos de la izquierda
          } else {
            temp[k++] = arr[j++]; // Añadimos de la derecha
          }
        }
  
        // Copiamos los elementos restantes de la izquierda
        while (i < mid) {
          temp[k++] = arr[i++];
        }
  
        // Copiamos los elementos restantes de la derecha
        while (j < right) {
          temp[k++] = arr[j++];
        }
  
        // Actualizamos el índice para la siguiente fusión
        index += 2 * step;
      }
  
      // Copiamos los elementos del array temporal de vuelta al array original
      for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
      }
  
      // Doblamos el tamaño de la sublista para la siguiente fusión
      step *= 2;
    }
  
    return arr;
  }
  
  // Ejemplo de uso
  let array = [5, 3, 8, 4, 2];
  console.log(mergeSort(array));
  