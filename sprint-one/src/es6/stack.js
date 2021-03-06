class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value){
    this.storage[this.index] = value;
    this.index++;
  }

  pop(){
    let toDelete = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index -= 1;
    return toDelete;
  }

  size(){
    return Object.keys(this.storage).length;
  }

}