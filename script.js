const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Add event listener to close the menu when a link is clicked

const navLinksList = document.querySelectorAll('.nav-links a');
navLinksList.forEach((link) => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// contact form validation
function validateForm() {
    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    // Get form inputs
    var fullName = document.getElementById("fullName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var emailSubject = document.getElementById("emailSubject").value;
    var message = document.getElementById("message").value;

    // Validate Full Name
    if (fullName === "") {
        document.getElementById("nameError").innerHTML = "Full Name is required";
        return false;
    }

    // Validate Email Address
    if (emailAddress === "") {
        document.getElementById("emailError").innerHTML = "Email Address is required";
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress)) {
            document.getElementById("emailError").innerHTML = "Invalid email format";
            return false;
        }
    }

    // Validate Phone Number
    if (phoneNumber === "") {
        document.getElementById("phoneError").innerHTML = "Phone Number is required";
        return false;
    }

    // Validate Email Subject
    if (emailSubject === "") {
        document.getElementById("subjectError").innerHTML = "Email Subject is required";
        return false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Message is required";
        return false;
    }

    // If all validations pass, the form is submitted
    alert("Message sent successfully!");
    return true;
}