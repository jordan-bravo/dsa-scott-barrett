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
function mergeSort(array) {
	if (array.length === 1) return array

	let halfLength = Math.floor(array.length/2)
	let leftArray = array.slice(0, halfLength)
	let rightArray = array.slice(halfLength)

	return merge( mergeSort(leftArray), mergeSort(rightArray) )
}

mergeSort([3,1,4,2])
