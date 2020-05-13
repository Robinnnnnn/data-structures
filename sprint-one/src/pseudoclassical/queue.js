var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
  this.deIndex = 0;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.index] = value;
  this.index += 1;
}

Queue.prototype.dequeue = function(){
  let toDelete = this.storage[this.deIndex];
  delete this.storage[this.deIndex];
  this.deIndex += 1;
  return toDelete;
}

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
}