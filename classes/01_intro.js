/*
* Defining a class
* */
/*class Rectangle {
  constructor(height, width, size) {
    this.height = height;
    this.width = width;
    this.size = size;
  }
  store(num1) {
    return this.height + this.width + num1;
  }
}
const area = new Rectangle(10, 10, 20); // initialize
console.log(area.store(20));*/

// unnamed or anonymous
// class expressions
let Rectangle1 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle1.name); // output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name); // output: "Rectangle2"

