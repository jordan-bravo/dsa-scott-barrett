class Graph {
	constructor() {
		this.adjacencyList = {}
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = []
			return true
		}
		return false

	}
}
