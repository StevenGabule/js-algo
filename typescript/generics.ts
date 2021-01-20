/*** ///////// Simple Generic  /////////  ***/
function echo(data: any) {
    return data;
}

console.log(echo("max"));
console.log(echo(23));
console.log(echo({name: "mex", age: 23}));

/*** ///////// Better Generic  /////////  ***/
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(24));
console.log(echo({name: "mex", age: 23}));

/*** ///////// Built-in Generic  /////////  ***/
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-24.20);
console.log(testResults);

/*** ///////// Array  /////////  ***/
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

/*** ///////// Generic Types  /////////  ***/
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));

/*** ///////// Generic Class  /////////  ***/
class SimpleMath<T extends number | string,U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());


/*** /////////// MyMap Exercise  /////////// ***/
class MyMap<T> {
    private map: {[key: string] : T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }
    getItem(key:string) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key])
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("bananas", 2);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();


const stringMap = new MyMap<string>();
stringMap.setItem("apples", "10");
stringMap.setItem("bananas", "2");
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();






