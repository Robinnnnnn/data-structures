# Solution Notes

## Queue Data Structure

### Functional
```Javascript

var someFunc = function (){

  let anInstance = {};//all methods will be referenced to this object instance.

  let storage = {}; //Will contain information, this could also be just basic data about the object.

  anInstance.anyMethod = function(){
  }

}

```

### Functional Shared

```Javascript

var someFunc = function (){

  let anInstance = {};//all methods will be referenced to this object instance.
  anInstance.storage = {}; //Will contain information, this could also be just basic data about the object.

  _.extend(anInstance, sharedStorage)

  return anInstance;
}

let sharedStorage = {}; //will hold all shared methods thats instances will reference

sharedStorage.anyMethod = function(){
  //when refrencing your instance, you need to use this keyword ***this***
  //For ex.
  this.storage; //will reference your specific instance
}

let mySpecificInstance = someFunc();
mySpecificInstance.anyMethod();//when you use this, this refers to mySpecificInstance

```

### Prototypal Pattern

```Javascript

var someFunc = function (){

  let anInstance = Object.create(sharedStorage); //all methods will be referenced to this object instance. Object.create creates that delegation of the methods

  anInstance.storage = {}; //Will contain information, this could also be just basic data about the object.

  return anInstance;
}

let sharedStorage = {}; //will hold all shared methods thats instances will reference

sharedStorage.anyMethod = function(){

}

```

### Pseudoclasssical Pattern

```Javascript

var someFunc = function (){

  this.maybeSomeStorage = {}; //Will contain information, this could also be just basic data about the object.
  this.anyDataYouWant = true;
}

someFunc.prototype.anyMethod = function(){
  //reference your instance using this.
}

var iWouldCreateAnInstanceWith = new someFunc();
// the new keyword, in the backround, runs Object.create and returns the instance. That it why you dont see it here.

```

### Hash Tables
- Tuples -> Position 0 = Key, Position 1 = Value -> [Key, Value]