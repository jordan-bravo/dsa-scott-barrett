function selectionSort(array) {
	let minIndex 
	for (let i = 0; i < array.length - 1; i++) {
		minIndex = i
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIndex]) minIndex = j
		}
		if (i !== minIndex) {
			let temp = array[i]
			array[i] = array[minIndex]
			array[minIndex] = temp
		}
	}
	return array
}

selectionSort([4, 2, 6, 5, 1, 3])
