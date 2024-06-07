function showAlert() {
    alert("This is an alert box. Click OK to continue.");
}

function showPrompt() {
    const userName = prompt("Please enter your name:");
    
    if (userName !== null && userName.trim() !== "") {
        alert("Hello, " + userName + "!");
    } else {
        alert("No name entered.");
    }
}

function showConfirm() {
    const userConfirmed = confirm("Do you want to proceed?");
    
    if (userConfirmed) {
        alert("You chose to proceed.");
    } else {
        alert("You chose not to proceed.");
    }
}
