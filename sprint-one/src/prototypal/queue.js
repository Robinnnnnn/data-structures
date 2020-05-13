var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newInstance = Object.create(queueMethods);

  newInstance.storage = {};
  newInstance.index = 0;
  newInstance.popIndex = 0;

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.index] = value;
  this.index +=1;
}

queueMethods.dequeue = function(){
  let aboutToDelete = this.storage[this.popIndex];
  delete this.storage[this.popIndex];
  this.popIndex += 1;
  return aboutToDelete;
}

queueMethods.size = function(){
  return Object.keys(this.storage).length;
}
