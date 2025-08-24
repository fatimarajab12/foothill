// Function that simulates fetching user data
function fetchUser(userId, callback) {
  console.log("Fetching user data...");

  setTimeout(() => {
    const user = { id: userId, name: "Alice", role: "Admin" };
    callback(user); // Call the callback with the user data
  }, 2000);
}

// Using the callback
fetchUser(101, (userData) => {
  console.log(" User data received:", userData);
});

console.log("This runs immediately (before user data is fetched).");
