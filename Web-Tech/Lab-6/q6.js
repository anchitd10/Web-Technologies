function extractCharacters(string, startIndex, numChars) {
    if (startIndex < 0 || startIndex >= string.length) {
        throw new Error("Invalid start index.");
    }

    if (numChars < 0) {
        throw new Error("Number of characters to extract cannot be negative.");
    }

    return string.slice(startIndex, startIndex + numChars);
}

const text = "Learning JavaScript can be fun!";
const start = 6;
const length = 10;

const result = extractCharacters(text, start, length);

console.log("Extracted text:", result);
