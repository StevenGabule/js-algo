function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

// add element to end of a queue
function enqueue(el) {
	this.dataStore.push(el);
}

// remove element to front of a queue
function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length-1];
}

function toString() {
	var reStr = "";
	for( var i = 0; i < this.dataStore.length; ++i ) {
		reStr += this.dataStore[i] + "\n";
	}
	return reStr;
}


function empty() {
	if(this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}

var q = new Queue();

q.enqueue("John Doe");
q.enqueue("Jane doe");
q.enqueue("lack ddue");

console.log(q.toString());

q.dequeue();

console.log(q.toString());

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());