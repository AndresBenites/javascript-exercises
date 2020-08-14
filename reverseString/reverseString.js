const reverseString = function(myString) {

    myArray = myString.split("");
    myArray = myArray.reverse();
    let returnStr = myArray.join("");
    return returnStr;
}

module.exports = reverseString
