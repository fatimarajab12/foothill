// ===== Example 1: Simple Closure =====
function outerFunction() {
  let count = 0; // private variable inside outerFunction

  function innerFunction() {
    count++; // each call increases the same count
    return count;
  }

  return innerFunction; // return the closure
}

const counter = outerFunction();

console.log("=== Example 1: Simple Closure ===");
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/*
Explanation:
- outerFunction runs once and returns innerFunction
- counter() keeps modifying the same 'count' variable
*/


// ===== Example 2: Encapsulation with Object =====
function createCounter() {
  let count = 0; // hidden private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("\n=== Example 2: Encapsulation with Object ===");
console.log("Counter1 increment:", counter1.increment()); // 1
console.log("Counter1 increment:", counter1.increment()); // 2
console.log("Counter1 decrement:", counter1.decrement()); // 1
console.log("Counter1 getCount:", counter1.getCount());   // 1
console.log("Counter2 getCount:", counter2.getCount());   // 0
console.log("Counter1 object:", counter1);

/*
Explanation:
- counter1 and counter2 have SEPARATE 'count' values
- counter1 count = 1
- counter2 count = 0
- we cannot directly access 'count' from outside, only via methods
*/
