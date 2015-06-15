
function recursion(num, numFactor){

if(typeof num !== "number") return false;

var numFactor = numFactor || 1;

  if(num >= 1){

    numFactor *= num;
  return recursion(--num, numFactor);
  }else{
    return numFactor;
  }


}

module.exports = recursion;