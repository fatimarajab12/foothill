// Simulate multiple API requests
function fetchData(source) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 2000) + 1000; 
    console.log(`Fetching from ${source}...`);

    setTimeout(() => {
      const success = Math.random() > 0.2; 
      if (success) {
        resolve(` Data from ${source}`);
      } else {
        reject(` Failed to fetch from ${source}`);
      }
    }, time);
  });
}

// Use Promise.all
Promise.all([
  fetchData("API-1"),
  fetchData("API-2"),
  fetchData("API-3"),
])
  .then((results) => {
    console.log(" All data fetched successfully:", results);
  })
  .catch((error) => {
    console.error(" One of the requests failed:", error);
  });
