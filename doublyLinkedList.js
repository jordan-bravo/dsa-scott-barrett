// Doubly Linked List

class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor(value) {
		const newNode = new Node(value)
		this.head = newNode
		this.tail = this.head
		this.length = 1
	}
	push(value) {
		const newNode = new Node(value)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
		return this
	}
	pop() {
		if (!this.head) return undefined
		let temp = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
		this.tail = this.tail.prev
		this.tail.next = null
		temp.prev = null
		}
		this.length--
		return temp
	}
	unshift(value) {
		const newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		this.length++
		return this
	}
	shift() {
		if (this.length === 0) return undefined
		let temp = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
		    this.head = this.head.next
		    this.head.prev = null
		    temp.next = null
		}			
		this.length--
		return temp
	}
	get(index) {
		if (index < 0 || index >= this.length) return undefined
		let temp = this.head
		if (index < this.length / 2) {
			for (let i = 0; i < index; i++) {
				temp = temp.next
			}
		} else {
			temp = this.tail
			for (let i = this.length - 1; i > index; i--) {
				temp = temp.prev
			}
		}
		return temp
	}
}

let myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
