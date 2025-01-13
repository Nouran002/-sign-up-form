document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const firstname = document.getElementById("first-name");
    const errorFname = document.getElementById("errorFname");
    if (firstname.value.trim() === '') {
        firstname.classList.add('is-invalid');
        errorFname.textContent = 'First Name cannot be empty';
        errorFname.style.display = 'block';
    } else {
        firstname.classList.remove('is-invalid');
        errorFname.style.display = 'none';
    }

    const lastname = document.getElementById("last-name");
    const errorLname = document.getElementById("errorLname");
    if (lastname.value.trim() === '') {
        lastname.classList.add('is-invalid');
        errorLname.textContent = 'Last Name cannot be empty';
        errorLname.style.display = 'block';
    } else {
        lastname.classList.remove('is-invalid');
        errorLname.style.display = 'none';
    }

    const email = document.getElementById('email');
    const errorEmail = document.getElementById("errorEmail");
    if (email.value.trim() === '') {
        email.classList.add('is-invalid');
        errorEmail.textContent = 'Looks like this is not an email';
        errorEmail.style.display = 'block';
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            errorEmail.textContent = 'Looks like this is not an email';
            errorEmail.style.display = 'block';
        } else {
            email.classList.remove('is-invalid');
            errorEmail.style.display = 'none';
        }
    }

    const pass = document.getElementById('password');
    const errorPass = document.getElementById('errorPass');
    if (pass.value.trim() === '') {
        pass.classList.add('is-invalid');
        errorPass.textContent = 'Password cannot be empty';
        errorPass.style.display = 'block';
    } else {
        pass.classList.remove('is-invalid');
        errorPass.style.display = 'none';
    }
});
