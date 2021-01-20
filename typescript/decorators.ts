function logged(constructorFn: Function) {
    console.log(constructorFn)
}

@logged
class Decorators {
    constructor() {
        console.log("H!");
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {
}

// advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this)
    }
}

@logging(true)
@printable
class Plant {
    name = "Green shot!"
}

const plants = new Plant();
(<any>plants).print();

/*** ///////// METHOD DECORATORS and PROPERTY DECORATORS  ///////// ***/
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overWritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

class Projects {
    @overWritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000)
    }
}

let projects = new Projects("Super budget");
projects.calcBudget();
projects.calcBudget = function () {
    console.log(2000)
}
projects.calcBudget();

/*** ///////// PARAMETERS DECORATORS ///////// ***/
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(1000)
        } else {
            console.log(2000);
        }
    }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true)
course.printStudentNumbers("anything", false)

























