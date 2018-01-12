var f = require('./arraySum');

//Testing verifyVar()
console.log(f.verifyVar([1,2,3]) === true);
console.log(f.verifyVar(21) === false);
console.log(f.verifyVar({}) === false);
console.log(f.verifyVar("12") === false);
console.log(f.verifyVar(true) === false);
console.log(f.verifyVar(12.32) === false);
console.log(f.verifyVar(undefined) === false);
console.log(f.verifyVar(null) === false);
