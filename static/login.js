// Form submission and validation
document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const errorMessageElement = document.getElementById('error-message');

    if (email != "user@gmail.com" || password != "user1234") {
        // Display error message
        errorMessageElement.innerText = 'Invalid username or password. Please try again.';
        errorMessageElement.classList.add('show');
    }

});

