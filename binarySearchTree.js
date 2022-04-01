class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BST {
	constructor() {
		this.root = null
	}
	insert(value) {
		const newNode = new Node(value)
		if (this.root = null) {
			this.root = newNode
			return this
		}
		let temp = this.root
		while(true) {
			if (newNode.value === temp.value) return undefined	
		}
		if (temp.value < newNode.value) {
			// go left
		} else {
			// go right
		}
		
	}
}

let myTree = new BST()
