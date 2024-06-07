let inputString = prompt('Enter a sentence:');

let words = inputString.split(' ');

let longestWord = '';
let maxLength = 0;

words.forEach(word => {
    if (word.length > maxLength) {
        maxLength = word.length;
        longestWord = word;
    }
});

console.log(`The longest word is: ${longestWord}`);