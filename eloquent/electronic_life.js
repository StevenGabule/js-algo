function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = (other) => new Vector(this.x + other.x, this.y + other.y)
