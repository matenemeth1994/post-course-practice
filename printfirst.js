// 10. How do you print the first non-repeated character from a string?

let string = "hh ee ll o ii amm aa ddeevveellooppeerr";

const printFirst = (str) => {
  for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index);
    if (str.indexOf(char) == index && str.indexOf(char, index + 1) == -1) {
      return char;
    }
  }
  return null;
};

console.log(printFirst(string));

