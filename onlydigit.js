// 16. How do you check if a string contains only digits?

let string = "32524643322";

const onlyDigits = (text) => {
  return parseInt(text).toString() === text;
};

console.log(onlyDigits(string));
