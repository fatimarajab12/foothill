// ----------------------------
// Partial Application Example
// ----------------------------

//  Define the partialMultiplier function
// This function takes one number (multiplier) and returns a new function
// The inner function takes another number and returns the product of the two numbers
function partialMultiplier(multiplier) {
  // closure: the inner function remembers the value of multiplier
  return function(number) {
    return multiplier * number;
  };
}

// Create a function doubleValue using partialMultiplier
// Fix multiplier = 2
const doubleValue = partialMultiplier(2);

//  Use doubleValue
console.log(doubleValue(5));   // 10
console.log(doubleValue(12));  // 24
console.log(doubleValue(100)); // 200
const tripleValue = partialMultiplier(3);
console.log(tripleValue(4)); // 12
console.log(tripleValue(7)); // 21


// ----------------------------
// Explanation
// ----------------------------

// - When we call partialMultiplier(2):
//   - The outer function finishes execution
//   - But the inner function "remembers" the multiplier = 2
//   - This is the closure: the inner function keeps access to the variables of the outer function even after it finishes

// - Each time we call doubleValue(x):
//   - number = x
//   - multiplier is preserved from the closure = 2
//   - The result = multiplier * number

// - Benefits:
//   1. Code reusability: easily create functions like double, triple, etc.
//   2. Data encapsulation: multiplier is protected and cannot be changed from outside
//   3. Flexibility: we can create different multiplier functions like tripleValue, quadrupleValue, etc.
