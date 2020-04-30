// 13. How do you check if two strings are a rotation of each other?

const txt1 = "hello";
const txt2 = "olleh";

const areRotations = (text1, text2) => {
  if (text1.length != text2.length) {
    return false;
  }
  return (text1 + text1).indexOf(text2) != -1;
};

console.log(areRotations(txt1, txt2));
