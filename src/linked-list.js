const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node1 = new Node();
        var node2 = new Node();

        if(this.length == 0){
            this.length = 1;
            this._head = node1;
            this._tail = node1;
            node1.data = data;
            return;
            }

        node2 = this._tail;
        node1.prev = node2;
        node2.next = node1;
        node1.data = data;
        this._tail = node1;
        this.length++;
        return;
    }

    head() {
        var node1 = new Node();
        node1 = this._head;
        return node1.data;
    }

    tail() {
        var node40 = new Node();
        node40 = this._tail;
        return node40.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;