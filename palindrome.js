// 11. How do you check if a given string is a palindrome?

let pal = "eye";

const checkPalindrom = (str) => {
  return str == str.split("").reverse().join("");
};

console.log(checkPalindrom(pal));