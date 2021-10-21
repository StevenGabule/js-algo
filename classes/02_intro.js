/*class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
   // Method
  calcArea() {
    return this.height * this.width;
  }
}*/

class Person {
  constructor(info) {
    this.info = info;
  }
   displayInfo(){
    console.table(this.info)
  }
}

// const square = new Rectangle(10, 10);
// console.log(square.area); // 100

const persons = [{
  name: "John Paul Gabule",
  age: 28,
  civil_status: 'single',
  school_at: "ACLC College of Bukidnon"
},{
  name: "John Doe",
  age: 31,
  civil_status: 'married',
  school_at: "ACLC College of Bukidnon"
},{
  name: "Jane Doe",
  age: 31,
  civil_status: 'married',
  school_at: "ACLC College of Bukidnon"
},]
/*const people = new Person(persons);
people.displayInfo();*/

/*
* Generator methods
* */
class Polygon {
  // ... rest operator - collect the parameters
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for(const side of this.sides){
      // The yield keyword is used to pause and resume a generator function
      // (function* or legacy generator function).
      yield side;
    }
  }
}

const pentagon = new Polygon(1,2,3,4,5);
console.log([...pentagon.getSides()]); // [1,2,3,4,5]
