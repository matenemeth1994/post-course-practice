// 07. How do you reverse the words in a sentence?

let sentence = "I am a web developer";

const revWords = (str) => {
  return str.split("").reverse().join("");
};

console.log(revWords(sentence));
