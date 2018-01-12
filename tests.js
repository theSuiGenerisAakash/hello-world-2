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

//Testing arraySum
console.log("Is the sum of [1,2,3] and [4,5,6] equal to [5,7,9]: ", f.arraySum([1, 2, 3], [4, 5, 6], [5, 7, 9]) === true);
console.log("Is the sum of [1,2,-5] and [4,5,-6] equal to [5,7,-11]: ", f.arraySum([1, 2, -5], [4, 5, -6], [5, 7, -11]) === true);
console.log("Should the sum of [1,2] and [4,5,6,7] give an error: ", f.arraySum([1, 2], [4, 5, 6, 7]) === false);
console.log("Should the sum of [] and [4,-Infinity,6] give an error: ", f.arraySum([], [4, -Infinity, 6]) === false);
console.log("Should the sum of [1,2,3] with undefined give an error ", f.arraySum([1, 2, 3], undefined) === false);
console.log("Should the sum of [] and [] equal to []: ", f.arraySum([], [], []) === true);

//Added two test cases to reject cases with elements that are not numbers
console.log("Should the array [1,2,{}] give an an error: ", f.verifyElements([1,2,{}]) === false);
console.log("Should the array [undefined,null,\"yes\"] give an error: ", f.verifyElements([undefined,null,"yes"]) === false);

//Testing arraySum where ONLY NUMBERS are allowed as elements
console.log("Should the sum of [1,2,undefined, {}] and [4,5,6,7] give an error: ", f.arraySum([1, 2, undefined, {}], [4, 5, 6, 7]) === false);
