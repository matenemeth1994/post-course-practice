// 02. How do you find the duplicate number on a given integer array?
// 03. How do you find duplicate numbers in an array if it contains multiple duplicates?
// 04. How do you remove duplicates from an array in place?

let numArray = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10];
const doubleNum = [];
const removedDuplicatesArray = [];

const findDuplicateNumbers = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == arr[index + 1]) {
      doubleNum.push(arr[index]);
    }
  }
  removedDuplicatesArray.push(...new Set(arr));
};

findDuplicateNumbers(numArray);
console.log(doubleNum);
console.log(removedDuplicatesArray);
