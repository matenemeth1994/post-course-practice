// 09. How do you check if two strings are anagrams of each other?

let first = "Dormitory";
let second = "dirty room##";

const isAnagram = (str1, str2) => {
  return format(str1) === format(str2);
};

const format = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

let output = isAnagram(first, second);

console.log(output);
