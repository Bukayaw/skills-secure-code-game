
document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');

    nameError.innerHTML = "";
    passwordError.innerHTML = "";

    if (name.trim() === '' || password.trim() === '' || name.length <= 4 || password.length <= 4) {
        if (name.trim() === '') {
            nameError.innerHTML = "Name is required.";
        } else if (name.length <= 4) {
            nameError.innerHTML = "Name should be more than 4 characters.";
        }

        if (password.trim() === '') {
            passwordError.innerHTML = "Password is required.";
        } else if (password.length <= 4) {
            passwordError.innerHTML = "Password should be more than 4 characters.";
        }
    } else {
        window.location.href = "hotel.html";
    }
});