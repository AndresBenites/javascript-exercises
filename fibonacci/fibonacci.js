const fibonacci = function(num) {
    numArray = [0, 1, 1]
    if (num <= 2) return numArray[num];
    for(i = 2; i < num; i++){
        numArray[i+1] = numArray[i] + numArray[i-1];
    }
    return numArray[num];
}

console.log(fibonacci(3));

module.exports = fibonacci
