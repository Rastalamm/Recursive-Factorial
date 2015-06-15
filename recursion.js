
function recursion(num, numFactor){

  if(typeof num !== "number") return false;
  if(num <= 0) return 0;


  var numFactor = numFactor || 1;

  if(num >= 1){

    numFactor *= num;
  return recursion(--num, numFactor);
  }

  return numFactor;

}

module.exports = recursion;