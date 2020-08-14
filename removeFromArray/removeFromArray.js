const removeFromArray = function(myArray, str) {

    let returnArray = Array.from(myArray).filter(e => e !== str);
    return returnArray;
}

module.exports = removeFromArray
