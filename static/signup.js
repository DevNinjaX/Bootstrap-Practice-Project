// Form submission and validation
document.getElementById("rbtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const errorMessageElement = document.getElementById('error-message');

    if (name === "" || email === "" || password === "" || name === " " || email === " " || password === " ") {
        // Display error message
        errorMessageElement.innerText = 'Please fill the form';
        errorMessageElement.classList.add('show');
    } else {
        const toastElement = document.getElementById('loginToast');
        const toast = new bootstrap.Toast(toastElement);
        toast.show();

        // Optional: Redirect after a short delay
        setTimeout(() => {
            window.location.href = './login.html';
        }, 2000);
    }
});