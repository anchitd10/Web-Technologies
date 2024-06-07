let inputString = prompt("Enter a string:");
let words = inputString.split(' ');

let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

let resultString = capitalizedWords.join(' ');

console.log(resultString);
