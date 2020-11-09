let dict = new Object()
dict[1] = "one",
dict[2] = "two"
dict[1] = "one one"
dict.FirstName = "Chris";

const f = () => {
  console.log("my function executes")
}
dict.Method = f;


for (const key in dict) {
  if (dict.hasOwnProperty(key)) {
    const element = dict[key];
    if (typeof(element) === 'function') {
      element()
    }
    console.log(`${key} ==> ${element}`) 
  }
}
