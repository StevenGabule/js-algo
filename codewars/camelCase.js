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
function toCamelCase(str) {
  if (str === '') return '';
  const dash = str.match(/([-_])/);
  if (dash.input) {
    const arrs = dash.input.split(/[-_]+/)
    const newArr = arrs.map((ar) => {
      let _d = [ar[0].toUpperCase(), ...ar].splice(1,1)
      return ar;
    })
    return newArr.join('')
  }
}

console.log(toCamelCase(''))
console.log(toCamelCase('the_stealth_warrior'))
console.log(toCamelCase('The-Stealth-Warrior'))
console.log(toCamelCase('A-B-C'))

