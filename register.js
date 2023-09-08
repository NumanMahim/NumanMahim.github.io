// Add this JavaScript to check if passwords match
document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const passwordWarning = document.getElementById("password-warning");

    confirmPassword.addEventListener("input", function () {
        if (confirmPassword.value === password.value) {
            passwordWarning.style.display = "none";
        } else {
            passwordWarning.style.display = "block";
        }
    });
});
