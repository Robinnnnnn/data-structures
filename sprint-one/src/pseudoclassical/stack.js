var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.index] = value;
  this.index += 1;
}

Stack.prototype.pop = function(){
  let toDelete = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return toDelete;
}

Stack.prototype.size = function(){
  return Object.keys(this.storage).length;
}


