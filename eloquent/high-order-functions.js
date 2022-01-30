function forEach(arr, action) {
  for (let i = 0; i < arr.length; i++) {
    action(arr[i]);
  }
}

forEach(['water', 'fire', 'night'], console.log)
/* :: Expected return ::
  water
  fire
  night
*/

let sum = 0;
forEach([1, 2, 3, 4, 5], (number) => sum += number)

let arr = [6, 89, 3, 45];
const maximus1 = Math.max(...arr);
console.log(maximus1)  // 89

const rabbit = {};
rabbit.speak = (line) => console.log("The rabbit say " + line)
rabbit.speak("fuck it!");

function speak (line) {
  console.log("The " + this.type + " rabbit says " + line)
}

const whiteRabbit = {type: "white", speak: speak};
const fatRabbit = {type: "fat", speak: speak};
whiteRabbit.speak("oh my ears and whickers, how late it's getting!")
fatRabbit.speak("I could sure use a carrot right now.")

speak.apply(fatRabbit, ['Burp!']);
speak.call({type: 'old'}, ['Oh my.']);
