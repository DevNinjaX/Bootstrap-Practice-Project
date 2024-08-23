// Form submission and validation
document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const errorMessageElement = document.getElementById('error-message');

    if (email !== "admin@gmail.com" || password !== "admin1234") {
        // Display error message
        errorMessageElement.innerText = 'Invalid username or password. Please try again.';
        errorMessageElement.classList.add('show');
    } else {
        const toastElement = document.getElementById('loginToast');
        const toast = new bootstrap.Toast(toastElement);
        toast.show();

        // Optional: Redirect after a short delay
        setTimeout(() => {
            window.location.href = './admin.html';
        }, 2000);
    }
});