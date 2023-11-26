// BusquedaLineal.js
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i; // Devuelve el índice si se encuentra el elemento
      }
    }
    return -1; // Devuelve -1 si el elemento no se encuentra
  }
  
// jumpSearch.js
function jumpSearch(arr, x) {
  const n = arr.length;
  const jump = Math.floor(Math.sqrt(n));
  let left = 0;
  let right = 0;

  // Encuentra el bloque donde se encuentra el elemento
  while (right < n && arr[right] < x) {
    left = right;
    right += jump;
    if (right > n - 1) {
      right = n;
    }
  }

  // Realiza una búsqueda lineal en el bloque identificado
  for (let i = left; i <= right; i++) {
    if (arr[i] === x) {
      return i; // Devuelve el índice si se encuentra el elemento
    }
  }

  return -1; // Devuelve -1 si el elemento no se encuentra
}

module.exports = {
  linearSearch,
  jumpSearch,
};
