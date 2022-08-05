class HashTable {
	constructor(size = 7) {
		this.dataMap = new Array(size)
	}
	_hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
		}
		return hash
	}
	set(key, value) {
		let index = this._hash(key)
		if (!this.dataMap[index]) {
			this.dataMap[index] = []
		}
		this.dataMap[index].push([key, value])
		return this
	}
	get(key) {
		let index = this._hash(key)
		if (this.dataMap[index]) {
			for (let i = 0; i < this.dataMap[index].length; i++) {
				if (this.dataMap[index][i][0] === key) {
					return this.dataMap[index][i][1]
				}
			}
		}
		return undefined
	}
	keys() {
		let keyList = []
		for (let i = 0; i < this.dataMap.length; i++) {
			if (this.dataMap[i]) {
				for (let j = 0; j < this.dataMap[i].length; j++) {
					keyList.push(this.dataMap[i][j][0])
				}
			}
		}
		return keyList
	}
}

let myHashTable = new HashTable()
myHashTable

function hasItemsInCommon(arr1, arr2) {
	let obj = {}
	for (let i = 0; i < arr1.length; i++) {
		ojb[arr1[i]] = true
	}
	for (let j = 0; j < arr2.length; j++) {
		if (obj[arr2[j]]) return true
	}
	return false
}
