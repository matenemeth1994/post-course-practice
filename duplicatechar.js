// 08. How do you print duplicate characters from a string?

let string = "hhello I aam a jjunior web ddeveloper";

const findDuplicates = (text) => {
    const stringArray = text.split("");
    const uniqueKeyStore = new Map();
    const output = [];

    stringArray.forEach((character) => {
        if (uniqueKeyStore.get(character) && !output.includes(character)) {
            output.push(character);
        } else {
            uniqueKeyStore.set(character, character);
        }
    });

    return output;
};

