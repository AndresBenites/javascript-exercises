const caesar = function (str, int) {
  let newStr;
  let strArray = Array.from(str);
  let encStr = "";
  let letter = "";
  for (i = 0; i < strArray.length; i++) {
    letter = strArray[i];
    if (letter.charCodeAt(0) < 48) {
      strArray[i] = strArray[i].charCodeAt(0);
    } else if (letter.charCodeAt(0) > 90 && letter.charCodeAt(0) < 97 ||
      letter.charCodeAt(0) > 122){
      console.log(`letter: ${letter.charCodeAt(0)}`);
      strArray[i] = strArray[i].charCodeAt(0);
    } else {
      strArray[i] = strArray[i].charCodeAt(0) + int;
    }
  }


  for (i = 0; i < strArray.length; i++) {
    if (String.fromCharCode(strArray[i]) == undefined) {
      continue;
    }
    encStr += String.fromCharCode(strArray[i]);
  }
  return encStr;
};

caesar("Hello,[/ World!", 5);

module.exports = caesar;
