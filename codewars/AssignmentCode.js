function alphabetPosition(text) {
  let res = "";
  if (text.match(/[a-z]/gi)) {
    text.split('').map((word, i) => {
      let code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) res += (code - 64) + " ";
    })
  }
  console.log(res.slice(0, res.length - 1));
}

alphabetPosition("The sunset sets at twelve o' clock.");






