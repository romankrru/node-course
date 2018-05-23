const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("hey");
    reject("error message");
  }, 1000);
});

somePromise.then(res => console.log(res), err => console.log(err));
