let dict = new Object();
(dict[1] = "one"), (dict[2] = "two");
dict[1] = "one one";
dict.FirstName = "Chris";

const f = () => {
  console.log("my function executes");
};
dict.Method = f;

for (const key in dict) {
  if (dict.hasOwnProperty(key)) {
    const element = dict[key];
    if (typeof element === "function") {
      element();
    }
    console.log(`${key} ==> ${element}`);
  }
}
const run = (animals) => {
  let dict = new Object();
  animals.forEach((element) => {
    if (dict.hasOwnProperty(element)) {
      for (const key in dict) {
        if (key == element) {
          let count = dict[key];
          dict[key] = count + 1;
        }
      }
    } else {
      dict[element] = 1;
    }
  });
  return dict;
};
// let  animals = [
//   "bird",
//   "ant",
//   "bison",
//   "camel",
//   "duck",
//   "elephant",
//   "bison",
//   "bird",
//   "elephant"
// ];
let  animals = [
 1,2,3,4,4,5,6,6,6,1,1,1
];
const res = run(animals)
console.log(res);

