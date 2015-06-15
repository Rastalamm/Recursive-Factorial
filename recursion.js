
function recursion(num){

  if(typeof num !== "number") {
    return false;
  }

  if (num <= 0){
    return false;
  }

  if (num === 1){
    return num;
  }

  // var nextNum = recursion(--num);
  // console.log(nextNum, num);
  return num * recursion(--num);


}

module.exports = recursion;