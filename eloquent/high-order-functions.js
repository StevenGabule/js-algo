function forEach(arr, action) {
    const total = arr.length;
    for (let i = 0; i < total; i++) {
        action(arr[i]);
    }
}
//
// console.log(forEach(['water', ' fire', 'night'], console.log))
// let sum = 0;
// console.log(forEach([1, 2, 3, 4, 5], function (number) {
//     sum += number;
// }))
//
// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);
// console.log(maximus)
// const maximus1 = Math.max(...arr);
// console.log(maximus1)

const rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit say " + line)
}
rabbit.speak("fuck it!");

function speak(line) {
    console.log("The "+ this.type +" rabbit says " + line)
}
const whiteRabbit = {type: "white", speak: speak};
const fatRabbit = {type: "fat", speak: speak};
whiteRabbit.speak("oh my ears and whickers, how late it's getting!")
fatRabbit.speak("I could sure use a carrot right now.")
speak.apply(fatRabbit, ['Burp!']);
speak.call({type: 'old'}, ['Oh my.']);
