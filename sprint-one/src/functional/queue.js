var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  let firstIn = 0;
  let firstOut = 0;

  someInstance.enqueue = function(value) {
    storage[firstIn] = value;
    firstIn += 1;
    return value;
  };

  someInstance.dequeue = function() {
    let aboutToDelete = storage[firstOut];
    delete storage[firstOut];
    firstOut +=1;
    return aboutToDelete;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
var obj = Queue();
console.log(obj);