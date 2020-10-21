// The basics of promises
const myPromise = () => {
  return new Promise((resolve, reject) => {
    // resolve("good resolve");
    reject("bad reject");
  });
};

const run = async () => {
  try {
    const data = await myPromise();
    console.log(data);
  } catch (error) {
    console.log("return a reject :", error);
  }
};

// console.log("Before");
// run();
// console.log("After");

// nested promises
// multiple promises

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

const allPromises = async () => {
  try {
    const data = await Promise.allSettled([
      onePromises(),
      twoPromises(),
      threePromises(),
    ]);
    data.forEach((element) => {
      if (element.status === "fulfilled") {
        console.log("A success: ", element.value);
      } else {
        throw element.reason;
      }
    });
  } catch (error) {
    console.log("A reject: ", error);
  }
};
allPromises();
