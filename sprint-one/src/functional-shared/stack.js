var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newInstance = {};

  newInstance.storage = {};
  newInstance.index = 0;

  _.extend(newInstance, stackMethods);

  return newInstance;
};

let stackMethods = {
  //methods for size, add, and remove

};

stackMethods.push = function(value){
  this.storage[this.index] = value;
    this.index += 1;
};

stackMethods.pop = function(){
  let aboutToDelete = this.storage[this.index-1];
  delete this.storage[this.index-1];
  this.index-=1;
  return aboutToDelete;
};

stackMethods.size = function(){
  return Object.keys(this.storage).length;
}
