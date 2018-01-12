module.exports = {
  verifyVar: function(a){
    if(a instanceof Array){
      console.log("PASS: The variable is an Array");
      return true;
    }
    else{
      console.log("FAIL: The variable passed is not an Array, it is a " + typeof a );
      return null;
    }
  }
}
