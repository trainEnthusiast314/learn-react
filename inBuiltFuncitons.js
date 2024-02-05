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
