const arr = ["abc", "hello", "c", "d", "abc", "c", "d"];

let obj = {};

for (const value of arr) {
  if (!obj[value]) {
    obj[value] = value;
  } // no need for else statement

}

console.log(Object.keys(obj));
for (const key in obj) {
  console.log(key);
}
