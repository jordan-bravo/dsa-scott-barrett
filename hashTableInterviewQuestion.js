function hasItemsInCommon(arr1, arr2) {
	const obj = {}
	for (let i = 0; i < arr1.length; i++) {
		obj[arr1[i]] = true
	}
	for (let j = 0; j < arr2.length; j++) {
		if (obj[arr2[j]]) return true
	}
	return false
}

const array1 = [1, 3, 5]
const array2 = [2, 4, 5]

hasItemsInCommon(array1, array2)
