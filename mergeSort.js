function mergeSort(array) {
	if (array.length === 1) merge(array1, array2)

	let mid = Math.floor(array.length/2)
	let left = array.slice(0, mid)
	let right = array.slice(mid)

	return merge(left, right )
	function merge(array1, array2) {
		let combined = []	
		let i = 0
		let j = 0
		while (i < array1.length && j < array2.length) {
			if (array1[i] < array2[j]) {
				combined.push(array1[i])
				i++
			} else {
				combined.push(array2[j])
				j++
			}
		}
		while (i < array1.length) {
			combined.push(array1[i])
			i++
		}
		while (j < array2.length) {
			combined.push(array2[j])
			j++
		}
		return combined
	}
	let array1 = []
	let array2 = []
	for (let m = 0; m < array.length / 2; m++) {
		array1.push(array[m])
	}
	for (let n = array.length / 2; n < array.length; n++) {
		array2.push(array[n])
	}
}
