function heapSort(arr) {
  let len = arr.length;

  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }

  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, --len);
  }

  return arr;
}

function heapify(arr, i, len) {
  let max = i;
  let left = i * 2 + 1;
  let right = left + 1;

  if (left < len && arr[left] > arr[max]) {
    max = left;
  }
  if (right < len && arr[right] > arr[max]) {
    max = right;
  }

  if (max !== i) {
    swap(arr, i, max);
    heapify(arr, max, len);
  }
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

console.log(heapSort([5, 2, 7, 3, 6, 1, 4]));
