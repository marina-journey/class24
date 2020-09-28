function ExampleTask() {
  console.log(this);
  this.a = 2;
}

function Example() {
  ExampleTask.call(this);
  console.log(this);
}

Example.prototype = Object.create(ExampleTask.prototype);
Example.prototype.constuctor = Example;

const ex = new Example();

// ex: {} -> {} -> ExampleTask.prototype -> Object.prototype

console.log(ex);
