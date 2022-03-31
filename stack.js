// Stacks

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor(value) {
		const newNode = new Node(value)
		this.top = newNode
		this.length = 1
	}
}


