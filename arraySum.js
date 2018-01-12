module.exports = {
  verifyVar: function(varToTest, typeVar = Array){
    if(typeVar === Array){
      if(varToTest instanceof typeVar || (typeof varToTest === 'string' && JSON.parse(varToTest) instanceof Array)){
        console.log("PASS: The variable is an Array");
        return true;
      }
      else{
        console.log("FAIL: The variable passed is not an Array, it is a " + typeof varToTest );
        return false;
      }
    }
    else {
      if(varToTest instanceof typeVar && !isNaN(varToTest)){
        console.log("PASS: The variable is a Number");
        return true;
      }
      else{
        console.log("FAIL: The variable passed is not a number, it is a " + (typeof varToTest === "number"? "NaN" : typeof varToTest));
        return false;
      }
    }
  },

  verifyLen: function(firstArr, secondArr){
    if(this.verifyVar(firstArr) && this.verifyVar(secondArr)){
      return firstArr.length === secondArr.length;
    }
  },

  verifyElements: function (anArray) {
    let len = anArray.length;
    for (let i = 0; i < len; i++) {
      if(!this.verifyVar(anArray[i], Number)){
          return false;
      }
    }
    return true;
  },

  arraySum: function(firstArr, secondArr, expectedSumArray = []){
    if(this.verifyLen(firstArr, secondArr)){
      let len = firstArr.length;
      let sumOfTwoArrays = [];
      for(let i = 0; i < len; i++){
        sumOfTwoArrays[i] = firstArr[i] + secondArr[i];
      }
      if(expectedSumArray.length === 0)
      return sumOfTwoArrays;
      else {
        for(let i = 0; i < len; i++){
          if(sumOfTwoArrays[i] !== expectedSumArray[i]){
            console.log("Elements at position ",i," are not same");
            return false;
          }
        }
        return true;
      }
    }
    else {
      return false;
    }
  }
}
