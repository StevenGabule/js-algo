/*** Lexical scoping ***/
function init() {
  let name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
// init();

function makeFunc() {
  let name = "mije";
  function displayName() {
    console.log(name)
  }
  return displayName;
}

let myFunc = makeFunc();
// myFunc();

function makeAdder(x) {
  return function (y) {
    return x+y;
  }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2))
console.log(add10(2))

// Using closures in this way provides benefits that are normally associated with object-oriented programming.
// In particular, data hiding and encapsulation.
let counter = (function() {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1)
    },
    decrement: function() {
      changeBy(-1)
    },
    value: function() {
      return privateCounter;
    }
  }
})();


console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.

// global scope
let e = 10;
function sum(a) {
  return function(b) {
    return function (c) {
      // outer functions scope
      return function(d) {
        // local scope
        return a+b+c+d+e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:
// global scope
var e = 10;
function sumSample(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sumSample(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result) //log 20

function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function setupHelp() {
  var helpText = [
    {'id': 'email', 'help': 'Your e-mail address'},
    {'id': 'name', 'help': 'Your full name'},
    {'id': 'age', 'help': 'Your age (you must be over 16)'}
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function() {
        showHelp(item.help);
      }
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();


function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

MyObject.prototype.getName = function() {
  return this.name;
};

MyObject.prototype.getMessage = function() {
  return this.message;
};
