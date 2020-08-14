const ftoc = function(myTemp) {
  let returnTemp = 0;

  returnTemp = (myTemp - 32) * (5/9);
  return roundToTwo(returnTemp);

}

const ctof = function(myTemp) {
  let returnTemp = 0;
  returnTemp = (myTemp) *(9/5) +32;
  return roundToTwo(returnTemp);
}

function roundToTwo(num){
  return +(Math.round(num + "e+2") + "e-2");
}

module.exports = {
  ftoc,
  ctof
}
