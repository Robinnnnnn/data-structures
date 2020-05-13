var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index+=1;
  };

  someInstance.pop = function() {
    let aboutToDelete = storage[index-1];
    delete storage[index-1];
    index -=1;
    return aboutToDelete;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
