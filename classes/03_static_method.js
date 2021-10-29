// static methods
// static variable
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static displayName1 = "Point 1";
  static displayName2 = "Point 2";
  static distance(p1, p2) {
    const px = p1.x - p2.x;
    const py = p1.y - p2.y;
    return Math.hypot(px, py);
  }
}
// initialization
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName1; // undefined
p1.distance;    // undefined
p2.displayName1; // undefined

console.log(Point.displayName1);      // "Point 1"
console.log(Point.displayName2);      // "Point 2"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
