function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
	let theSum = 0;
	for (i=0; i<arr.length; i++){
		theSum += parseInt(arr[i]);
	}
	return theSum;
}

function multiply(arr) {
	let myX = 1;
	for(i=0; i< arr.length; i++){
		myX *= parseInt(arr[i]);
	}
	return myX;
}

function power(a, b) {
	pow = 1;
	for (i=0; i<b;i++){
		pow *= a;
	}
	return pow;
}

function factorial(a) {
	let myFX = 1;
	for(i=a; i > 0; i--){
		myFX *= i;
	}
	if (myFX == 0) return 1;
	return myFX;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
