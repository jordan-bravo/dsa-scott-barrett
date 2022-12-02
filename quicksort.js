/* quicksort.js */

function quickSort(array, left=0, right=array.length-1) {
  if(left < right) {
    let pivotIndex = pivot(array, left, right)
    quickSort(array, left, pivotIndex-1)
    quickSort(array, pivotIndex+1, right)
  }
}

function swap (array, firstIndex, secondIndex) {
  let temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

function pivot(array, pivotIndex=0, endIndex=array.length-1) {
  let swapIndex = pivotIndex
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++
      swap(array, swapIndex, i)
    }
  }
  swap(array, pivotIndex, swapIndex)
  return swapIndex
}

quickSort([4,6,1,7,3,2,5])
