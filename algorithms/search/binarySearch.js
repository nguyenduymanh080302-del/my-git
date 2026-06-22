function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = array[mid];

    if (value === target) {
      return mid;
    }

<<<<<<< HEAD
    if (value < target) {
=======
    if (!value >= target) {
>>>>>>> manhnd111
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
