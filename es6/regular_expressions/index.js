/*
* @src https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
* ================================================================================
* Regular expressions are patterns used to match character combinations in strings.
* In JavaScript, regular expressions are also objects. These patterns are used with
* the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(),
* replaceAll(), search(), and split() methods of String. This chapter describes JavaScript
* regular expressions.
* ================================================================================
* */

/*
* Creating a regular expression
* */
let re = new RegExp('ab+c');
console.log(re);

function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

let myRe = /d(b+)d/g;
let myArray = myRe.exec('cdbbdbsbz');
console.log(myArray);
console.log(myArray.lastIndexOf);


let res = /\w+\s/g;
let str = 'fee fi fo fum';
let myArray1 = str.match(res);
console.log(myArray1);

let xArray;
while(xArray = res.exec(str))
    console.log(xArray);

let $re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
    let $ok = $re.exec(phoneInput);
    if (!$ok) {
        console.log(phoneInput + ' isn\'t a phone number with area code!');
    } else {
        console.log('Thanks, your phone number is ' + $ok[0]);
    }
}

testInfo('123-123-44222222224');
















