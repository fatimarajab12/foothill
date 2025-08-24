// Dummy products array
const products = [
  { id: 1, title: "Laptop" },
  { id: 2, title: "Phone" },
  { id: 3, title: "Tablet" }
];

// Promise-based function
function getProductTitlesPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const titles = products.map(p => p.title);
        resolve(titles);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

async function fetchProductTitles() {
  try {
    const titles = await getProductTitlesPromise(); // wait for the promise
    console.log("Product Titles:", titles);
  } catch (error) {
    console.error("Error fetching product titles:", error);
  }
}
// Call the async function
fetchProductTitles();
