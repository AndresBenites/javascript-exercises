const caesar = function (str, int = 0) {
  let newStr;
  let strArray = Array.from(str);
  let encStr = "";
  let letter = "";
  let wrapperInt = 0;
  for (i = 0; i < strArray.length; i++) {
    letter = strArray[i];
    // letters less than A
    if (letter.charCodeAt(0) < 65) {
      strArray[i] = strArray[i].charCodeAt(0);
    } else if (
      // Letters above Z but below a and above z
      (letter.charCodeAt(0) > 90 && letter.charCodeAt(0) < 97) ||
      letter.charCodeAt(0) > 122
    ) {
      strArray[i] = strArray[i].charCodeAt(0);
      // letters from A-Z
    } else if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      // letter + int above Z
      if (letter.charCodeAt(0) + int > 90) {
        wrapperInt = int;
        while (letter.charCodeAt(0) + wrapperInt > 90) {
          wrapperInt -= 26;
        }
        strArray[i] = strArray[i].charCodeAt(0) + wrapperInt;
        // letter + (-int) below A
      } else if (letter.charCodeAt(0) + int < 65) {
        wrapperInt = int;
        while (letter.charCodeAt(0) + wrapperInt < 65) {
          wrapperInt += 26;
        }
        strArray[i] = strArray[i].charCodeAt(0) + wrapperInt;
      } else {
        strArray[i] = strArray[i].charCodeAt(0) + int;
      }
      // should all be a-z
    } else {
      if (letter.charCodeAt(0) + int > 122) {
        wrapperInt = int;
        while (letter.charCodeAt(0) + wrapperInt > 122) {
          wrapperInt -= 26;
        }
        strArray[i] = strArray[i].charCodeAt(0) + wrapperInt;
      } else if (letter.charCodeAt(0) + int < 97){
        wrapperInt = int;
        while (letter.charCodeAt(0) + wrapperInt < 97) {
          wrapperInt += 26;
        }
        strArray[i] = strArray[i].charCodeAt(0) + wrapperInt;        
      } else {
        strArray[i] = strArray[i].charCodeAt(0) + int;
      }
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

module.exports = caesar;
