const fibonacci = function(num) {
    if (isNaN(parseInt(num))) return "OOPS";
    num = parseInt(num);
    if (num < 0) return "OOPS";
    numArray = [0, 1, 1]
    if (num <= 2) return numArray[num];
    for(i = 2; i < num; i++){
        numArray[i+1] = numArray[i] + numArray[i-1];
    }
    return numArray[num];
}


module.exports = fibonacci
