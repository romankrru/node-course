const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      }

      reject("Unable to perform operation");
    }, 1500);
  });
};

const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("hey");
    reject("error message");
  }, 1000);
});

somePromise.then(res => console.log(res), err => console.log(err));

asyncAdd(3, 7)
  .then(r => {
    console.log(r);
    return asyncAdd(20, "21");
  })
  .then(r => console.log(r))
  .catch(err => console.log(err));
