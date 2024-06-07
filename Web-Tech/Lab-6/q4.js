document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");

    textInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            console.log("Enter key pressed. You entered: " + textInput.value);
            textInput.value = "";
        }
    });
});
