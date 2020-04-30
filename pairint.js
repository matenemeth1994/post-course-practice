// 06. How do you find all pairs of an integer array whose sum is equal to a given number?
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let givenNum = 5;

const findPairsWhichSum = (numberArray, goal) => {
  return [...new Set(numberArray)]
    .filter((currentNumber) => {
      if (goal / 2 > currentNumber) {
        return false;
      }
      if (goal / 2 === currentNumber) {
        return numberArray.filter((item) => currentNumber === item).length > 1;
      }
      return goal - currentNumber in numberArray;
    })
    .map((item) => [item, goal - item]);
}

console.log(findPairsWhichSum(numArr, givenNum));
