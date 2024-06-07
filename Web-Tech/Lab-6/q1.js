function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("randomNumberDisplay").value = randomNumber;
}