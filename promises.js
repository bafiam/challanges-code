// The basics of promises
const myPromise = () => {
  return new Promise((resolve, reject) => {
    resolve("good resolve");
    // reject("bad reject")
  })
    .then((data) => {
      console.log(data);
      return 2;
    })
    .then((data) => {
      console.log(data);
      return data * 2;
    })
    .then((data) => {
      console.log(data);
      return data * 2;
    })
    .then((data) => {
      console.log(data);
      return data * 2;
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
// myPromise()

// Nested promises
const onePromises = () => {
  return new Promise((resolve, reject) => {
    resolve("the baba first promise");
  });
};

const twoPromises = () => {
  return new Promise((resolve, reject) => {
    resolve("the baba second promise");
  });
};

const threePromises = () => {
  return new Promise((resolve, reject) => {
    reject("the baba third promise");
  });
};

const runPromises = () => {
  return Promise.allSettled([onePromises(), twoPromises(), threePromises()])
    .then((data) => {
      data.forEach((element) => {
        if (element.status === "fulfilled") {
          console.log("ALL fulfilled :", element.value);
        } else {
          throw element.reason;
        }
      });
      // const [data1, data2, data3] = data;
      // console.log(data1);
      // console.log(data2);
      // console.log(data3);
    })
    .catch((err) => {
      console.log("rejected promise: ", err);
    });
};
runPromises();
