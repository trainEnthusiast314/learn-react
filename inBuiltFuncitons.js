const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item) => {
  return item * 2;
});

console.log(newArr);

const fourArr = [];
newArr.forEach((item) => {
  fourArr.push(item * 4);
});

console.log(newArr);
console.log(fourArr);

const sum = fourArr.reduce((acc, curr) => {
  return acc + curr;
});

let a = { x: 10, y: 20, z: 40 };
let b = { a: "tiger", b: "lion", c: "sealion" };
let c = { ...a, ...b, m: "acrobat", n: 26 };
console.log(c);
