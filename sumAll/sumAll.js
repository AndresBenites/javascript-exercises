const sumAll = function(start, end) {

    let mySum=0;

    for (i=start; i <= end; i++){
        mySum += parseInt(i);
    }
    return mySum;
}

module.exports = sumAll
