module.exports = {
  verifyVar: function(anArray){
    if(anArray instanceof Array || (typeof anArray === 'string' && JSON.parse(anArray) instanceof Array)){
      console.log("PASS: The variable is an Array");
      return true;
    }
    else{
      console.log("FAIL: The variable passed is not an Array, it is a " + typeof anArray );
      return false;
    }
  },

  verifyLen: function(firstArr, secondArr){
    if(this.verifyVar(firstArr) && this.verifyVar(secondArr)){
        return firstArr.length === secondArr.length;
    }
  },

  verifyElements: function () {
    
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
