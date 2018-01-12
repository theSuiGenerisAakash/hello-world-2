var f = require('./arraySum');

//Testing verifyVar()
console.log("Does it accept arrays: ", f.verifyVar([1,2,3]) === true);
console.log("Does it reject numbers(integers): ", f.verifyVar(21) === false);
console.log("Does it reject objects: ", f.verifyVar({}) === false);
console.log("Does it reject strings: ", f.verifyVar("12") === false);
console.log("Does it reject booleans: ", f.verifyVar(true) === false);
console.log("Does it reject numbers(float): ", f.verifyVar(12.32) === false);
console.log("Does it reject undefined: ", f.verifyVar(undefined) === false);
console.log("Does it reject null: ", f.verifyVar(null) === false);

//Treating an array inside a string to be valid.
console.log("Would '[1,2,3]' be interpreted as [1,2,3]: ",f.verifyVar('[1,2,3]') === true);   //Will return false

//Testing verifyLen
console.log("Does it pass on arrays of same lengths [1,2], [2,1]: ", f.verifyLen([1,2], [2,1]) === true);
console.log("Does it fail on arrays of different lengths [1,2,3,4,5], [2,1]: ", f.verifyLen([1,2,3,4,5], [2,1]) === false);
console.log("Are empty arrays equal in length [], []: ", f.verifyLen([], []) === true);
