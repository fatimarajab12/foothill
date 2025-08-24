function fetchData(userId) {
  return new Promise((resolve) => {
    console.log("Fetching user data...");

    setTimeout(() => {
      const user = { id: userId, name: "Alice", role: "Admin" };
      resolve(user); // resolve instead of callback
    }, 2000);
  });
}
// fetchData(101) is called.

// This returns a Promise object immediately (not the data yet).

// Inside fetchData, after 2 seconds:

// If success → resolve(user) is called with this object:

// { id: 101, name: "Alice", role: "Admin" }


// If failure → reject(errorMessage) is called.

// When resolve(user) runs → the Promise becomes fulfilled .

// That resolved user object is automatically passed into the first .then() as its parameter
fetchData(101)
  .then((user) => {
    console.log(" User data received:", user);
    return { ...user, role: "Super Admin" }; 
  })
  .then((modifiedUser) => {
    console.log(" Modified user data:", modifiedUser);
  });

  // The data in the first .then() comes from the value you pass into resolve(...) inside the Promise.

// If you resolve(user), then .then() receives user.

// If you resolve("Hello"), then .then() gets "Hello".

// Whatever  pass to resolve(...) becomes the input of the next .then().