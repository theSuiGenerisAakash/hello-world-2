module.exports = {
  verifyVar: function(a){
    if(a.constructor === Array){
      console.log("PASS: The variable is an Array");
      return true;
    }
    else{
      console.log("FAIL: The variable passed is not an Array");
      return null;
    }
  }
}
