/*
Complete the method/function so that it converts dash/underscore delimited
words into camel casing. The first word within the output should be capitalized
only if the original word was capitalized (known as Upper Camel Case, also often
referred to as Pascal case).
* */

/*
* SAMPLE TESTS:
* Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
* Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
* Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
* Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
* */
/*
function toCamelCase(str) {
    if (str === null || str === "") {
        return "";
    }
    const n = str.indexOf('-');
    if (n > -1) {
        let arr = str.split(/[-_]+/);
        const arr1 = arr.map((val, i) => [val[0].toUpperCase(), ...val].join(''))
        return arr1.join('');
    }

    const arr = str.split(/[-_]+/);
    return arr.join('');

}*/
/*
function toCamelCase(str){
    //console.log(str, 'testing')
    if(str === ''){
        return ''
    } else {
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
            let newSentence = containmentArea.join('')

        }
        return containmentArea.join('')
    }
}*/
/*
function toCamelCase(str) {
    return str.replace(/[-_]\w/ig, match => match.charAt(1).toUpperCase());
}
*/

const toCamelCase = (str) => str.split(/[-_]/g)
  .map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');

console.log(toCamelCase("")); // return empty
console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior
console.log(toCamelCase("the-stealth-warrior")); //theStealthWarrior
