const repeatString = function(str, repeat) {
    let returnString = "";
    for (i=0; i < repeat; i++){
        returnString += str;
    }
    return returnString;
}

module.exports = repeatString
