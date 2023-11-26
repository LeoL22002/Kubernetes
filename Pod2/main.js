// searchAlgorithms.js
function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return mid; // Devuelve el índice si se encuentra el elemento
      } else if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Devuelve -1 si el elemento no se encuentra
  }
  
  function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Intercambia los elementos si están en el orden incorrecto
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr; // Devuelve el array ordenado
  }
  
  module.exports = {
    binarySearch,
    bubbleSort,
  };
  