function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /\S+@\S+\.\S+/;
    var phoneRegex = /^\d+$/; // Updated regex to accept only digits
    var today = new Date();
    var dobDate = new Date(dob);
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    var isValid = true;

    // Name validation
    if (name === "" || !name.match(nameRegex)) {
        document.getElementById("nameError").innerHTML = "Please enter a valid name (only letters).";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    // Email validation
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Phone number validation
    if (!phone.match(phoneRegex) || phone.length !== 10) {
        document.getElementById("phoneError").innerHTML = "Please enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    // DOB validation
    if (age < 18) {
        document.getElementById("dobError").innerHTML = "You must be at least 18 years old.";
        isValid = false;
    } else {
        document.getElementById("dobError").innerHTML = "";
    }

    return isValid;
}
