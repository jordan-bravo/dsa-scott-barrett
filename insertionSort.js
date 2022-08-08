function insertionSort(array) {
	let temp
	for (let i = 1; i < array.length; i++) {
		let j
		temp = array[i]
		for (j = i - 1; array[j] > temp && j > -1; j--) {
			array[j + 1] = array[j]
		}
		array[j + 1] = temp
	}
	return array
}

insertionSort([4, 2, 6, 5, 1, 3])
