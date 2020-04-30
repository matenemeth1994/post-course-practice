// 05. How do you find the largest and smallest number in an unsorted integer array?
let numArr = [4, 3, 2, 1, 5, 10, 6, 9, 7, 8];
let newNumArr = [];

const findInt = (arr) => {
  const sortArr = arr.sort((a, b) => {
    return a - b;
  });
  newNumArr.push(sortArr[0], sortArr[sortArr.length - 1]);
};

findInt(numArr);
console.log(newNumArr);
