function validateForm() {
    const form = document.getElementById("courseRegistrationForm");

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const age = parseInt(form.age.value, 10);
    const course = form.course.value;

    if (name === "") {
        alert("Name is required.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number should be a 10-digit number.");
        return false;
    }

    if (isNaN(age) || age < 18) {
        alert("You must be at least 18 years old to register.");
        return false;
    }

    if (course === "") {
        alert("Please select a course.");
        return false;
    }

    return true;
}
