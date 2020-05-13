class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
    this.deIndex = 0;
  }

  enqueue(value){
    this.storage[this.index] = value;
    this.index += 1;
  }

  dequeue(){
    let toDelete = this.storage[this.deIndex];
    delete this.storage[this.deIndex];
    this.deIndex += 1;
    return toDelete;
  }

  size(){
    return Object.keys(this.storage).length;
  }
}
