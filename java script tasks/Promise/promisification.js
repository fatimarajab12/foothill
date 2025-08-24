const products = [
  { id: 1, title: "iPhone 9", price: 549 },
  { id: 2, title: "Samsung Galaxy S22", price: 999 },
  { id: 3, title: "MacBook Pro", price: 1999 },
];

// function getProductTitles(callback) {
//   setTimeout(() => {
//     const titles = products.map(p => p.title);
//     callback(null, titles); // (error, result) 
//   }, 1000);
// }

// // Usage with callback
// getProductTitles((err, titles) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log("Callback result:", titles);
//   }
// });


// Promisified version
function getProductTitlesPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const titles = products.map(p => p.title);
        resolve(titles);  //  resolve with data
      } catch (error) {
        reject(error);    //  reject on error
      }
    }, 1000);
  });
}

getProductTitlesPromise()
  .then(titles => {
    console.log("Promise result:", titles);
  })
  .catch(err => {
    console.error("Error:", err);
  });
