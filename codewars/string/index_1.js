/***
 *  Complete the method/function so that it converts dash/underscore delimited
 *  words into camel casing. The first word within the output should be capitalized
 *  only if the original word was capitalized (known as Upper Camel Case, also often
 *  referred to as Pascal case).
***/

/*
* ::::SAMPLE TESTS::::
* Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
* Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
* Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
* Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
* */
function toCamelCaseTest1(str) {
    const checkInd = str.split(/[-_]+/);
    if (checkInd.length > -1) {
        let arr1 = [];
        for (let i = 0; i < checkInd.length; i++) {
          if (i === 0) {
            arr1 = [...arr1, checkInd[i]]
          } else {
            arr1 = [...arr1, checkInd[i].replace(/\b\w/g, c => c.toUpperCase())]
          }
        }
        return arr1.join('');
    }
}

// console.log("::toCamelCaseTest1::", toCamelCaseTest1("")); // return empty
// console.log("::toCamelCaseTest1::", toCamelCaseTest1("The_Stealth_Warrior")); // TheStealthWarrior
// console.log("::toCamelCaseTest1::", toCamelCaseTest1("the-stealth-warrior")); //theStealthWarrior

function toCamelCaseTest2(str){
  let containmentArea = []
  let splitString = str.replace(/[^A-Z0-9]/ig, "_").split("_")
  //[ 'the', 'stealth', 'warrior' ]
  let firstElement = containmentArea.push( splitString.splice(0,1) )
  for(let word in splitString){
    let splitWords = splitString[word].split('')
    let capitalLetter = splitWords[0].toUpperCase()
    splitWords.splice(0,1, capitalLetter)
    let joinedWord = splitWords.join('')
    containmentArea.push(joinedWord)
    containmentArea.join('')
  }
  return containmentArea.join('')
}

console.log("::toCamelCaseTest2::", toCamelCaseTest1("")); // return empty
console.log("::toCamelCaseTest2::", toCamelCaseTest1("The_Stealth_Warrior")); // TheStealthWarrior
console.log("::toCamelCaseTest2::", toCamelCaseTest1("the-stealth-warrior")); //theStealthWarrior


function toCamelCaseTest3(str) {
    return str.replace(/[-_]\w/ig, match => match.charAt(1).toUpperCase());
}

const toCamelCase = (str) => str.split(/[-_]/g)
  .map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');

// console.log(toCamelCase("")); // return empty
// console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior
// console.log(toCamelCase("the-stealth-warrior")); //theStealthWarrior
