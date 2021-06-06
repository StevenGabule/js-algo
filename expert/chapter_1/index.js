var foo = {},
    bar = new Object(),
    baz = Object.create(null)


var car = {};
Object.defineProperty(car, 'doors', {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 4
});

Object.defineProperty(car, 'wheels', {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 4
});

Object.defineProperty(car, 'secretTrackingDeviceEnabled', {
    enumerable: false,
    value: true
})

for (const x in car) {
    console.log(x)
}

console.log(Object.keys(car))
console.log(Object.getOwnPropertyNames(car))
console.log(Object.propertyIsEnumerable('secretTrackingDeviceEnabled'))
console.log(car.secretTrackingDeviceEnabled);

var o = { foo: 'bar'};
console.log(Object.getOwnPropertyDescriptor(o, 'foo'))

const box = Object.create({}, {
    openLid: {
        value: function() {
            return "nothing";
        },
        enumerable: true
    },
    openSecretCompartment: {
        value: function () {
            return "treasure";
        },
        enumerable: false
    }
})

console.log(Object.getOwnPropertyNames(box).sort());

var a = {};
console.log(Object.getPrototypeOf(a) === Object.prototype && Object.prototype === a.__proto__);

const foo1= {
    foo: 'foo'
}

const bar1 = Object.create(foo1, {
    bar: {
        enumerable: true,
        value: 'bar'
    }
});

for (const x in bar1) {
    console.log(x);
}

const myProps = Object.getOwnPropertyNames(bar1).map(function(i) {
    return bar1.hasOwnProperty(i) ? i : undefined;
})
console.log(myProps);
console.log(Object.keys(box))

/*
delete car.doors;
console.log(car.doors);

delete car.wheels;
console.log(car.wheels);

Object.defineProperty(car, 'doors', {
    configurable: true,
    value: 5
})
console.log(car.doors);

Object.defineProperty(car, 'wheels', {
    configurable: true,
    value: 4
})*/
