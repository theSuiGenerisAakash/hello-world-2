module.exports = {
  verifyVar: function(a){
    if(a instanceof Array || (typeof a === 'string' && JSON.parse(a) instanceof Array)){
      console.log("PASS: The variable is an Array");
      return true;
    }
    else{
      console.log("FAIL: The variable passed is not an Array, it is a " + typeof a );
      return false;
    }
  },

  verifyLen: function(firstArr, secondArr){
    if(this.verifyVar(firstArr) && this.verifyVar(secondArr)){
        return firstArr.length === secondArr.length;
    }
  },

  arraySum: function(firstArr, secondArr){

  }
}
