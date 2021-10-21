class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static displayName = "Point 1";
  static displayName2 = "Point 2";
  static distance(p1, p2) {
    const px = p1.x - p2.x;
    const py = p1.y - p2.y;
    return Math.hypot(px, py);
  }

  distance(x1,x2,y1,y2) {
    const px = x1 - x2;
    const py = y1 - y2;
    console.log(Math.hypot(px, py));
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance(5,10,5,10);    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.displayName2);      // "Point 2"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
