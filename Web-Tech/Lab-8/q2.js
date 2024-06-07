const replaceMultipleAsWithB = (input) => {
    const regex = /a{2,}/g;
    return input.replace(regex, 'b');
};

const testString = "I have a few aaardvarks and a bananaaa.";
const result = replaceMultipleAsWithB(testString);

console.log("Original:", testString);
console.log("Modified:", result);
