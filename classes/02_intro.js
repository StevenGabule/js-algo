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
}
const area = new Rectangle(10, 10)
console.log(area.area); // 100*/

/*class Person {
  constructor(persons) {
    this.persons = persons;
  }

  displayPersons() {
    console.table(this.persons)
  }
}
// records, array of objects
// objects is a group information or a record
const persons = [
  {name: "John Paul Gabule", age: 28, civil_status: 'single', school_at: "ACLC"},
  {name: "John Doe",age: 31,civil_status: 'married',school_at: "Buk"},
  {name: "Jane Doe",age: 25,civil_status: 'married', school_at: "CMU"}
];

const people = new Person(persons);
people.displayPersons();*/

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
    for (const side of this.sides) {
      // The yield keyword is used to pause and resume a generator function
      // (function* or legacy generator function).
      yield side;
    }
  }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);
// prev yield number
// [1, 2, 3, 4, 5]
console.log([...pentagon.getSides()]); // [1,2,3,4,5]

