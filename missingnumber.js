let numArray = [11, 1, 2, 3, 5, 6, 7, 8, 10];
const missingNumbers = [];

const findMissingNumbers = (arr) => {
  const sortArr = arr.sort((a, b) => {
    return a - b;
  });
  const firstNumber = sortArr[1];
  const lastNumber = sortArr[sortArr.length - 1];

  for (let index = firstNumber; index <= lastNumber; index++) {
    if (sortArr.indexOf(index) === -1) {
      missingNumbers.push(index);
    }
  }
  return missingNumbers;
};

findMissingNumbers(numArray);
console.log(missingNumbers);

