function calculateAge() {
    const dobField = document.getElementById("dob");
    const dob = dobField.value.trim();
    
    const birthDate = new Date(dob);
    if (isNaN(birthDate.getTime())) {
        alert("Invalid date format. Please use 'YYYY-MM-DD'.");
        return;
    }

    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const birthdayPassed = (today.getMonth() > birthDate.getMonth()) || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!birthdayPassed) {
        age -= 1;
    }

    const resultElement = document.getElementById("ageResult");
    resultElement.textContent = `Your age is ${age} years.`;
}
